# <span id="Chrome屏幕共享">Chrome屏幕共享</span>

该章节主要介绍和**屏幕共享**相关的功能。包括：**开启屏幕共享**、**关闭屏幕共享**、**Chrome屏幕共享功能接入**功能，通过阅读本章节，您可以快速了解Web端桌面共享，实现了在Chrome 58+浏览器下以插件形式支持整个桌面共享、应用共享的多种屏幕共享能力。

## <span id="使用插件的方式进行屏幕共享">使用插件的方式进行屏幕共享</span>
- 说明
  - 该方法是用户自己集成chrome插件，并且初始化sdk时，传递chromeId参数

### <span id="开启屏幕共享">开启屏幕共享</span>

- API介绍
  - 可以调用该方法开启屏幕共享

- 示例

```js
netcall.startDevice({
  type: Netcall.DEVICE_TYPE_DESKTOP_CHROME_SCREEN
}).catch(function(err) {
  if (error.code === 404) {
    console.log('未安装插件')
  } else if (error.code === 20) {
    console.log('未获取到流'， err) 
  } else {
    console.log('启动屏幕共享失败', err)
  }
})
```

### <span id="关闭屏幕共享">关闭屏幕共享</span>

- API介绍
  - 可以调用该方法关闭屏幕共享

- 示例

```js
netcall.stopDevice(Netcall.DEVICE_TYPE_DESKTOP_CHROME_SCREEN).then(() => {
  console.log('屏幕共享关闭成功')
})
```
### <span id="Chrome屏幕共享功能接入">Chrome屏幕共享功能接入</span>

详情请点击：[Chrome屏幕共享功能接入](http://netease.im/blog/chrome/)



## <span id="浏览器原生接口进行屏幕共享">浏览器原生接口进行屏幕共享</span>
- 说明
  - 该方法不需要用户集成chrome插件，使用chrome浏览器原生接口实现，在初始化rtc时，不要传递chromeId（chrome 72版本开始支持）

### <span id="开启屏幕共享">开启屏幕共享</span>

- API介绍
  - 可以调用该方法开启屏幕共享

- 示例

```js
netcall.startDevice({
  type: Netcall.DEVICE_TYPE_DESKTOP_CHROME_SCREEN
}).catch(function(err) {
  console.log('启动屏幕共享失败', err)
})
```

### <span id="关闭屏幕共享">关闭屏幕共享</span>

- API介绍
  - 可以调用该方法关闭屏幕共享

- 示例

```js
netcall.stopDevice(Netcall.DEVICE_TYPE_DESKTOP_CHROME_SCREEN).then(() => {
  console.log('屏幕共享关闭成功')
})
```

## <span id="屏幕共享与混频">屏幕共享与混频</span>

在加入房间前，可以开启混频设置，将会把摄像头与屏幕共享的采集到的流混合在一起。具体混频设置请查看[视频和演示混频功能(webrtc)](/docs/product/音视频通话/SDK开发集成/Web开发集成/播放?#视频和演示混频功能)

## <span id="监听屏幕共享停止事件">监听屏幕共享停止事件</span>

开启屏幕共享之后，chrome浏览器会自动生成一个屏幕共享的控制条，提示用户正在共享您的屏幕，此外还有停止共享、隐藏的控制按钮，如果用户自己点击停止共享按钮，sdk开发者可以通过这个事件监听，或者屏幕共享被停止的事件，根据自己的业务逻辑，做相应的处理

- 注册监听事件

```js
netcall.on('streamEnded', function(obj) {
  console.log('媒体流停止了', obj);
  if (obj && obj.type ==== 'screen') {
    //屏幕共享的媒体流已经停止了，此处做关闭屏幕共享处理
    netcall.stopDevice(Netcall.DEVICE_TYPE_DESKTOP_CHROME_SCREEN).then(() => {
      console.log('屏幕共享关闭成功')
    })
  }

});
```

* 参数说明

obj 为其他端已处理的回调对象

| obj 属性       |   类型 |   说明 |
| :------------- | -----: | ----------------------------: |
| type           | string |  媒体类型，screen 表示屏幕共享 |
| name           | string |  事件描述名称|
| code           | number |  事件错误码 |
| desc           | string |  具体描述 |


在加入房间前，可以开启混频设置，将会把摄像头与屏幕共享的采集到的流混合在一起。具体混频设置请查看[视频和演示混频功能(webrtc)](/docs/product/音视频通话/SDK开发集成/Web开发集成/播放?#视频和演示混频功能(webrtc))

