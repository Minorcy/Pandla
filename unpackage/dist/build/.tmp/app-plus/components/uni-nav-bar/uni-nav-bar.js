(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"252b":function(t,n,e){"use strict";e.r(n);var i=e("853d"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=u.a},"679d":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},"853d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"ec56"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"e18c"))},o={name:"UniNavBar",components:{uniStatusBar:i,uniIcons:u},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){t.report&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};n.default=o}).call(this,e("6e42")["default"])},d4d4:function(t,n,e){"use strict";e.r(n);var i=e("679d"),u=e("252b");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("f1ca");var a=e("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,"f0ca4e8c",null);n["default"]=r.exports},f1ca:function(t,n,e){"use strict";var i=e("faf9"),u=e.n(i);u.a},faf9:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("d4d4"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);