(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/userInfo"],{"1ddb":function(n,t,e){"use strict";e.r(t);var i=e("c1ff"),o=e("4a40");for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);e("50fd");var u=e("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"8c2e2aa0",null);t["default"]=a.exports},"260b":function(n,t,e){"use strict";(function(n){e("274e"),e("921b");i(e("66fd"));var t=i(e("1ddb"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"2acf":function(n,t,e){},"4a40":function(n,t,e){"use strict";e.r(t);var i=e("dfe2"),o=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=o.a},"50fd":function(n,t,e){"use strict";var i=e("2acf"),o=e.n(i);o.a},c1ff:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},dfe2:function(n,t,e){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("d3df")),s=(e("2f62"),e("0be9"));function u(n){return n&&n.__esModule?n:{default:n}}var a=function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"0656"))},f={data:function(){return{userInfo:"",dynInfo:"",statusInfo:"",uid:"",distance:"20",isFollow:0,isMe:!0,lastTime:"",fnasList:"",loadingCount:9}},components:{MescrollUni:a},methods:{getUserInfo:function(){var t=this;(0,s.getInfo)(this.uid).then(function(n){t.userInfo=n,null!=t.userInfo.signature&&""!=t.userInfo.signature||(t.userInfo.signature="這家夥很懶，還沒有簽名")}),(0,s.getDyn)(this.uid,0).then(function(e){t.dynInfo=e,console.log(n(e," at pages\\daily\\userInfo.vue:97"))}),(0,s.getLastTime)(this.uid).then(function(n){t.lastTime=""!=n?o.default.formatDate(Number(n),!0):"一天前"}),(0,s.getFans)().then(function(n){t.fnasList=n})},deleteDyn:function(t,e){var o=this;i.showModal({title:"",content:"确定删除照片",success:function(i){i.confirm?(0,s.deleteDyn)(t).then(function(n){o.dynInfo.splice(e,1)}):i.cancel&&console.log(n("用户点击取消"," at pages\\daily\\userInfo.vue:124"))}})},getIsCon:function(){var n=this;(0,s.checkIsCon)(this.uid).then(function(t){n.isFollow=t})},follow:function(){if(1==this.isFollow)(0,s.concern)(2,this.uid),this.isFollow=0;else if(0==this.isFollow){(0,s.concern)(1,this.uid);for(var n=0,t=this.fnasList.length;n<t;n++)if(this.fnasList[n].id==this.uid)return void(this.isFollow=2);this.isFollow=1}},enterChat:function(){this.$store.dispatch("addFriend",this.uid),i.navigateTo({url:"/pages/msg/chat?id="+"p2p-".concat(this.uid),success:function(n){},fail:function(){},complete:function(){}})},preview:function(n,t){for(var e=[],o=0;o<this.dynInfo.length;o++)e.push(this.dynInfo[o].images);"por"==n&&(e=[this.userInfo.portrait]),"dyn"==n&&(e=e),i.previewImage({current:t,urls:e})},downCallback:function(t){console.log(n("2"," at pages\\daily\\userInfo.vue:187"))},upCallback:function(t){t.endSuccess(),t.endErr(),console.log(n("1"," at pages\\daily\\userInfo.vue:192"))}},onReachBottom:function(){var t=this;this.dynInfo.length<9||(i.showLoading({title:"加载中"}),(0,s.getDyn)(this.uid,this.loadingCount).then(function(e){t.dynInfo=t.dynInfo.concat(e),i.hideLoading(),t.loadingCount+=9,console.log(n(t.dynInfo," at pages\\daily\\userInfo.vue:206"))}))},onLoad:function(n){this.uid=n.uid,n.distance&&(this.distance=n.distance.substr(0,3)),this.getUserInfo(),this.getIsCon();var t=i.getStorageSync("USERS_KEY").id;this.uid==t&&(this.isMe=!1,i.setNavigationBarTitle({title:"我的主頁"}))},filters:{stringifyDate:function(n){return n=Number(n),o.default.formatDate(n,!0)}},onShow:function(){}};t.default=f}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["260b","common/runtime","common/vendor"]]]);