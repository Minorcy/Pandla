(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"4e8c":function(e,t,n){"use strict";var i=n("894c"),r=n.n(i);r.a},"5a1f":function(e,t,n){"use strict";n.r(t);var i=n("cb0b"),r=n("ae8b");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("4e8c");var s=n("2877"),a=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"894c":function(e,t,n){},"8f1b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("d16c"),r=n("b90d"),o=function(){return n.e("components/m-input").then(n.bind(null,"0b87"))},s=function(){return n.e("components/logo").then(n.bind(null,"d321"))},a={components:{mInput:o,logo:s},data:function(){return{nickname:"",password:"",account:"",phone:"",email:"",verifyPwd:"",regCode:"",inviteCode:"",pRegister:!0,regType:"手機注冊",btnType:"郵箱注冊",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},regBtn:!0,timerId:null}},methods:{getRegCode:function(){var e=!1;e=this.pRegister?(0,r.phoneValidate)(this.account):(0,r.emailValidate)(this.account),e&&((0,i.sendCode)(this.account,this.regCodeBtn,this.timerId),this.regBtn=!1)},bindRegister:function(){(0,r.codeValidate)(this.regCode)&&(0,r.pwdValidate)(this.password,this.verifyPwd)&&(0,i.register)(this.password,this.account,this.regCode,this.inviteCode)},changeRegType:function(){1==this.pRegister?(this.regType="郵箱注冊",this.btnType="手機注冊",this.pRegister=!1):(this.regType="手機注冊",this.btnType="郵箱注冊",this.pRegister=!0),this.regBtn=!0}}};t.default=a},ae8b:function(e,t,n){"use strict";n.r(t);var i=n("8f1b"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=r.a},cb0b:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})}},[["aee3","common/runtime","common/vendor"]]]);