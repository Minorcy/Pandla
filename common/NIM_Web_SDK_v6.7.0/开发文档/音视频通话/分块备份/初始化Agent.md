# <span id="初始化音视频(Agent)">初始化音视频(PC Agent)</span>

初始化音视频，以下是示例代码

```js
const netcall = Netcall.getInstance({
  kickLast: false,
  nim: nim,
  container: document.getElementById('container'),
  remoteContainer: document.getElementById('remoteContainer'),
  mirror: true,
  mirrorRemote: true,
})
```

- 参数说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| kickLast | bool| 是否踢掉上次的通话, 默认 false |
| nim | object| 音视频通话是基于 IM 的, 需要传入 `NIM 初始化后的实例` |
| container | dom| 播放自己视频画面的容器节点 |
| remoteContainer | dom |播放对方画面的容器节点 |
| mirror| bool | 是否对自己的画面进行镜像处理, 默认 false, 一般来讲请将此参数设置为 true（既自己看自己是反项的） |
| mirrorRemote| bool| 是否对对方的画面进行镜像处理, 默认 false |

## <span id="初始化">初始化信令</span>

Web 音视频通话依赖于 PC 插件, 所以在使用任何音视频通话功能之前, 需要先建立和 PC 插件之间的信令通道, 示例代码如下

```js
var signalInited = false
// 信令通道初始化完毕之后, 开发者可以启用音视频通话相关的 UI, 比如说展示呼叫别人的按钮
// 信令通道初始化失败的时候, 请展示错误并禁用所有音视频通话相关的 UI
netcall.initSignal().then(function() {
  console.log('signalInited')
  signalInited = true
}).catch(function(err) {
  console.log('initSignalError', err)
  signalInited = false
})
// 当信令通道断开时, 会触发 signalClosed 事件
netcall.on('signalClosed', function() {
  console.log('on signalClosed')
  signalInited = false
  netcall.hangup()
})
// 初始化过程中会通过 devices 事件回传所有的设备列表
netcall.on('devices', function(obj) {
  console.log('on devices', obj)
})
```

## <span id="停止信令">停止信令</span>

当音视频通话结束之后, 需要停止信令通道, 然后禁用所有音视频通话相关的 UI, 示例代码如下

```js
netcall.stopSignal()
```

**请注意**：`IM连接成功后`方可进行音视频通话，否则音视频通话会失败
