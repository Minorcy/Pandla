
# <span id="检测当前浏览器的音视频兼容性">检测当前浏览器的音视频兼容性</span>

* API 介绍

  * WebRTC.checkCompatibility
  * 通过该方法可以直接查看当前浏览器对音视频的支持程度

* 示例

```js
WebRTC.checkCompatibility().then(function(data) {
  console.log('兼容性检查', data);
});
```

* 参数说明

data 具体内容如下

| obj 属性              |   类型 |                                          说明 |
| :-------------------- | -----: | --------------------------------------------: |
| obj['system']         | string |                                      系统类型 |
| obj['browser']        | string |                                    浏览器名称 |
| obj['version']        | string |                                  浏览器版本号 |
| obj['WebRTC']         |   bool |                     是否支持基本的 webrtc 功能 |
| obj['WebAudio']       |   bool |                  是否支持基本的 webaudio 功能 |
| obj['H264']           |   bool | 是否支持 H264 编码(我们的架构目前只支持 H264) |
| obj['MediaStream']    |   bool |                            是否支持媒体流处理 |
| obj['GetUserMedia']   |   bool |                              是否支持设备采集 |
| obj['Microphone']     |   bool |                          当前是否有麦克风设备 |
| obj['MicrophoneList'] |  array |                                当前麦克风列表 |
| obj['Camera']         |   bool |                          当前是否有摄像头设备 |
| obj['CameraList']     |  array |                                当前摄像头列表 |
