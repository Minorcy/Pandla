(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tki-barcode/tki-barcode"],{"1ade":function(t,e,n){"use strict";n.r(e);var i=n("b740"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"6a6c":function(t,e,n){"use strict";var i=n("aedb"),o=n.n(i);o.a},aedb:function(t,e,n){},b740:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=a(n("bd4d"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"tkiBarcode",props:{show:{type:Boolean,default:!0},cid:{type:String,default:"tki-barcode-canvas"},unit:{type:String,default:"upx"},val:{type:String,default:"1234567890128"},format:{type:String,default:"CODE128"},opations:{type:Object,default:function(){return{width:6,height:40,displayValue:!1,textAlign:"center",textPosition:"bottom",textMargin:0,fontSize:24,fontColor:"#000000",lineColor:"#000000",background:"#FFFFFF",margin:0,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0}}},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!0}},data:function(){return{result:"",canvasWidth:0,canvasHeight:0}},onUnload:function(){},methods:(i={_makeCode:function(){var e=this;"upx"==e.unit&&(e.opations.width&&(e.opations.width=t.upx2px(e.opations.width)),e.opations.height&&(e.opations.height=t.upx2px(e.opations.height)),e.opations.fontSize&&(e.opations.fontSize=t.upx2px(e.opations.fontSize))),e._empty(e.opations.text)&&(e.opations.text=e.val),e._empty(e.opations.format)&&(e.opations.format=e.format),new o.default(e,e.cid,e.opations,function(t){e.canvasWidth=t.width,e.canvasHeight=t.height},function(t){e._result(t)})},_clearCode:function(){this._result("")},_saveCode:function(){var e=this;""!=this.result&&t.saveImageToPhotosAlbum({filePath:e.result,success:function(){t.showToast({title:"条形码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)}},u(i,"_result",function(t){this.result=t,this.$emit("result",t)}),u(i,"_empty",function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)?n=!0:"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}),i),watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout(function(){n._makeCode()},100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout(function(){n._makeCode()},0))}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout(function(){t._makeCode()},0))}};e.default=s}).call(this,n("6e42")["default"])},bad0:function(t,e,n){"use strict";n.r(e);var i=n("fe8f"),o=n("1ade");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6a6c");var u=n("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},fe8f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-barcode/tki-barcode-create-component',
    {
        'components/tki-barcode/tki-barcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("bad0"))
        })
    },
    [['components/tki-barcode/tki-barcode-create-component']]
]);