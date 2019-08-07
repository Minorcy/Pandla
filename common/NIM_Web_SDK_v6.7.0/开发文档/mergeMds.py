# -*- coding:utf-8 -*-
# 下载 http://wkhtmltopdf.org/downloads.html
# pip install markdown pdfkit pygments

import re
import os
import pdb
import urllib
import markdown
import pdfkit

output_html = 'output.html'
output_md = 'output.md'


def md2html(mdstr):
    extensions = [
        'markdown.extensions.codehilite',
        'markdown.extensions.extra',
        'markdown.extensions.tables',
        'markdown.extensions.toc',
        'markdown.extensions.abbr',
        'markdown.extensions.attr_list',
        'markdown.extensions.def_list',
        'markdown.extensions.fenced_code',
        'markdown.extensions.footnotes',
        'markdown.extensions.smart_strong',
        'markdown.extensions.meta',
        'markdown.extensions.nl2br',
    ]

    html = '''
    <html lang="zh-cn">
        <head><meta content="text/html; charset=gbk" http-equiv="content-type">
        <link href="./themes/github.css" rel="stylesheet">
        <link href="./themes/codehilite.css" rel="stylesheet"></head>
        <body>%s</body>
    </html>
    '''
    ret = markdown.markdown(mdstr, extensions=extensions)
    return html % ret


filelist = []
with open('mergeMdList.data', 'r') as f:
    filenames = f.readlines()
    for filename in filenames:
        filename = filename.strip()
        if re.search(r'\.md$', filename):
            filename = filename.decode('utf-8', 'ignore')
            # filename = re.sub('\s+', '', filename)
            filelist.append(filename)
print 'read file list done ...'

linelist = []
ignore = False
for filename in filelist:
    with open(filename, 'r') as f:
        for line in f.readlines():
            line = line.rstrip().decode('utf-8', 'ignore')
            if re.search(u'\s*<!--SKIP-BEGIN-->\s*', line):
                ignore = True
                continue
            if re.search(u'\s*<!--SKIP-END-->\s*', line):
                ignore = False
                continue
            if not ignore:
                if re.search(r'\(/docs/product/[^#\)]+', line):
                    repl_str = re.findall(r'/docs/product/[^#\)]+', line)[0]
                    quote_str = urllib.quote(repl_str.encode('utf-8', 'ignore'))
                    quote_str = u'http://dev.netease.im%s' % quote_str
                    line = line.replace(repl_str, quote_str)
                linelist.append(line)
print 'merge markdowns done ...'

# linelist = map(lambda x: x.encode('utf-8', 'ingore'), linelist)
with open(output_html, 'w') as f:
    html = md2html('\n'.join(linelist))
    # html = html.encode('utf-8', 'ignore')
    html = html.encode('gbk', 'ignore')
    f.write(html)
    # f.writelines(linelist)
print 'generate htmls done ...'

# pdfkit.from_file(output_html, 'output.pdf')
os.system('wkhtmltopdf --page-size A4 --outline --outline-depth 1 output.html output.pdf')
print 'generate pdf done ...'

os.unlink(output_html)
# os.unlink(output_md)
print 'clear cache done ...'
# os.popen('md2pdf output.md --theme=./themes/mou.css')
