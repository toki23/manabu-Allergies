(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10],{368:function(e,n,t){"use strict";t.r(n);var o={props:{PanelHeader:String}},r=t(52),l=t(82),c=t.n(l),d=t(392),h=t(393),v=t(394),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\n    "+e._s(e.PanelHeader)+"\n  ")]),e._v(" "),t("v-expansion-panel-content",[e._t("PanelContent")],2)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VExpansionPanel:d.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:v.a})},373:function(e,n,t){"use strict";t.r(n);var o={props:{User:Object},data:function(){return{PanelHeader:"Profile"}}},r=t(52),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigPanel",{attrs:{PanelHeader:e.PanelHeader},scopedSlots:e._u([{key:"PanelContent",fn:function(){return[t("p",[e._v("名前:"+e._s(e.User.name))]),t("br"),e._v(" "),t("p",[e._v("年齢:"+e._s(e.User.age))]),t("br"),e._v(" "),t("p",[e._v("ID:"+e._s(e.User.id))]),t("br"),e._v(" "),t("p",[e._v("Email:"+e._s(e.User.email))])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ConfigPanel:t(368).default})},392:function(e,n,t){"use strict";var o=t(101),r=t(97),l=t(1),c=t(5);n.a=Object(c.a)(Object(o.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(r.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object.assign({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(l.n)(this))}})},393:function(e,n,t){"use strict";var o=t(165),r=t(167),l=t(16),c=t(97),d=t(1),h=t(5),v=Object(h.a)(r.a,l.a,Object(c.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n.a=v.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(o.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(d.n)(n))])]})))}})},394:function(e,n,t){"use strict";var o=t(165),r=t(84),l=t(16),c=t(97),d=t(71),h=t(1),v=t(5),x=Object(v.a)(l.a,Object(c.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n.a=x.extend().extend({name:"v-expansion-panel-header",directives:{ripple:d.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(h.n)(this,"actions")||[this.$createElement(r.a,this.expandIcon)];return this.$createElement(o.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object.assign({},this.$listeners,{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(h.n)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})}}]);