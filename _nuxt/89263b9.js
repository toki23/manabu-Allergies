(window.webpackJsonp=window.webpackJsonp||[]).push([[30,14,22,34],{360:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(364),o=n(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},365:function(t,e,n){"use strict";n.r(e);var r={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},o=n(40),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{style:t.textStyle},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);var r={props:{DialogTitle:{type:String,require:!0},ToolBarColor:{type:String,require:!1,default:null},isUseImg:{type:Boolean,require:!1,default:!1},openBtnColor:{type:String,require:!1,default:"undefined"},btnHeight:{type:String,require:!1,default:void 0},btnWidth:{type:String,require:!1,default:void 0},btnMinHeight:{type:String,require:!1,default:void 0},btnMinWidth:{type:String,require:!1,default:void 0}},data:function(){return{dialog:!1}}},o=n(40),l=n(70),c=n.n(l),d=n(191),f=n(364),h=n(570),v=n(38),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:t.isUseImg,color:t.openBtnColor,height:t.btnHeight,width:t.btnWidth,"min-height":t.btnMinHeight,"min-width":t.btnMinWidth}},"v-btn",o,!1),r),[t._t("BtnContent")],2)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:t.ToolBarColor}},[t._v("\n      "+t._s(t.DialogTitle)+"\n    ")]),t._v(" "),t._t("DialogContent")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VDialog:h.a,VToolbar:v.a})},397:function(t,e,n){"use strict";n.r(e);var r={props:{DialogTitle:{type:String,require:!0},ToolBarColor:{type:String,require:!1,default:null}},data:function(){return{dialog:!1}}},o=n(40),l=n(70),c=n.n(l),d=n(164),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Dialog",{attrs:{DialogTitle:t.DialogTitle,ToolBarColor:t.ToolBarColor,isUseImg:!0},scopedSlots:t._u([{key:"BtnContent",fn:function(){return[n("v-icon",[t._v("mdi-cog-outline")])]},proxy:!0},{key:"DialogContent",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.default=component.exports;c()(component,{Dialog:n(386).default}),c()(component,{VIcon:d.a})},405:function(t,e,n){"use strict";n(41),n(52),n(178),n(72),n(63),n(53),n(108);var r=n(10),o=n(81),l=n(106);e.a=Object(r.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},418:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5419bbe0",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(418)},451:function(t,e,n){var r=n(15)(!1);r.push([t.i,".OpenSetting{float:right}.UpdateConfigBtn{margin-left:78%;margin-bottom:3%}.MyPageContentWrapper{margin-bottom:2vh}.CurrentValue{font-size:1rem}",""]),t.exports=r},490:function(t,e,n){"use strict";n.r(e);var r={props:{currentValue:{type:String,require:!0},inputValidation:{type:Array,require:!0},ThemeColor:{type:String,require:!0}},data:function(){return{NewValue:"",valueName:"ユーザー名",formValid:!0}},methods:{updateProfileName:function(){this.$store.dispatch({type:"auth/updateProfile",name:this.NewValue}).then((function(){})).catch((function(t){alert(t)}))}}},o=(n(450),n(40)),l=n(70),c=n.n(l),d=n(191),f=n(360),h=n(405),v=n(411),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MyPageContentWrapper"},[n("span",{staticClass:"CurrentValue"},[t._v(t._s(t.valueName)+"： "+t._s(t.currentValue))]),t._v(" "),n("div",{staticClass:"OpenSetting"},[n("SettingDialog",{attrs:{DialogTitle:"User Setting",ToolBarColor:t.ThemeColor}},[n("v-card-text",{staticClass:"TextareaWrapper"},[n("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[n("v-text-field",{attrs:{label:"新しい"+t.valueName,rules:t.inputValidation},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateProfileName.apply(null,arguments)}},model:{value:t.NewValue,callback:function(e){t.NewValue=e},expression:"NewValue"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"UpdateConfigBtn",attrs:{color:t.ThemeColor,disabled:!t.formValid},on:{click:t.updateProfileName}},[n("BtnText",[t._v("UPDATE")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{BtnText:n(365).default,SettingDialog:n(397).default}),c()(component,{VBtn:d.a,VCardText:f.b,VForm:h.a,VTextField:v.a})}}]);