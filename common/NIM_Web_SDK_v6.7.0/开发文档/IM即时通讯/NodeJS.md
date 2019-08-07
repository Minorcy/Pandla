<!-- keywords: nodejs, IM, 聊天, 控制, 机器人, 教学白板, websocket -->
<!-- description: 网易云信即时通讯web im sdk 支持Nodejs，支持上传发送多媒体图片，点对点实时通讯,单聊,群聊,指令控制等等 -->

# NodeJS集成

## Nodejs SDK简述
- 在5.6.0开始，云信WebSDK官方对node js做了适配，可以将即时通讯应用业务场景推广到拥有nodejs环境的服务端
- nodejs版本的网易云信Web SDK目前支持IM基础业务、聊天室、教学白板(Websocket数据通道)
- 使用nodejs解决方案，可以充分运用到服务器即客户端，客户端即服务器的使用场景中，诸如linux工业控制、聊天机器人、数据管道、单机监控、规模化数据分析等等

## Nodejs SDK下载链接
* [5.8.0](https://yx-web-nosdn.netease.im/package/1542176202/NIM_NodeJS_SDK_v5.8.0.zip?download=NIM_NodeJS_SDK_v5.8.0.zip)
* [5.9.1](https://yx-web-nosdn.netease.im/package/1546075904/NIM_NodeJS_SDK_v5.9.1.zip?download=NIM_NodeJS_SDK_v5.9.1.zip)

## 本地数据库
- 由于服务器环境的存储系统具有多样性，SDK不在内部再对数据库进行集成，用户可以自行使用诸如mysql、oracle、ms-sql、sqlite、mongodb、hbase等等数据存储服务
- 使用nodejs sdk的同时，用户依然可以使用网易云信的server-api所提供的能力，直接对服务器数据进行操作，事半功倍

## 发送文件/图片等
- nodejs的上传接口请使用`filePath`参数

``` javascripte
  nim.previewFile({
    type: 'image',
    filePath: options.filePath,
    uploadprogress(obj) {
      // ...
    },
    done: (error, file) => {
      const { scene, to } = options;
      if (!error) {
        constObj.nim.sendFile({
          type: 'image',
          scene,
          to,
          file,
          done: (err, msg) => {
            if (err) {
              return;
            }
            this.appendMsg(msg);
          },
        });
      }
    },
  });
```

## 服务器日志记录
- SDK支持使用第三方的日志记录工具，辅助客户在服务器端使用文件log的方式记录日志，以下以`npm`-`log4js 3.*`第三方库为例，进行SDK的日志记录。
- 初始化`log4js`:

``` javascript
  const log4js = require('log4js');
  log4js.configure({
    replaceConsole: true,
    appenders: { nimlog: { type: 'file', filename: 'nim-debug.log' } },
    categories: { default: { appenders: ['nimlog'], level: 'ALL' } }
  });
  const logger = log4js.getLogger('nimlog');
```

- IM及聊天室部分日志插件引入方式：

``` javascript
  global.nim = NIM.getInstance({
    debug: true,
    logFunc: logger,
    // ...
  })
```

- 白板通道部分日志插件引入方式：

``` javascript
  global.wb = WhiteBoard.getInstance({
    debug: true,
    nim: global.nim,
    isCustom: true,
    logger
  })
```

## 全局属性注入
由于浏览器环境的全局变量为window，而nodejs的全局变量为global，其属性不尽相同，为了做到兼容及适配，SDK会mock一些属性，诸如navigator, location, WebSocket等对象到global中，一般不影响用户正常使用
