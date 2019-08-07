<!-- keywords: react native, 推送, 数据库, android, iOS, 即时通讯, 聊天 -->
<!-- description: 网易云信即时通讯web im sdk 支持react native, 使用realm数据库, 支持推送，逼近原生安卓、iOS应用体验 -->

# ReactNative集成

## React Native SDK简述
- 在5.3.0开始，云信Web-SDK官方对React Native做了适配，推荐RN版本>=0.51
- 云信WebSDK React Native(以下简称RN-SDK)的大部分API使用方法与SDK在Web浏览器环境使用相同，以减少开发者使用SDK所带来的障碍。
- 相比于Web浏览器环境及微信小程序环境，React-Native版本的SDK在以下应用场景上会略有不同。

## React Native SDK下载链接
* [5.7.0](https://yx-web-nosdn.netease.im/package/1540260686/NIM_ReactNative_SDK_v5.7.0.zip?download=NIM_ReactNative_SDK_v5.7.0.zip)
* [5.8.0](https://yx-web-nosdn.netease.im/package/1542789705/NIM_ReactNative_SDK_v5.8.0.zip?download=NIM_ReactNative_SDK_v5.8.0.zip)
* [5.9.0](https://yx-web-nosdn.netease.im/package/1543472765/NIM_ReactNative_SDK_v5.9.0.zip?download=NIM_ReactNative_SDK_v5.9.0.zip)
* [5.9.1](https://yx-web-nosdn.netease.im/package/1545298286/NIM_ReactNative_SDK_v5.9.1.zip?download=NIM_ReactNative_SDK_v5.9.1.zip)
* [6.1.0](https://yx-web-nosdn.netease.im/package/1548143367/NIM_ReactNative_SDK_v6.1.0.zip?download=NIM_ReactNative_SDK_v6.1.0.zip)
* [6.2.0](https://yx-web-nosdn.netease.im/package/1552560463/NIM_ReactNative_SDK_v6.2.0.zip?download=NIM_ReactNative_SDK_v6.2.0.zip)
* [6.3.0](https://yx-web-nosdn.netease.im/package/1555585481/NIM_ReactNative_SDK_v6.3.0.zip?download=NIM_ReactNative_SDK_v6.3.0.zip)
* [6.5.0](https://yx-web-nosdn.netease.im/package/1559006751/NIM_ReactNative_SDK_v6.5.0.zip?download=NIM_ReactNative_SDK_v6.5.0.zip)
* [6.6.6](https://yx-web-nosdn.netease.im/package/1562930644/NIM_ReactNative_SDK_v6.6.6.zip?download=NIM_ReactNative_SDK_v6.6.6.zip)
* [6.7.0](https://yx-web-nosdn.netease.im/package/1564641277/NIM_ReactNative_SDK_v6.7.0.zip?download=NIM_ReactNative_SDK_v6.7.0.zip)

## React Native 示例DEMO

* <a href="https://github.com/netease-im/NIM_ReactNative_Demo" target="_blank">React Native IM部分源码</a>
* <a href="https://www.pgyer.com/iZGU" target="_blank">React Native IM示例DEMO体验链接</a>

* 体验账号：000-999，a01-a99，b01-b99均可用于体验，密码均为123456，如果登录不上可以切换账号再尝试

## 本地数据库
RN-SDK同时支持含数据库和不含数据库的使用方式，根据开发者的业务场景，可自行处理。

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

- 使用数据库，需要开发者安装使用`realm`，[realm](https://realm.io/docs/javascript/latest/#getting-started)，RN-SDK目前不支持但不限制使用`sqlite3`作为本地数据库，开发者可以根据自己的需要，额外做存储处理。
- RN-SDK可以通过`usePlugin`方法将数据库挂在到sdk实例上，用法如下：

``` javascript
  const SDK = require('NIM_Web_SDK_v5.*.js');
  const Realm = require('realm');
  // 此处将外置的realm数据库挂载到sdk上，供sdk使用
  SDK.usePlugin({
    db: Realm,
  });
  const nim = SDK.NIM.getInstance({
    // debug: true,
    appKey: 'appKey',
    account: 'account',
    token: 'token',
    db: true,
    onconnect: onConnect,
    onwillreconnect: onWillReconnect,
    ondisconnect: onDisconnect,
    onerror: onError
  });
```

## 消息推送
### 不带推送
- 云信WebSDK5.6.0版本开始支持可配置的不带推送能力，开发者在配置工程时，无需引入相应的安卓和iOS推送依赖
- 初始化时，相关的`iosPushConfig`,`androidPushConfig`参数不填即可。
- 相应的demo[no-push分支](https://github.com/netease-im/NIM_ReactNative_Demo/tree/no-push)

### 带推送
- 云信WebSDK5.3.0版本开始支持推送能力，开发者在配置工程时，引入相应的安卓和iOS推送依赖
- iOS推送
  - iOS 端推送配置首先需要开发者去苹果官网申请具有推送能力的证书，可参考 [iOS 推送配置](/docs/product/IM即时通讯/SDK开发集成/iOS苹果推送配置)
  - 配置完证书后，按照 [RN 推送配置](https://reactnative.cn/docs/pushnotificationios/)添加相关能力
- 安卓推送
  - 参考demo的安卓推送(java)文件目录在 ./android/nimpush，
  - 参考demo的安卓推送(js)文件目录在 ./nim/NIM_Android_Push.js
  - 配置参见[安卓推送配置](https://github.com/netease-im/NIM_ReactNative_Demo/blob/master/%E5%AE%89%E5%8D%93%E6%8E%A8%E9%80%81%E9%85%8D%E7%BD%AE.md)

``` javascript
  // iOS/安卓端外推送代码
  const iosPushConfig = {
    tokenName: 'push_online',
  };
  const androidPushConfig = {
    xmAppId: '2882303761517806219',
    xmAppKey: '5971780672219',
    xmCertificateName: 'RN_MI_PUSH',
    hwCertificateName: 'RN_HW_PUSH',
    mzAppId: '113798',
    mzAppKey: 'b74148973e6040c6abbda2af4c2f6779',
    mzCertificateName: 'RN_MZ_PUSH',
    fcmCertificateName: 'RN_FCM_PUSH',
  };
  var nim = SDK.NIM.getInstance({
    // ...
    iosPushConfig,
    androidPushConfig,
    // ...
  })

  // 安卓端内推送示例代码
  import { showNotification } from '../nim/NIM_Android_Push';
  showNotification({
    icon: '', title: msg.from, content: showText, time: `${msg.time}`,
  });
```

## 发送文件/图片等

由于RN-SDK发送文件消息需要额外获取文件消息的属性一起发送，所以不建议直接使用`sendFile`接口发送文件，而是先通过`previewFile`获取文件的句柄，通过其他api方法将文件属性添加回文件对象，最后再使用`sendFile`接口发送文件。以下为发送图片文件的示例：

``` javascripte
  nim.previewFile({
    type: 'image',
    filePath: options.filePath,
    uploadprogress(obj) {
      // ...
    },
    done: (error, file) => {
      // 通过其他API接口获取到长、宽、大小等图片属性
      file.w = options.width;
      file.h = options.height;
      file.md5 = options.md5;
      file.size = options.size;
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

- 消息需要额外附加属性列表：
  - 图片对象
    - size: 大小, 单位byte
    - md5: md5
    - w: 宽, 单位px
    - h: 高, 单位px
  - 音频对象
    - size: 大小, 单位byte
    - md5: md5
    - dur: 长度, 单位ms
  - 视频对象
    - size: 大小, 单位byte
    - md5: md5
    - w: 宽, 单位px
    - h: 高, 单位px
    - dur: 长度, 单位ms
  - 文件对象
    - size: 大小, 单位byte
    - md5: md5

参见[消息对象](http://dev.yunxin.163.com/docs/product/IM%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF/SDK%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/Web%E5%BC%80%E5%8F%91%E9%9B%86%E6%88%90/%E6%B6%88%E6%81%AF%E6%94%B6%E5%8F%91#图片对象)

## 全局属性注入
由于浏览器环境的全局变量为window，而react-native的全局变量为global，其属性不尽相同，为了做到兼容及适配，RN-SDK会mock一些属性，诸如global.navigator, global.location, global.io等，一般不影响用户正常使用


## 常用配置

### 应用图标更改

- iOS更改目录
<项目路径>/ios/NIM_ReactNative_Demo/Images.xcassets/AppIcon.appiconset

- Android更改目录
<项目路径>/android/app/src/main/res

### 应用显示名称更改

- iOS更改地址
更改图中 Display Name
![](http://yx-web.nos.netease.com/webdoc/default/displayname.png)
或者修改 info.plist 配置

    ```objc
<dict>
	//... other keys
	<key>CFBundleDisplayName</key>
	<string>更换你想替换的名称</string>
	//...
</dict>
```

- Android更改地址
<项目路径>/android/app/src/main/res/values/strings.xml
``` xml
  <resources>
    <string name="app_name">{所需更改的APP名}</string>
  </resources>
```
