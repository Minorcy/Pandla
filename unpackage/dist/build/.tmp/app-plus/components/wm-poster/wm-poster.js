(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wm-poster/wm-poster"],{1332:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"30fd":function(t,e,n){"use strict";n.r(e);var i=n("1332"),r=n("b69c");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var l=n("2877"),c=Object(l["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},b04d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n,i,r,a,l){try{var c=t[a](l),u=c.value}catch(o){return void n(o)}c.done?e(u):Promise.resolve(u).then(i,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function c(t){l(a,i,r,c,u,"next",t)}function u(t){l(a,i,r,c,u,"throw",t)}c(void 0)})}}var u={name:"wm-poster",props:{CanvasID:{Type:String,default:"PosterCanvas"},imgSrc:{Type:String,default:""},QrSrc:{Type:String,default:""},Title:{Type:String,default:""},TitleColor:{Type:String,default:"#333333"},LineType:{Type:[String,Boolean],default:!0},PriceTxt:{Type:String,default:"99.99"},PriceColor:{Type:String,default:"#000000"},OriginalTxt:{Type:String,default:""},OriginalColor:{Type:String,default:"#b8b8b8"},Width:{Type:String,default:750},CanvasBg:{Type:String,default:"#ffffff"},Referrer:{Type:String,default:"潘多拉星球内測1.0歡迎您"},ViewDetails:{Type:String,default:"长按或扫描识别二维码"}},data:function(){return{canvasW:0,canvasH:0,canvasImgSrc:"",ctx:null}},methods:{OnCanvas:function(){var e=c(r.default.mark(function e(){var n,a,l,c,u,o,s,x,f,p,d,g,T;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"生成海報中"}),i.ctx=t.createCanvasContext(i.CanvasID,this),n=t.upx2px(i.Width),a=t.upx2px(30),l=t.upx2px(200),c=0,e.next=6,i.getImageInfo({imgSrc:i.imgSrc});case 6:return u=e.sent,e.next=9,i.getImageInfo({imgSrc:i.QrSrc});case 9:o=e.sent,s=[u.width,u.height],x=[o.width,o.height],f=n-2*a,s[0]!=f&&(s[1]=Math.floor(f/s[0]*s[1]),s[0]=f),x[0]!=l&&(x[1]=Math.floor(l/x[0]*x[1]),x[0]=l),i.canvasW=n,i.canvasH=s[1]+x[1]+28,i.ctx.setFillStyle(i.CanvasBg),i.ctx.fillRect(0,0,n,i.canvasH),i.ctx.drawImage(u.path,a,a,s[0],s[1]),i.ctx.setFontSize(t.upx2px(30)),i.ctx.setFillStyle(i.TitleColor),p=0,d=s[1]+2*a+10,g=1,T=0;case 26:if(!(T<i.Title.length)){e.next=48;break}if(c+=i.ctx.measureText(i.Title[T]).width,!(c>s[0])){e.next=44;break}if(2!=g||!i.LineType){e.next=37;break}return i.ctx.fillText(i.Title.substring(p,T-8)+"...",a,d),c=0,p=T,g++,e.abrupt("break",48);case 37:i.ctx.fillText(i.Title.substring(p,T),a,d),c=0,d+=20,p=T,g++;case 42:e.next=45;break;case 44:T==i.Title.length-1&&(i.ctx.fillText(i.Title.substring(p,T+1),a,d+t.upx2px(70)),c=0);case 45:T++,e.next=26;break;case 48:c=a,d+=t.upx2px(20),""!=i.PriceTxt&&(i.ctx.setFillStyle(i.PriceColor),i.ctx.setFontSize(t.upx2px(38)),i.ctx.fillText(i.PriceTxt,c,d),c+=i.ctx.measureText(i.PriceTxt).width+t.upx2px(10)),""!=i.PriceTxt&&""!=i.OriginalTxt&&(i.ctx.setFillStyle(i.OriginalColor),i.ctx.setFontSize(t.upx2px(24)),i.ctx.fillText(i.OriginalTxt,c,d)),i.ctx.strokeStyle=i.OriginalColor,i.ctx.moveTo(c,d-t.upx2px(10)),i.ctx.lineTo(c+i.ctx.measureText(i.OriginalTxt).width,d-t.upx2px(10)),i.ctx.stroke(),d-=t.upx2px(50),i.ctx.drawImage(o.path,s[0]-x[0]+a,d,x[0],x[1]),i.ctx.setFillStyle(i.TitleColor),i.ctx.setFillStyle(i.OriginalColor),i.ctx.setFontSize(t.upx2px(24)),i.ctx.fillText(i.Referrer,a,d+t.upx2px(50)+x[1]/2),i.ctx.setFillStyle(i.OriginalColor),i.ctx.setFontSize(t.upx2px(24)),i.ctx.fillText(i.ViewDetails,a,d+t.upx2px(50)+x[1]/2+20),setTimeout(function(){i.ctx.draw(!0,function(t){i.getNewImage()})},600);case 66:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getImageInfo:function(){var e=c(r.default.mark(function e(n){var i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=n.imgSrc,e.abrupt("return",new Promise(function(e,n){t.getImageInfo({src:i,success:function(t){e(t)},fail:function(t){n(t)}})}));case 2:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),getNewImage:function(){t.canvasToTempFilePath({canvasId:i.CanvasID,quality:1,complete:function(e){t.hideLoading(),i.$emit("success",e)}},this)}},mounted:function(){i=this,i.OnCanvas()}};e.default=u}).call(this,n("6e42")["default"])},b69c:function(t,e,n){"use strict";n.r(e);var i=n("b04d"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wm-poster/wm-poster-create-component',
    {
        'components/wm-poster/wm-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("30fd"))
        })
    },
    [['components/wm-poster/wm-poster-create-component']]
]);                
