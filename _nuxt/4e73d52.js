(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{373:function(e,t,l){"use strict";l.r(t);var n={props:{title:{type:String,require:!1,default:"Input"},icon:{type:String,require:!1,default:""},password:{type:Boolean,require:!1,default:!1},mail:{type:Boolean,require:!1,default:!1},required:{type:Boolean,require:!1,default:!1},defaultValue:{type:String,require:!1,default:""},editSwitch:{type:Boolean,require:!1,default:!1}},computed:{form_type:function(){return this.password?this.passwdShow?"text":"password":this.mail?"email":"text"},form_type_icon:function(){return""!=this.icon?this.icon:this.password?"mdi-lock":this.mail?"mdi-email":""},value:{get:function(){return null!=this.value_?this.value_:this.defaultValue},set:function(e){""!=e&&(this.value_=e)}}},emits:["callback:changed","callback:pencil","callback:close"],data:function(){return{passwdShow:!1,disabled:!1,editable:!this.editSwitch,value_:void 0}},methods:{checker:function(){return this.required&&""==this.value?"このフォームへの入力は必須です。":!(this.mail&&!/.+@.+\..+/.test(this.value))||"メールアドレスを正しく入力してください。"},pencilClick:function(){this.editable?this.defaultValue!=this.value?this.$emit("callback:changed",this.value):(this.$emit("callback:close"),this.editable=!1):(this.editable=!0,this.password&&(this.$refs.form.value=""),this.$emit("callback:pencil"))}}},c=l(39),r=l(62),d=l.n(r),o=l(470),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{ref:"form",attrs:{label:e.title+(e.required?" *":""),type:e.form_type,"append-icon":e.password&&e.editable?e.passwdShow?"mdi-eye":"mdi-eye-off":"","append-outer-icon":e.editSwitch?e.editable?"mdi-check":"mdi-pencil":"",disabled:e.disabled,rules:[e.checker],"prepend-icon":e.form_type_icon,readonly:!e.editable},on:{"click:append":function(t){e.passwdShow=!e.passwdShow},"click:append-outer":e.pencilClick},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})}),[],!1,null,null,null);t.default=component.exports;d()(component,{VTextField:o.a})}}]);