(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"024e":function(t,n,e){"use strict";e.r(n);var u=e("4d35"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"38e6":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"4d35":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},n=this;t.engine="iFly",n.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t," at components\\im-chat\\chatinput.vue:30"),n.inputValue+=t},function(t){console.log("语音识别失败："+t.message," at components\\im-chat\\chatinput.vue:33")})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=u},"578d":function(t,n,e){"use strict";e.r(n);var u=e("38e6"),a=e("024e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("737f");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"737f":function(t,n,e){"use strict";var u=e("d4c1"),a=e.n(u);a.a},d4c1:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("578d"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);                
