(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{391:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(8),o=(n(55),n(13),n(17),n(63),n(4)),c=function(){function e(e,t){switch(e){case"public":this.access="public";break;case"friend":this.access="friend";break;default:this.access="private"}this.id=t.uid,this.name=t.displayName,this.email=t.email}e.init=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){o.c.auth().onAuthStateChanged((function(n){n?e(n):t("Not Login")}))}));case 2:return r=t.sent,data=new e(n,r),t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var t=e.prototype;return t.set=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.c.firestore().collection(this.access).doc(this.id).update(((r={})[t]=n,r));case 3:e.next=11;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,o.c.firestore().collection(this.access).doc(this.id).set({id:this.id});case 9:return e.next=11,o.c.firestore().collection(this.access).doc(this.id).update(((c={})[t]=n,c));case 11:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),t.get=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.firestore().collection(this.access).doc(this.id).get();case 2:if(data=e.sent.data(),null!=t){e.next=7;break}return e.abrupt("return",data);case 7:return e.abrupt("return",data[t]);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.getAll=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("public"!=this.access&&"friend"!=this.access){e.next=9;break}return data=[],e.next=4,o.c.firestore().collection(this.access).get();case 4:return e.next=6,e.sent.forEach((function(e){null==t?data.push({id:e.id,value:e.data()}):data.push({id:e.id,value:e.data()[t]})}));case 6:return e.abrupt("return",data);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.setFile=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.storage().ref().child(this.id+"/"+t).put(n);case 2:return r=e.sent,e.abrupt("return",r.ref.getDownloadURL());case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),t.getFile=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.storage().ref().child(this.id+"/"+t).getDownloadURL();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.deleteFile=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.storage().ref().child(this.id+"/"+t).delete();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e}();function l(e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.c.storage().ref().child(t+"/userPhoto").getDownloadURL();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","/anonymousIcon.png");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},392:function(e,t,n){"use strict";var r=n(427);t.a=r.a},439:function(e,t,n){"use strict";n(72),n(440);var r=n(10),o=n(174),c=n(107),l=n(21),h=n(111),v=n(26),f=n(51),d=n(74),m=n(130),x=n(9);t.a=Object(r.a)(l.a,m.a,d.a,v.a,Object(h.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object.assign({"v-chip":!0},d.a.options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,this.sizeableClasses,this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(t){var n=t[0],r=t[1];e.$attrs.hasOwnProperty(n)&&Object(x.a)(n,r,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(c.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o.b,e)},genClose:function(){var e=this;return this.$createElement(c.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=Object.assign({},data.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return e(r,this.setTextColor(o,data),t)}})},440:function(e,t,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("197fcea4",content,!0,{sourceMap:!1})},441:function(e,t,n){var r=n(15)(!1);r.push([e.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),e.exports=r},547:function(e,t,n){var content=n(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("83ff91dc",content,!0,{sourceMap:!1})},548:function(e,t,n){var r=n(15)(!1);r.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=r},579:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(55),n(465)),c=n.n(o),l=(n(466),n(391)),h={components:{VueCropper:c.a},mounted:function(){},methods:{addDropFile:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.file=e.dataTransfer.files[0],t.setImage(e),n.next=4,l.a.init("private");case 4:return data=n.sent,n.next=7,data.setFile("key",t.file);case 7:case"end":return n.stop()}}),n)})))()},setImage:function(e){var t=this,n=new FileReader;n.onload=function(e){var n=e.target.result;t.$store.commit("image/set",n),t.$router.push({path:"crop"})},n.readAsDataURL(e)}}},v=n(40),f=n(70),d=n.n(f),m=n(355),x=n(396),y=(n(19),n(41),n(49),n(17),n(141),n(63),n(78),n(30),n(547),n(392)),_=n(439),w=n(2),k=n(9),z=n(90),C=y.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(w.y)(e).every((function(e){return null!=e&&"object"==typeof e}))}}},computed:{classes:function(){return Object.assign({},y.a.options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(w.q)(t,1024===this.base))},internalArrayValue:function(){return Object(w.y)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,r=void 0===n?"":n,o=t.size,c=void 0===o?0:o,l=e.truncateText(r);return e.showSize?l+" ("+Object(w.q)(c,1024===e.base)+")":l})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(k.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(w.h)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(_.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=y.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(z.b)(e.data.style,{display:"none"})),e},genInput:function(){var input=y.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:n,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=y.a.options.methods.genTextFieldSlot.call(this);return t.data.on=Object.assign({},t.data.on||{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=[].concat(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return e.slice(0,t)+"…"+e.slice(e.length-t)}}}),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{on:{drop:function(t){return t.preventDefault(),e.addDropFile.apply(null,arguments)},dragover:function(e){e.preventDefault()}}},[n("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera",placeholder:"画像をドラッグ＆ドロップか選択してください。"},on:{change:e.setImage},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VApp:m.a,VContainer:x.a,VFileInput:C})}}]);