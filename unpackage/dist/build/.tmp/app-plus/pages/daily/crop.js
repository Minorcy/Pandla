(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/crop"],{"1dfa":function(t,e,a){"use strict";a.r(e);var c=a("9c79"),i=a("2d2b");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("7328");var r=a("2877"),u=Object(r["a"])(i["default"],c["a"],c["b"],!1,null,null,null);e["default"]=u.exports},"2d2b":function(t,e,a){"use strict";a.r(e);var c=a("340d"),i=a.n(c);for(var o in c)"default"!==o&&function(t){a.d(e,t,function(){return c[t]})}(o);e["default"]=i.a},"340d":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,i,o,r,u,s,n,h,p,l,d,g=t.getSystemInfoSync(),f=g.screenWidth,m=g.screenWidth,v=g.pixelRatio,b=1,T=100,L=g.screenWidth,I={name:"image-cropper",data:function(){return{imageSrc:this.$store.state.imgTemp,isShowImg:!1,cropperInitW:f,cropperInitH:m,cropperW:f,cropperH:m,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:f,cutR:"100%",qualityWidth:L,innerAspectRadio:b}},methods:{crop:function(){var t=this;t.loadImage()},cancel:function(){var t=this;t.isShowImg=!1},setData:function(t){var e=this;Object.keys(t).forEach(function(a){e.$set(e.$data,a,t[a])})},getImage:function(){var e=this;t.chooseImage({success:function(t){e.setData({imageSrc:t.tempFilePaths[0]}),e.loadImage()}})},loadImage:function(){var e=this;t.showLoading({title:"图片加载中..."}),console.log(a(g," at pages\\daily\\crop.vue:145")),t.getImageInfo({src:e.imageSrc,success:function(a){p=a.width/a.height,p>=1?(l=f,d=f/p):(l=f*p,d=f);var c=l>d?l:d;if(T=c>T?T:c,p>=1){var i=Math.ceil((f/p-(f/p-T))/2),o=i,r=Math.ceil((f-f+T)/2),u=r;e.setData({cropperW:f,cropperH:f/p,cropperL:Math.ceil((f-f)/2),cropperT:Math.ceil((f-f/p)/2),cutL:r,cutT:i,cutR:u,cutB:o,imageW:l,imageH:d,scaleP:l/f,qualityWidth:L,innerAspectRadio:p})}else{var s=Math.ceil((f*p-f*p)/2),n=s,h=Math.ceil((f-T)/2),g=h;e.setData({cropperW:f*p,cropperH:f,cropperL:Math.ceil((f-f*p)/2),cropperT:Math.ceil((f-f)/2),cutL:s,cutT:h,cutR:n,cutB:g,imageW:l,imageH:d,scaleP:l/f,qualityWidth:L,innerAspectRadio:p})}e.setData({isShowImg:!0}),t.hideLoading()},fail:function(e){console.log(a("err==>",e," at pages\\daily\\crop.vue:211")),t.hideLoading()}}),setTimeout(function(){t.hideLoading()},5e3)},contentStartMove:function(t){c=t.touches[0].pageX,i=t.touches[0].pageY},contentMoveing:function(t){var e=(c-t.touches[0].pageX)*b,a=(i-t.touches[0].pageY)*b;e>0?this.cutL-e<0&&(e=this.cutL):this.cutR+e<0&&(e=-this.cutR),a>0?this.cutT-a<0&&(a=this.cutT):this.cutB+a<0&&(a=-this.cutB),this.setData({cutL:this.cutL-e,cutT:this.cutT-a,cutR:this.cutR+e,cutB:this.cutB+a}),c=t.touches[0].pageX,i=t.touches[0].pageY},contentTouchEnd:function(){},getImageInfo:function(){var e=this;t.showLoading({title:"图片生成中..."});var a=t.createCanvasContext("myCanvas");a.translate(.5,.5),a.drawImage(e.imageSrc,0,0,l,d),a.draw(!0,function(){var a=(e.cropperW-e.cutL-e.cutR)/e.cropperW*l,c=(e.cropperH-e.cutT-e.cutB)/e.cropperH*d,i=e.cutL/e.cropperW*l,o=e.cutT/e.cropperH*d;t.canvasToTempFilePath({x:i,y:o,width:a,height:c,destWidth:a*v,destHeight:c*v,quality:1,canvasId:"myCanvas",success:function(a){t.hideLoading(),e.$store.commit("setImgTemp",a.tempFilePath),e.imageSrc=a.tempFilePath,e.setData({isShowImg:!1})}})})},dragStart:function(t){o=t.touches[0].pageX,r=t.touches[0].pageY,u=this.cutL,n=this.cutR,h=this.cutB,s=this.cutT},dragMove:function(t){var e=t.target.dataset.drag;switch(e){case"right":var a=(o-t.touches[0].pageX)*b;n+a<0&&(a=-n),this.setData({cutR:n+a});break;case"left":a=(o-t.touches[0].pageX)*b;u-a<0&&(a=u),u-a>this.cropperW-this.cutR&&(a=u-(this.cropperW-this.cutR)),this.setData({cutL:u-a});break;case"top":a=(r-t.touches[0].pageY)*b;s-a<0&&(a=s),s-a>this.cropperH-this.cutB&&(a=s-(this.cropperH-this.cutB)),this.setData({cutT:s-a});break;case"bottom":a=(r-t.touches[0].pageY)*b;h+a<0&&(a=-h),this.setData({cutB:h+a});break;case"rightBottom":var c=(o-t.touches[0].pageX)*b,i=(r-t.touches[0].pageY)*b;h+i<0&&(i=-h),n+c<0&&(c=-n);var p=h+i,l=n+c;this.setData({cutB:p,cutR:l});break;default:break}},toPublish:function(){t.navigateTo({url:"publish"})}},onNavigationBarButtonTap:function(){t.navigateTo({url:"publish"})}};e.default=I}).call(this,a("6e42")["default"],a("0de9")["default"])},7328:function(t,e,a){"use strict";var c=a("d6bf"),i=a.n(c);i.a},"9c79":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return c}),a.d(e,"b",function(){return i})},a2f9:function(t,e,a){"use strict";(function(t){a("cbab"),a("921b");c(a("66fd"));var e=c(a("1dfa"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},d6bf:function(t,e,a){}},[["a2f9","common/runtime","common/vendor"]]]);