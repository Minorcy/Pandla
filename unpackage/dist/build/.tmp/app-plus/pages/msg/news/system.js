(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/news/system"],{"12f9":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s("9fe6"),u={data:function(){return{systemList:""}},methods:{changeStatus:function(){var t=this;(0,n.upSysStatus)().then(function(e){t.$store.state.pushMsg.pushSystemMsg[0].id=0,t.$store.dispatch("getSystemMsg")})}},onLoad:function(){this.systemList=this.$store.state.pushMsg.pushSystemMsg,console.log(t(this.systemList," at pages\\msg\\news\\system.vue:41")),this.changeStatus()}};e.default=u}).call(this,s("0de9")["default"])},"1c7a":function(t,e,s){"use strict";s.r(e);var n=s("12f9"),u=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);e["default"]=u.a},"27ef":function(t,e,s){},"352f":function(t,e,s){"use strict";var n=s("27ef"),u=s.n(n);u.a},ac66:function(t,e,s){"use strict";(function(t){s("cbab"),s("921b");n(s("66fd"));var e=n(s("bb80"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},bb80:function(t,e,s){"use strict";s.r(e);var n=s("e81f"),u=s("1c7a");for(var a in u)"default"!==a&&function(t){s.d(e,t,function(){return u[t]})}(a);s("352f");var c=s("2877"),o=Object(c["a"])(u["default"],n["a"],n["b"],!1,null,"d75e9c4e",null);e["default"]=o.exports},e81f:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return u})}},[["ac66","common/runtime","common/vendor"]]]);