(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0583":function(t,e,n){},"2f54":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("0be9");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{userInfo:"",socialInfo:"",userId:t.getStorageSync("USERS_KEY").id,avatar:"../../static/img/user/upload.svg",settings:[{src:"../../static/img/user/relNameAuth.svg",url:"../auth/auth",label:"實名認證",expla:"PAN幣綫上交易所交易需要實名認證"},{src:"../../static/img/user/invCode.svg",url:"../invite/invite",label:"我的邀請碼",expla:"獲得PAN幣和原力"},{src:"../../static/img/user/assetLedger.svg",url:"../ledger/asset",label:"資產賬本",expla:""},{src:"../../static/img/user/focusLedger.svg",url:"../ledger/focus",label:"原力賬本",expla:""},{src:"../../static/img/user/plantBase.svg",url:"../base/base",label:"招募節點",expla:""},{src:"../../static/img/user/option.svg",url:"../setting/setting",label:"設置",expla:""}]}},computed:o({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:o({},(0,r.mapMutations)(["logout"]),{bindLogout:function(){var e=this;t.showModal({title:"",content:"點擊確定後退出",success:function(n){n.confirm&&(e.logout(),t.clearStorageSync("USERS_KEY"),t.reLaunch({url:"../login/login"}))}})},getUserInfo:function(){var t=this;(0,a.findByID)().then(function(e){t.userInfo=e,t.avatar=e.portrait,null!=t.userInfo.signature&&""!=t.userInfo.signature||(t.userInfo.signature="這家夥很懶，還沒有簽名")})},getSocialInfo:function(){var t=this;(0,a.getAllSocialInfo)().then(function(e){t.socialInfo=e})},uploadAvatar:function(){var t=this;(0,a.upPicture)(this.userId).then(function(e){t.avatar=e.id})},touserInfo:function(e){t.navigateTo({url:"/pages/daily/userInfo?uid="+e})}}),onShow:function(){this.getUserInfo(),this.getSocialInfo()},godynm:function(){}};e.default=i}).call(this,n("6e42")["default"])},"2ff3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"731f":function(t,e,n){"use strict";n.r(e);var r=n("2f54"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},cb96:function(t,e,n){"use strict";n.r(e);var r=n("2ff3"),a=n("731f");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("feed");var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"539ea977",null);e["default"]=i.exports},feed:function(t,e,n){"use strict";var r=n("0583"),a=n.n(r);a.a}},[["0877","common/runtime","common/vendor"]]]);