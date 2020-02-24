### Collapse 折叠面板

展示可以折叠 / 展开的内容区域，组件名：``uni-collapse``、``uni-collapse-item``，代码块： uCollapse。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import {uniCollapse,uniCollapseItem} from "uni-ui"
export default {
    components: {uniCollapse,uniCollapseItem}
}
```

一般用法

```html
<uni-collapse @change="change">
    <uni-collapse-item title="标题文字">
        <uni-list>
            <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"></uni-list-item>
            <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
        </uni-list>
    </uni-collapse-item>
    <uni-collapse-item title="默认开启" open="true">
        <view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
    </uni-collapse-item>
    <uni-collapse-item title="禁用状态" disabled="true">
        <view style="padding: 30upx;"> 禁用状态 </view>
    </uni-collapse-item>
</uni-collapse>
```

手风琴效果

```html
<uni-collapse accordion="true">
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字">
        <view style="padding: 30upx;">
            手风琴效果
        </view>
    </uni-collapse-item>
</uni-collapse>
```


带图标

```html
<uni-collapse>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png">
        <view style="padding: 30upx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
    <uni-collapse-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
        <view style="padding: 30upx;">
            折叠内容主体，可自定义内容及样式
        </view>
    </uni-collapse-item>
</uni-collapse>
```

**uniCollapse 属性说明：**

|属性名|类型|默认值	|说明|
|---|----|---|---|
|accordion|Boolean|false|是否开启手风琴效果|


**uniCollapse 事件说明：**

|事件称名|说明|返回参数|
|---|----|---|
|change|切换面板时触发|activeNames（Array）：展开状态的uniCollapseItem的name值|


**uniCollapse 方法说明：**

|事件称名|说明|
|---|----|---|
|resize|通过 ref 使用，更新当前列表高度，只有 animation:true 下生效 |

**代码示例**
```html
<uni-collapse @change="change">
    <uni-collapse-item ref="add" title="动画效果" :show-animation="true" open="true">
        {{ content }}
    </uni-collapse-item>
</uni-collapse>
```

```javascript
export default {
	data() {
		
		return {
			content: '一段短文字',
		};
	},
	methods: {
		onClick() {
			this.content = "这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。这是一段长文字，高度会发生变化。"
			this.$nextTick(() => {
				this.$refs.add.resize();
			});
		}
	}
};
```

Tips
- resize 方法解决动态添加数据，带动画的折叠面板高度不更新的问题
- 需要在数据渲染完毕之后使用 `resize` 方法。推荐在 `this.nextTick()` 中使用

**uniCollapseItem 属性说明：**

|属性名|类型|默认值|说明|
|---|----|---|---|
|title|String||标题文字|
|thumb|String||标题左侧缩略图|
|disabled|Boolean|false|是否禁用|
|open|Boolean|false|是否展开面板|
|animation|String|false|开启动画|

Tips
- 本组件需要使用自定义组件模式，非自定义组件使用，会出现问题。

### 更新日志
**1.1.1**
- 修复 依赖组件找不到的问题

**1.1.0**
- 修复 在 v-for 循环中，组件报错的 bug
- 修复 提供在动画模式下，动态渲染数据，高度不更新的解决方案

**1.0.0**
- 初始项目