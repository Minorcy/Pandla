(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{"4f2a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"7a0e":function(t,e,n){"use strict";n.r(e);var i=n("4f2a"),o=n("fa03");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("8eaa");var l=n("2877"),c=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"82d8":function(t,e,n){},8917:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"6754"))},o={name:"uni-notice-bar",components:{uniIcon:i},props:{text:String,moreText:String,backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,show:!0,animation:""}},watch:{text:function(t,e){var n=this;this.$nextTick(function(){setTimeout(n.setAnimation,200)})}},computed:{setTextClass:function(){var t=[];return!0===this.scrollable||"true"===this.scrollable?t.push("uni-noticebar--scrollable"):("true"===this.single||!0===this.single||this.moreText)&&t.push("uni-noticebar--single"),t},setContenClass:function(){var t=[];return(!0===this.scrollable||"true"===this.scrollable||"true"===this.single||!0===this.single||this.moreText)&&t.push("uni-noticebar--flex"),t}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var n=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;t.upx2px(48)+12>n&&"true"===String(this.showClose)&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;!1!==this.scrollable&&"false"!==this.scrollable&&t.createSelectorQuery().select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};e.default=o}).call(this,n("6e42")["default"])},"8eaa":function(t,e,n){"use strict";var i=n("82d8"),o=n.n(i);o.a},fa03:function(t,e,n){"use strict";n.r(e);var i=n("8917"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7a0e"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);                
