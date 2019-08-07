# <span id="初始化音视频(WebRTC)">初始化音视频(WebRTC)</span>

初始化音视频，以下是示例代码

```js
// SDK重命名
const Netcall = WebRTC

const netcall = Netcall.getInstance({
  nim: nim,
  container: document.getElementById('container'),
  remoteContainer: document.getElementById('remoteContainer'),
  // 是否开启日志打印
  debug: true
})
```

- 参数说明

| 参数名|类型 |说明 |
| :-------- | --------:| --------:|
| nim | object| 音视频通话是基于 IM 的, 需要传入 `NIM 初始化后的实例` |
| container | dom| 播放自己视频画面的容器节点 |
| remoteContainer | dom |播放对方画面的容器节点 |
| debug| bool | 是否开启日志打印，默认 false |