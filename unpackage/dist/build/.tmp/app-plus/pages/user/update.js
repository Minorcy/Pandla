(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/update"],{2729:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r})},"3d8b":function(e,n,t){"use strict";(function(e){t("274e"),t("921b");a(t("66fd"));var n=a(t("b574"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"55d9":function(e,n,t){"use strict";var a=t("57d9"),r=t.n(a);r.a},"57d9":function(e,n,t){},"7ac1":function(e,n,t){"use strict";(function(e,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("0be9"),c=t("e7dc"),u=function(){return t.e("components/m-input").then(t.bind(null,"edc7"))},o=function(){return t.e("components/logo").then(t.bind(null,"98cb"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/xuan-linkAddress/xuan-linkAddress")]).then(t.bind(null,"e60e"))},s={components:{mInput:u,logo:o,linkAddress:i},data:function(){return{height:"550rpx",accArray:["1","0","0.5","其它"],accIndex:0,raceArray:["亚洲人","黑人","拉美人","中东人","混血","白人","其它"],raceIndex:0,userId:e.getStorageSync("USERS_KEY").id,userInfo:{age:"",name:"",signature:"",site:"请选择",stature:"",weight:"",acctType:"",race:""},avatar:"../../static/img/user/upload.png"}},methods:{popup_bottom:function(){this.height="550rpx",this.show_popup()},show_popup:function(){this.$refs.linkAddress.show()},confirmCallback:function(e){console.log(a(e," at pages\\user\\update.vue:106")),this.userInfo.site=e},bindAcc:function(e){this.accIndex=e.target.value},bindRace:function(e){this.raceIndex=e.target.value},uploadAvatar:function(){var e=this;(0,r.upPicture)(this.userId).then(function(n){e.avatar=n.id})},update:function(){(0,c.userValidate)(this.userInfo)&&(this.userInfo.acctType=this.accArray[this.accIndex],this.userInfo.race=this.raceArray[this.raceIndex],(0,r.upInfo)(this.userInfo,this.userId))},findInfo:function(){var e=this;(0,r.findByID)().then(function(n){e.userInfo=n,"亚洲人"==n.race&&(e.raceIndex=0),"黑人"==n.race&&(e.raceIndex=1),"拉美人"==n.race&&(e.raceIndex=2),"中东人"==n.race&&(e.raceIndex=3),"混血"==n.race&&(e.raceIndex=4),"白人"==n.race&&(e.raceIndex=5),"其它"==n.race&&(e.raceIndex=6),"1"==n.acctType&&(e.accIndex=0),"0"==n.acctType&&(e.accIndex=1),"0.5"==n.acctType&&(e.accIndex=2),"其它"==n.acctType&&(e.accIndex=3),null!=n.portrait&&""!=n.portrait&&(e.avatar=n.portrait),e.userInfo.age=""+n.age,e.userInfo.stature=""+n.stature,e.userInfo.weight=""+n.weight})}},onShow:function(){e.getStorageSync("USERS_KEY").token&&this.findInfo()}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},b574:function(e,n,t){"use strict";t.r(n);var a=t("2729"),r=t("ee2b");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);t("55d9");var u=t("2877"),o=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},ee2b:function(e,n,t){"use strict";t.r(n);var a=t("7ac1"),r=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=r.a}},[["3d8b","common/runtime","common/vendor"]]]);