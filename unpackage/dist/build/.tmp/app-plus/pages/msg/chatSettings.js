(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chatSettings"],{"1b66":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;e(i("d3df"));function e(t){return t&&t.__esModule?t:{default:t}}var s=function(){return i.e("components/uni-list/uni-list").then(i.bind(null,"59b5"))},o=function(){return i.e("components/uni-list-item/uni-list-item").then(i.bind(null,"add2"))},u={components:{uniList:s,uniListItem:o},data:function(){return{to:"",nikeShow:!0,alias:""}},computed:{userInfos:function(){var t=this.$store.state.userInfos;return t}},methods:{switchChange:function(t){},showNick:function(){1==this.nikeShow?this.nikeShow=!1:0==this.nikeShow&&(this.nikeShow=!0)},setNick:function(){if(this.alias=this.alias.replace(/\n/g," ").replace(/\r/g,""),/^\s*$/.test(this.alias));else if(this.alias.length>10)return void t.showToast({icon:"none",title:"备注不能超过10个字符"});this.$store.dispatch("updateFriend",{account:this.userInfos[this.to].account,alias:this.alias}),1==this.nikeShow?this.nikeShow=!1:0==this.nikeShow&&(this.nikeShow=!0)},enterReport:function(){var n={name:this.userInfos[this.to].nick,id:this.userInfos[this.to].account};t.navigateTo({url:"report?userInfo="+JSON.stringify(n)})},deleteSession:function(){this.$store.dispatch("deleteSession",this.to)},blackList:function(){var n=this;t.showModal({title:"",content:"確定拉入黑名單",success:function(t){t.confirm&&n.$store.dispatch("updateBlack",{account:n.userInfos[n.to].account,isBlack:!0})}})}},onLoad:function(t){this.to=t.id}};n.default=u}).call(this,i("6e42")["default"])},"36cc":function(t,n,i){"use strict";i.r(n);var e=i("738e"),s=i("f469");for(var o in s)"default"!==o&&function(t){i.d(n,t,function(){return s[t]})}(o);i("681f");var u=i("2877"),c=Object(u["a"])(s["default"],e["a"],e["b"],!1,null,"49ca6778",null);n["default"]=c.exports},6737:function(t,n,i){"use strict";(function(t){i("274e"),i("921b");e(i("66fd"));var n=e(i("36cc"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("6e42")["createPage"])},"681f":function(t,n,i){"use strict";var e=i("b842"),s=i.n(e);s.a},"738e":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},s=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return s})},b842:function(t,n,i){},f469:function(t,n,i){"use strict";i.r(n);var e=i("1b66"),s=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=s.a}},[["6737","common/runtime","common/vendor"]]]);