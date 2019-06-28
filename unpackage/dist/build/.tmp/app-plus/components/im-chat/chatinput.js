(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"02f1":function(t,n,e){},"1eff":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"3c68":function(t,n,e){"use strict";e.r(n);var u=e("1eff"),a=e("54bd");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("f7d4");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"54bd":function(t,n,e){"use strict";e.r(n);var u=e("7eb4"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"7eb4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},n=this;t.engine="iFly",n.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t," at components\\im-chat\\chatinput.vue:30"),n.inputValue+=t},function(t){console.log("语音识别失败："+t.message," at components\\im-chat\\chatinput.vue:33")})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=u},f7d4:function(t,n,e){"use strict";var u=e("02f1"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3c68"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);                
