(window.webpackJsonp=window.webpackJsonp||[]).push([[42,25,31,32],{359:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return f}));var r=e(362),o=e(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},386:function(t,n,e){var content=e(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("1bbdf444",content,!0,{sourceMap:!1})},390:function(t,n,e){var content=e(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("e8b41e5e",content,!0,{sourceMap:!1})},391:function(t,n,e){var r=e(15)(!1);r.push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=r},394:function(t,n,e){var content=e(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("945df6c0",content,!0,{sourceMap:!1})},396:function(t,n,e){"use strict";e(41),e(52),e(78),e(72),e(22),e(48),e(364),e(13),e(28),e(365),e(366),e(367),e(368),e(369),e(370),e(371),e(372),e(373),e(374),e(375),e(376),e(377),e(29),e(63),e(360);var r=e(1),o=e(90),l=e(2),c=["sm","md","lg","xl"],d=["start","end","center"];function f(t,n){return c.reduce((function(e,r){return e[t+Object(l.x)(r)]=n(),e}),{})}var v=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},h=f("align",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},y=f("justify",(function(){return{type:String,default:null,validator:m}})),C=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},_=f("alignContent",(function(){return{type:String,default:null,validator:C}})),k={align:Object.keys(h),justify:Object.keys(y),alignContent:Object.keys(_)},x={align:"align",justify:"justify",alignContent:"align-content"};function j(t,n,e){var r=x[t];if(null!=e){if(n)r+="-"+n.replace(t,"");return(r+="-"+e).toLowerCase()}}var O=new Map;n.a=r.a.extend({name:"v-row",functional:!0,props:Object.assign({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},h,{justify:{type:String,default:null,validator:m}},y,{alignContent:{type:String,default:null,validator:C}},_),render:function(t,n){var e=n.props,data=n.data,r=n.children,l="";for(var c in e)l+=String(e[c]);var d=O.get(l);return d||function(){var t,n;for(n in d=[],k)k[n].forEach((function(t){var r=e[t],o=j(n,t,r);o&&d.push(o)}));d.push(((t={"no-gutters":e.noGutters,"row--dense":e.dense})["align-"+e.align]=e.align,t["justify-"+e.justify]=e.justify,t["align-content-"+e.alignContent]=e.alignContent,t)),O.set(l,d)}(),t(e.tag,Object(o.a)(data,{staticClass:"row",class:d}),r)}})},397:function(t,n,e){"use strict";e(386)},398:function(t,n,e){var r=e(15)(!1);r.push([t.i,".PageTitle{margin-top:2rem;margin-bottom:2.8rem}",""]),t.exports=r},399:function(t,n,e){"use strict";e(71),e(72),e(73),e(78),e(240),e(360),e(64),e(79);var r=e(1);var o,l=e(90);n.a=(o="container",r.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,r=n.children;data.staticClass=(o+" "+(data.staticClass||"")).trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));c.length&&(data.staticClass+=" "+c.join(" "))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,o=n.children,c=data.attrs;return c&&(data.attrs={},e=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),o)}})},400:function(t,n,e){"use strict";e(19),e(72),e(22),e(48),e(364),e(13),e(28),e(365),e(366),e(367),e(368),e(369),e(370),e(371),e(372),e(373),e(374),e(375),e(376),e(377),e(29),e(41),e(63),e(73),e(360);var r=e(1),o=e(90),l=e(2),c=["sm","md","lg","xl"],d=c.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{}),f=c.reduce((function(t,n){return t["offset"+Object(l.x)(n)]={type:[String,Number],default:null},t}),{}),v=c.reduce((function(t,n){return t["order"+Object(l.x)(n)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(d),offset:Object.keys(f),order:Object.keys(v)};function m(t,n,e){var r=t;if(null!=e&&!1!==e){if(n)r+="-"+n.replace(t,"");return"col"!==t||""!==e&&!0!==e?(r+="-"+e).toLowerCase():r.toLowerCase()}}var y=new Map;n.a=r.a.extend({name:"v-col",functional:!0,props:Object.assign({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},v,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,data=n.data,r=n.children,l=(n.parent,"");for(var c in e)l+=String(e[c]);var d=y.get(l);return d||function(){var t,n;for(n in d=[],h)h[n].forEach((function(t){var r=e[t],o=m(n,t,r);o&&d.push(o)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push(((t={col:!r||!e.cols})["col-"+e.cols]=e.cols,t["offset-"+e.offset]=e.offset,t["order-"+e.order]=e.order,t["align-self-"+e.alignSelf]=e.alignSelf,t)),y.set(l,d)}(),t(e.tag,Object(o.a)(data,{class:d}),r)}})},401:function(t,n,e){"use strict";e(390);var r=e(26),o=e(10);n.a=Object(o.a)(r.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object.assign({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},405:function(t,n,e){"use strict";e.r(n);e(397);var r=e(40),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"font-weight-bold display-3 PageTitle"},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},416:function(t,n,e){var content=e(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("d5cca3b0",content,!0,{sourceMap:!1})},417:function(t,n,e){"use strict";e(394)},418:function(t,n,e){var r=e(15)(!1);r.push([t.i,".Descriptions{margin-top:50px;margin-left:10px}",""]),t.exports=r},423:function(t,n,e){"use strict";e.r(n);var r={props:{ZukanContent:{type:Object,require:!0}},data:function(){return{ImgHeight:300}}},o=(e(417),e(40)),l=e(70),c=e.n(l),d=e(400),f=e(399),v=e(136),h=e(401),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-col",[e("v-container",{staticClass:"ZukanImg"},[e("v-img",{attrs:{height:t.ImgHeight,src:t.ZukanContent.Img}})],1),t._v(" "),e("v-container",{staticClass:"ZukanContent"},[e("div",{staticClass:"font-weight-bold display-3"},[t._v(t._s(t.ZukanContent.Title))]),t._v(" "),e("v-subheader",[t._v(t._s(t.ZukanContent.Subtitle))]),t._v(" "),t._l(t.ZukanContent.Descriptions,(function(desc,n){return e("div",{key:n,staticClass:"Descriptions"},[e("h2",[t._v(t._s(n))]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v(t._s(desc))])])}))],2)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VCol:d.a,VContainer:f.a,VImg:v.a,VSubheader:h.a})},454:function(t,n,e){"use strict";e(416)},455:function(t,n,e){var r=e(15)(!1);r.push([t.i,".ZukanContentIcon{margin-top:3rem;margin-left:5rem}.ListTitle{padding-top:50%}",""]),t.exports=r},465:function(t,n,e){var content=e(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("2b2d977a",content,!0,{sourceMap:!1})},482:function(t,n,e){"use strict";e.r(n);var r={props:{ZukanContent:{type:Object,require:!0}},data:function(){return{CardWidth:150}}},o=(e(454),e(40)),l=e(70),c=e.n(l),d=e(238),f=e(362),v=e(359),h=e(547),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({staticClass:"ZukanContentIcon",attrs:{icon:""}},"v-btn",o,!1),r),[e("v-card",{attrs:{width:t.CardWidth,height:t.CardWidth,img:t.ZukanContent.Img}},[e("v-card-title",{staticClass:"ListTitle"},[e("div",[t._v("\n            "+t._s(t.ZukanContent.Title)+"\n          ")])])],1)],1)]}}])},[t._v(" "),e("v-card",[e("ZukanContentPage",{attrs:{ZukanContent:t.ZukanContent}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{ZukanContentPage:e(423).default}),c()(component,{VBtn:d.a,VCard:f.a,VCardTitle:v.c,VDialog:h.a})},524:function(t){t.exports=JSON.parse('{"ZukanDatas":[{"Title":"テスト１","Img":"https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg","Descriptions":{"図鑑説明文1":"これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。","図鑑説明文2":"これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。","図鑑補足":"図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。"}},{"Title":"テスト2","Img":"https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg","Descriptions":{"図鑑説明文1":"これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。","図鑑説明文2":"これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。これはテスト2です。","図鑑補足":"図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。図鑑の補足を追加してください。"}}]}')},525:function(t,n,e){"use strict";e(465)},526:function(t,n,e){var r=e(15)(!1);r.push([t.i,".ZukanIndexTitle{margin-top:50px;margin-bottom:50px}.ZukanLists{margin-right:60px;margin-left:100px}",""]),t.exports=r},557:function(t,n,e){"use strict";e.r(n);var r={asyncData:function(){return{ZukanContent:e(524)}}},o=(e(525),e(40)),l=e(70),c=e.n(l),d=e(400),f=e(399),v=e(396),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("PageTitle",{staticClass:"ZukanIndexTitle"},[t._v("図鑑目次")]),t._v(" "),e("v-row",{staticClass:"ZukanLists"},t._l(t.ZukanContent.ZukanDatas,(function(t,n){return e("v-col",{key:n,attrs:{cols:"2"}},[e("ZukanList",{attrs:{ZukanContent:t}})],1)})),1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{PageTitle:e(405).default,ZukanList:e(482).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:v.a})}}]);