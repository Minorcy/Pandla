# <span id="录制相关">录制相关</span>
`录制产品介绍文案@产品`

## <span id="服务端录制">服务端录制</span>

### <span id="点对点服务端音视频录制">点对点服务端音视频录制</span>

- API介绍
  - 点对点通话的服务端录制，在下列两种方法中传入对应的参数即可
    - 发起通话请求
    - 响应通话请求

- 示例

```js
// 发起通话请求
netcall.call({
  type: Netcall.NETCALL_TYPE_VIDEO,
  account: 'testAccount',
  webrtcEnable: true,
  pushConfig: {},
  sessionConfig:{
    ...
    recordVideo: true,
    recordAudio: true
  }
})

// 响应通话请求
netcall.response({
  accepted: true,
  beCalledInfo: beCalledInfo,
  sessionConfig: {
    ...
    recordVideo: true,
    recordAudio: true
  }
})
```

- 参数说明

其他参数已经在最上面发起通话章节介绍过了，不再重复介绍，这里只介绍和录制相关的两个参数

| param参数属性|类型 |说明 |
| :-------- | --------:| --------:|
| recordVideo | bool|是否开启视频录制，默认不开|
| recordAudio | bool|是否开启音频录制，默认不开|


### <span id="多人服务端音视频录制">多人服务端音视频录制</span>

- API介绍
  - 多人会议模式的服务端录制只支持`互动直播模式`，在加入房间传入参数即可

- 示例

```js
netcall.joinChannel({
  channelName: channelName, //必填
  type: Netcall.NETCALL_TYPE_VIDEO,
  liveEnable: true, //开启互动直播
  sessionConfig: {
    rtmpUrl: '推流地址', // 主播必填
    rtmpRecord: true // 开启推流录制
    ...
  }
})
```

- 参数说明

其他参数已经在上面加入多人会议章节介绍过了，不再重复介绍，这里只介绍和录制相关的几个参数

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| liveEnable | bool|是否开启互动直播，默认不开|
| sessionConfig.rtmpUrl | string|推流地址，主播必填，`连麦者不要填写`|
| sessionConfig.rtmpRecord | bool|是否开启推流录制，默认不开|

## <span id="客户端录制">客户端录制</span>

SDK提供客户端录制功能，可以通过下面的一系列方法进行音视频的录制

### <span id="开始单人视频录制">开始单人视频录制</span>

- API介绍
  - 在通话过程中，可以通过该方法进行单人的音视频录制

- 示例

```js
netcall.startRecordMp4({
  account: 'testAccount'
}).then(function(obj) {
  console.log('startRecordMp4 通知下发为正式录制', obj)
})
```

- 参数说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| account | string|录制的目标账号，不传或者为空时，默认录制自己|

- 特殊说明
  - 目前只支持 `webm格式` 的视频录制，可以用chrome浏览器打开

### <span id="停止单人视频录制">停止单人视频录制</span>

- API介绍
  - 录制过程中，可以随时调用该方法停止录制，停止录制时会弹框选择保存路径

- 示例

```js
netcall.stopRecordMp4().then(function(obj) {
  console.log('stopRecordMp4 通知下发为录制结束', obj)
})
```

### <span id="开始混音录制">开始混音录制</span>

- API介绍
  - 在通话过程中，可以通过该方法进行所有音频的混音录制

- 示例

```js
netcall.startRecordAac().then(function(obj) {
  console.log('startRecordAac 通知下发为正式录制', obj)
})
```

### <span id="停止混音录制">停止混音录制</span>

- API介绍
  - 录制过程中，可以随时调用该方法停止录制，停止录制时会弹框选择保存路径

- 示例

```js
netcall.stopRecordAac().then(function(obj) {
  console.log('stopRecordAac 通知下发为录制结束', obj)
})
```
