(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/im-chat/im-chat"],{"2e2e":function(t,e,n){"use strict";n.r(e);var o=n("bf3f"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},"37dd":function(t,e,n){},"67f1":function(t,e,n){"use strict";var o=n("37dd"),i=n.n(o);i.a},bf3f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"6f49"))},i=function(){return n.e("components/im-chat/messageshow").then(n.bind(null,"580a"))},c={data:function(){return{name:"xcecd@qq.com",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}]}},components:{chatInput:o,messageShow:i},onLoad:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{getInputMessage:function(t){this.addMessage("customer",t.content,!1),this.toRobot(t.content)},addMessage:function(t,e,n,o){var i=this;i.messages.push({user:t,content:e,hasSub:n,subcontent:o})},scrollToBottom:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)})},toRobot:function(e){var n=this,o="http://www.tuling123.com/openapi/api";t.request({url:o,data:{key:"acfbca724ea1b5db96d2eef88ce677dc",info:e,userid:"uni-test"},success:function(t){console.log("s",t," at pages\\im-chat\\im-chat.vue:93"),n.addMessage("home",t.data.text,!1),n.scrollToBottom(),console.log("request success:"+t.data.text," at pages\\im-chat\\im-chat.vue:96")},fail:function(e){console.log("request fail",e," at pages\\im-chat\\im-chat.vue:99"),t.showModal({content:e.errMsg,showCancel:!1})}})}}};e.default=c}).call(this,n("6e42")["default"])},d05f:function(t,e,n){"use strict";n.r(e);var o=n("d68e"),i=n("2e2e");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("67f1");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},d68e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["ee6d","common/runtime","common/vendor"]]]);