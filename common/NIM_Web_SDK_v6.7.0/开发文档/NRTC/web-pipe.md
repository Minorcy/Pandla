
# <span id="简化Promise链式调用">简化 Promise 链式调用</span>

* API 介绍

  * WebRTC.pipe
  * 开启音视频连接章节介绍了如何在加入房间后进行音视频连接，有一系列的链式 Promise 调用，看起来非常不友好，通过该方法可以将多个 Promise 组合在一起顺序执行

* 示例

```js
// 开启麦克风
function startMicro(){
  return netcall.startDevice({
    type: Netcall.DEVICE_TYPE_AUDIO_IN,
    device: deviceMicro,
  }).catch(function(err) {
    console.log('启动麦克风失败', err)
  })
}

// 开启摄像头
function startCamera(){
  return netcall.startDevice({
	  type: Netcall.DEVICE_TYPE_VIDEO,
    device: deviceCamera,
	  width: 640,
	  height: 480
	})
  .catch(function(err) {
    console.log('启动摄像头失败', err)
  })
}

// 设置本地预览画面大小
function setLocalVideoSize(){
  return netcall.setVideoViewSize({
    with: 500,
    height: 500,
    cut:true
  })
}

const netcall = this.netcall
const arrFn = [
  startMicro,
  netcall.setCaptureVolume.bind(netcall),
  startCamera,
  netcall.changeRoleToPlayer.bind(netcall)
  netcall.startRtc.bind(netcall),
  setLocalVideoSize
]

const promise = WebRTC.pipe(arrFn)

promise
  .then(function () {
    console.log('webrtc连接成功')
  })
  .catch(function (e) {
    console.log('发生错误, 结束会话', e)
    netcall.leaveChannel()
  })
```

* 参数说明

上面示例中的一些参数说明如下

| obj 属性     | 类型 |                                                                说明 |
| :----------- | ---: | ------------------------------------------------------------------: |
| deviceMicro  |  obj | 指定需要打开的麦克风设备，参考[获取指定设备列表](/docs/product/音视频通话/SDK开发集成/Web开发集成/采集?#获取指定设备列表) |
| deviceCamera |  obj | 指定需要打开的摄像头设备，参考[获取指定设备列表](/docs/product/音视频通话/SDK开发集成/Web开发集成/采集?#获取指定设备列表) |

* **特别注意**

请注意**绑定作用域**，防止出现**意外错误或者陷入死循环**！
