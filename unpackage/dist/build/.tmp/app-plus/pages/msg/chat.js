(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat"],{"56df":function(t,e,n){"use strict";(function(t){n("274e"),n("921b");i(n("66fd"));var e=i(n("da30"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5df6":function(t,e,n){"use strict";var i=n("7854"),s=n.n(i);s.a},6545:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.msglist,function(e,n){var i=t._f("generateRichTextNode")(e.text),s=t._f("generateRichTextNode")(e.text);return{$orig:t.__get_orig(e),f0:i,f1:s}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},7854:function(t,e,n){},"78f1":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(n("c20d")),o=r(n("d3df"));r(n("b0f2")),n("0be9");function r(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"438f"))},a=function(){return n.e("pages/msg/yszyun-imchat-emoji/chatinput").then(n.bind(null,"6518"))},c=s.default.emojiList.emoji,f={data:function(){return{style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,sessionId:"",currSessionMsgs:"",title:"",paddingBottom:50}},components:{chatInput:a,uniNavBar:u},onLoad:function(e){var n=this;t.showLoading({title:"加载中"}),setTimeout(function(){n.scrollEnd()},500),this.sessionId=e.id,setTimeout(function(){t.hideLoading()},800)},computed:{userInfos:function(){var t=this.$store.state.userInfos;return t},myInfo:function(){this.$store.state.myInfo;return this.$store.state.myInfo},msglist:function(){var t=this.$store.state.currSessionMsgs;return this.scrollEnd(),t},scene:function(){return o.default.parseSession(this.sessionId).scene},to:function(){return o.default.parseSession(this.sessionId).to}},mounted:function(){this.$store.dispatch("setCurrSession",this.sessionId);var e=this.userInfos[this.to];if(e.alias)return this.title=e.alias,void t.setNavigationBarTitle({title:e.alias});this.title=e.nick,t.setNavigationBarTitle({title:e.nick})},created:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{clickLeft:function(){t.navigateBack({delta:1})},clickRight:function(){t.navigateTo({url:"chatSettings?id="+this.to})},getInputMessage:function(t){this.sendTextMsg(t)},sendTextMsg:function(t){this.paddingBottom=50,this.$store.dispatch("sendMsg",{type:"text",scene:"p2p",to:this.to,text:t.content})},sendImg:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(n){t.showLoading({title:"发送中..."}),e.$store.dispatch("sendFileMsg",{scene:"p2p",to:e.to,fileInput:n.tempFilePaths})}})},scrollEnd:function(){setTimeout(function(){t.pageScrollTo({scrollTop:9999999999,duration:0})},300)},show:function(){this.paddingBottom=300,setTimeout(function(){t.pageScrollTo({scrollTop:9999999999,duration:0})},200)},setScrollH:function(){this.paddingBottom=50,setTimeout(function(){t.pageScrollTo({scrollTop:9999999999,duration:0})},500);var e=t.createSelectorQuery(),n=e.select(".foot"),i=t.getSystemInfoSync();this.style.pageHeight=i.windowHeight,this.$nextTick(function(){var t=this;n.fields({size:!0},function(e){n=e.height,t.style.contentViewHeight=i.windowHeight-n}).exec()})},toUser:function(){t.navigateTo({url:"/pages/daily/userInfo?uid="+this.to})},previewImage:function(e){var n=[];this.msglist.filter(function(t){t.file&&n.push(t.file.url)});var s=n.indexOf(e);t.previewImage({urls:n,current:s,longPressActions:{itemList:["保存图片"],success:function(t){console.log(i("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片"," at pages\\msg\\chat.vue:237"))},fail:function(t){console.log(i(t.errMsg," at pages\\msg\\chat.vue:240"))}}})},moveHandle:function(){},generateRichTextNode:function(t){var e=t,n=[],i=e.indexOf("["),s=e.indexOf("]"),o=0;if(Array.from(e).map(function(t){"["!=t&&"]"!=t&&o++}),-1==i||-1==s||0==o)return n.push({type:"text",text:e}),n;while(0!=e.length)if(i=e.indexOf("["),s=e.indexOf("]"),0==i)if(s=e.indexOf("]"),-1==s)n.push({type:"text",text:e}),e="";else{var r=e.slice(0,s+1);c[r]?n.push({name:"img",attrs:{width:"30rpx",height:"30rpx",src:c[r].img}}):n.push({type:"text",text:r}),e=e.substring(s+1,e.length)}else-1==i?(n.push({type:"text",text:e.slice(0,e.length)}),e=""):(n.push({type:"text",text:e.slice(0,i)}),e=e.substring(i,e.length+1));return n}},onNavigationBarButtonTap:function(){t.navigateTo({url:"chatSettings?id="+this.to})},onBackPress:function(){t.hideKeyboard()},filters:{generateRichTextNode:function(t){var e=t,n=[],i=e.indexOf("["),s=e.indexOf("]"),o=0;if(Array.from(e).map(function(t){"["!=t&&"]"!=t&&o++}),-1==i||-1==s||0==o)return n.push({type:"text",text:e}),n;while(0!=e.length)if(i=e.indexOf("["),s=e.indexOf("]"),0==i)if(s=e.indexOf("]"),-1==s)n.push({type:"text",text:e}),e="";else{var r=e.slice(0,s+1);c[r]?n.push({name:"img",attrs:{width:"30rpx",height:"30rpx",src:c[r].img}}):n.push({type:"text",text:r}),e=e.substring(s+1,e.length)}else-1==i?(n.push({type:"text",text:e.slice(0,e.length)}),e=""):(n.push({type:"text",text:e.slice(0,i)}),e=e.substring(i,e.length+1));return n}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},aec4:function(t,e,n){"use strict";n.r(e);var i=n("78f1"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},da30:function(t,e,n){"use strict";n.r(e);var i=n("6545"),s=n("aec4");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("5df6");var r=n("2877"),u=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports}},[["56df","common/runtime","common/vendor"]]]);