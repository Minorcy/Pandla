# <span id="rtc能力检测">rtc能力检测</span>

该章节主要说明如何判断一款浏览器是否支持webrtc，以及在进行通话前检查自己的麦克风和摄像头是否能正常使用，下面的接口都可以在音视频通话前调用。


## <span id="是否支持webrtc">是否支持webrtc</span>
- API介绍
  - 该方法用于判断浏览器是否支持webrtc

- 示例

```js
const isSupportWebrtc = netcall.isSupportWebrtc()
```

- isSupportWebrtc返回值，说明如下：

| isSupportWebrtc|类型 |说明 |
| :-------- | --------:| --------:|
| isSupportWebrtc |Boolean|该浏览器是否支持webrtc|


## <span id="获取设备列表">获取设备列表</span>

- API介绍
  - 该接口可以获取当前的设备列表（已知浏览器自身问题：Safari和Firefox浏览器暂时无法获取扬声器列表）

- 示例

```js
netcall.getDevices().then(obj => console.log(obj))
```

obj 为探测结果对象，属性如下：

| obj属性名|类型 |说明 |
| :-------- | --------:| --------:|
| audioIn |array|麦克风设备列表|
| audioOut |array|扬声器设备列表|
| video |array|摄像头设备列表|

audioIn 麦克风设备列表，成员列表是Object，属性如下：

| audioIn成员元素属性名|类型 |说明 |
| :-------- | --------:| --------:|
| deviceId |string|设备唯一标识id|
| label |string|设备描述符|

audioOut 扬声器设备列表，成员列表是Object，属性如下：

| audioOut成员元素属性名|类型 |说明 |
| :-------- | --------:| --------:|
| deviceId |string|设备唯一标识id|
| label |string|设备描述符|

video 摄像头设备列表，成员列表是Object，属性如下：

| video成员元素属性名|类型 |说明 |
| :-------- | --------:| --------:|
| deviceId |string|设备唯一标识id|
| label |string|设备描述符|


## <span id="">本地开启麦克风</span>

- API介绍
  - 打开麦克风，自己听一下麦克风采集的声音，判断自己的麦克风设备是否正常

- 示例

```js
const options = {
  type: Netcall.DEVICE_TYPE_AUDIO_IN,
  device: {deviceId: ''}
}
//开启本地麦克风
netcall.openLocalAudio(options).then(obj => {
  if (obj && obj.stream && obj.stream.getAudioTracks().length) {
    console.log('获取到音频: ', obj.stream.id)
    //播放本地麦克风采集到的音频流
    netcall.startDevice({
      type:WebRTC.DEVICE_TYPE_AUDIO_OUT_LOCAL
    })
  }
})
```

- 参数options对象说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| type |number|开启的设备类型|
| device |Object|指定要开启的设备，deviceId从获取设备列表接口中获取|


## <span id="">预览本地摄像头</span>

- API介绍
  - 打开本地摄像头，预览一下摄像头的画面，判断自己的摄像头设备是否正常

- 示例

```js
const options = {
  type: Netcall.DEVICE_TYPE_VIDEO,
  device: {deviceId: ''}
}
//开启本地摄像头
netcall.startVideoPreview(options).then(obj => {
  if (obj && obj.stream && obj.stream.getVideoTracks().length) {
    console.warn('获取到视频: ', obj.stream.id)
    //播放本地摄像头采集到的视频
    const viewConf = {
      view: document.getElementById('videoContainer')
    }
    netcall.setLocalVideoRenderer(viewConf)
    //设置视频画面大小
    const viewParams = {
        width: 640,
        height: 360,
        cut: true
      }
    netcall.setLocalRenderMode(viewParams)
  }
})
```

- 参数options对象说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| type |number|开启的设备类型|
| device |Object|指定要开启的设备，deviceId从获取设备列表接口中获取|

- 参数viewConf对象说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| type |number|开启的设备类型|
| view |Dom|本地画面待渲染的DOM节点，如div、span等非流媒体节点|

- 参数viewParams对象说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| type |number|开启的设备类型|
| width |Number|宽度|
| height |Number|高度|
| cut |Boolean|是否裁剪|

