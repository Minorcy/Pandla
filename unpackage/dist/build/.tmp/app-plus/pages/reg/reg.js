(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{1487:function(t,e,n){},"58d9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("755d"),r=n("c248"),o=function(){return n.e("components/m-input").then(n.bind(null,"730a"))},s=function(){return n.e("components/logo").then(n.bind(null,"0f2e"))},u={components:{mInput:o,logo:s},data:function(){return{nickname:"",password:"",account:"",phone:"",email:"",verifyPwd:"",regCode:"",inviteCode:"",pRegister:!0,regType:"手機注冊",btnType:"郵箱注冊",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},regBtn:!0,timerId:null}},methods:{getRegCode:function(){var t=!1;t=this.pRegister?(0,r.phoneValidate)(this.account):(0,r.emailValidate)(this.account),this.regCodeBtn.btnStatus=!0,t&&((0,i.sendCode)(this.account,this.regCodeBtn,this.timerId),this.regBtn=!1)},bindRegister:function(){(0,r.codeValidate)(this.regCode)&&(0,r.pwdValidate)(this.password,this.verifyPwd)&&(0,i.register)(this.password,this.account,this.regCode,this.inviteCode)},changeRegType:function(){1==this.pRegister?(this.regType="郵箱注冊",this.btnType="手機注冊",this.pRegister=!1):(this.regType="手機注冊",this.btnType="郵箱注冊",this.pRegister=!0),this.regBtn=!0}}};e.default=u},ab82:function(t,e,n){"use strict";var i=n("1487"),r=n.n(i);r.a},b487:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},e9b6:function(t,e,n){"use strict";n.r(e);var i=n("58d9"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},f4c4:function(t,e,n){"use strict";n.r(e);var i=n("b487"),r=n("e9b6");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("ab82");var s=n("2877"),u=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports}},[["6cdf","common/runtime","common/vendor"]]]);