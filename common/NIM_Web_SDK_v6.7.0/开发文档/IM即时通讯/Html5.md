<!-- keywords: html5, Codova、Electron、HBuilder, 即时通讯, 聊天, 移动端适配 -->
<!-- description: 网易云信JavaScript SDK在移动端/HTML5页面集成与传统在桌面浏览器开发JS应用并没有任何差别，开发者们可以使用VUE、React、Angular、JQuery、Zepto、Hammer等等开发框架进行开发，能完全适配Codova、AppCan、HBuilder -->

# Html5及混合APP集成

网易云信JavaScript SDK在移动端/HTML5页面集成与传统在桌面浏览器开发JS应用并没有任何差别，开发者们可以使用VUE、React、Angular、JQuery、Zepto、Hammer等等开发框架进行开发。

浏览器版本的SDK已适配大多数混合APP框架。

本页面旨在对一些开发者常见的使用问题做一些梳理。

## HTML5 示例DEMO
* [HTML5示例源码(VUE)](https://github.com/netease-im/NIM_Web_Demo_H5)
* 体验账号：000-999，a01-a99，b01-b99均可用于体验，密码均为123456，如果登录不上可以切换账号再尝试

![Html5 Demo](https://yx-web-nosdn.netease.im/webdoc/weixin/nim_h5.png)


## 本地数据库

虽然部分安卓手机的chrome浏览器已支持浏览器indexedDB数据库，但是其性能差异较大；此外，大多数iOS的Safari浏览器对indexedDB数据库支持不佳，导致不少开发者使用云信的Web-SDK过程中，出现会话、未读数在不同机型上不一致的情况。

所以建议用户在html5页面使用SDK时，将数据库支持关闭。

- 不使用数据库，即在sdk初始化时对`db`设为`false`即可，如：

``` javascript
  const nim = NIM.getInstance({
    // debug: true,
    appKey: 'appKey',
    account: 'account',
    token: 'token',
    db: false,
    onconnect: onConnect,
    onwillreconnect: onWillReconnect,
    ondisconnect: onDisconnect,
    onerror: onError
  });
```

## 消息推送

虽然html5页面可以在移动端浏览器中打开，但是不支持推送哦

## 关于混合APP

Hybrid App是指介于web-app、native-app这两者之间的app，它虽然看上去是一个Native App，但只有一个UI WebView，里面访问的是一个Web App。应用的本质上只是包了个客户端的壳，其实里面是HTML5的网页。如掌上百度和淘宝客户端Android版，走的也是Hybrid App的路线，不过掌上百度里面封装的不是WebView，而是自己的浏览内核，所以体验上更像客户端，更高效。

目前经过测试，云信提供的Web-SDK(浏览器版本)，兼容Codova、AppCan、HBuilder、Electron、Node-Webkit等主流混合APP框架。官方提供的html5 demo可以直接嵌入使用。

由于云信Web-SDK是基于原生JavaScript编写，没有对TypeScript做过适配，所以尚不支持基于ts语言编写的框架，诸如e-gret白鹭引擎。
