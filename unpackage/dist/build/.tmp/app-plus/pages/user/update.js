(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/update"],{2815:function(e,n,t){"use strict";t.r(n);var a=t("b352"),r=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=r.a},3244:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r})},"5d9b":function(e,n,t){"use strict";var a=t("db95"),r=t.n(a);r.a},b352:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("755d"),r=t("c248"),c=function(){return t.e("components/m-input").then(t.bind(null,"730a"))},u=function(){return t.e("components/logo").then(t.bind(null,"0f2e"))},i={components:{mInput:c,logo:u},data:function(){return{accArray:["1","0","0.5","其它"],accIndex:0,raceArray:["亚洲人","黑人","拉美人","中东人","混血","白人","其它"],raceIndex:0,userId:e.getStorageSync("USERS_KEY").id,userInfo:{age:"",name:"",signature:"",site:"",stature:"",weight:"",acctType:"",race:""},avatar:"../../static/img/user/upload.svg"}},methods:{bindAcc:function(e){this.accIndex=e.target.value},bindRace:function(e){this.raceIndex=e.target.value},uploadAvatar:function(){var e=this;(0,a.upPicture)(this.userId).then(function(n){e.avatar=n.id})},update:function(){(0,r.userValidate)(this.userInfo)&&(this.userInfo.acctType=this.accArray[this.accIndex],this.userInfo.race=this.raceArray[this.raceIndex],(0,a.upInfo)(this.userInfo,this.userId))},findInfo:function(){var e=this;(0,a.findByID)().then(function(n){e.userInfo=n,"亚洲人"==n.race&&(e.raceIndex=0),"黑人"==n.race&&(e.raceIndex=1),"拉美人"==n.race&&(e.raceIndex=2),"中东人"==n.race&&(e.raceIndex=3),"混血"==n.race&&(e.raceIndex=4),"白人"==n.race&&(e.raceIndex=5),"其它"==n.race&&(e.raceIndex=6),"1"==n.acctType&&(e.accIndex=0),"0"==n.acctType&&(e.accIndex=1),"0.5"==n.acctType&&(e.accIndex=2),"其它"==n.acctType&&(e.accIndex=3),null!=n.portrait&&""!=n.portrait&&(e.avatar=n.portrait),e.userInfo.age=""+n.age,e.userInfo.stature=""+n.stature,e.userInfo.weight=""+n.weight})}},onShow:function(){e.getStorageSync("USERS_KEY").token&&this.findInfo()}};n.default=i}).call(this,t("6e42")["default"])},db95:function(e,n,t){},ee75:function(e,n,t){"use strict";t.r(n);var a=t("3244"),r=t("2815");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);t("5d9b");var u=t("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports}},[["f5a4","common/runtime","common/vendor"]]]);