(window.webpackJsonp=window.webpackJsonp||[]).push([[38,37],{360:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(363),o=n(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},396:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("e8b41e5e",content,!0,{sourceMap:!1})},397:function(t,e,n){var r=n(15)(!1);r.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=r},402:function(t,e,n){"use strict";n(71),n(72),n(73),n(78),n(241),n(364),n(64),n(79);var r=n(1);var o,l=n(90);e.a=(o="container",r.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass=(o+" "+(data.staticClass||"")).trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" "+c.join(" "))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},405:function(t,e,n){"use strict";n(19),n(72),n(22),n(48),n(373),n(13),n(28),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(29),n(41),n(63),n(73),n(364);var r=n(1),o=n(90),l=n(2),c=["sm","md","lg","xl"],d=c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=c.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),v=c.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(d),offset:Object.keys(f),order:Object.keys(v)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e)r+="-"+e.replace(t,"");return"col"!==t||""!==n&&!0!==n?(r+="-"+n).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:Object.assign({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},v,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var c in n)l+=String(n[c]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push(((t={col:!r||!n.cols})["col-"+n.cols]=n.cols,t["offset-"+n.offset]=n.offset,t["order-"+n.order]=n.order,t["align-self-"+n.alignSelf]=n.alignSelf,t)),_.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),r)}})},407:function(t,e,n){"use strict";n(396);var r=n(26),o=n(10);e.a=Object(o.a)(r.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object.assign({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},422:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("d5cca3b0",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n.r(e);var r={props:{ZukanContent:{type:Object,require:!0}},data:function(){return{ImgHeight:300}}},o=n(40),l=n(70),c=n.n(l),d=n(405),f=n(402),v=n(136),h=n(407),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-col",[n("v-container",{staticClass:"ZukanImg"},[n("v-img",{attrs:{height:t.ImgHeight,src:t.ZukanContent.Img}})],1),t._v(" "),n("v-container",{staticClass:"ZukanContent"},[n("div",{staticClass:"font-weight-bold display-3"},[t._v(t._s(t.ZukanContent.Title))]),t._v(" "),n("v-subheader",[t._v(t._s(t.ZukanContent.Subtitle))]),t._v(" "),t._l(t.ZukanContent.Descriptions,(function(desc,e){return n("div",{key:e,staticClass:"Descriptions"},[n("h2",[t._v(t._s(e))]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v(t._s(desc))])])}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:f.a,VImg:v.a,VSubheader:h.a})},460:function(t,e,n){"use strict";n(422)},461:function(t,e,n){var r=n(15)(!1);r.push([t.i,".ZukanTitle{font-size:1vw}",""]),t.exports=r},494:function(t,e,n){"use strict";n.r(e);var r={props:{ZukanContent:{type:Object,require:!0},CardWidth:{type:String,require:!1,default:"150"}}},o=(n(460),n(40)),l=n(70),c=n.n(l),d=n(191),f=n(363),v=n(360),h=n(567),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-card",{attrs:{width:t.CardWidth,height:t.CardWidth,img:t.ZukanContent.Img}},[n("v-card-title",{staticClass:"ListTitle"},[n("p",{staticClass:"ZukanTitle"},[t._v(t._s(t.ZukanContent.Title))])])],1)],1)]}}])},[t._v(" "),n("v-card",[n("ZukanContentPage",{attrs:{ZukanContent:t.ZukanContent}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ZukanContentPage:n(427).default}),c()(component,{VBtn:d.a,VCard:f.a,VCardTitle:v.c,VDialog:h.a})}}]);