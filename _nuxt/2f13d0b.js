(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(e,n,t){"use strict";t.r(n);var r={props:{PanelHeader:String}},l=t(52),o=t(82),c=t.n(o),v=t(392),f=t(393),_=t(394),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\n    "+e._s(e.PanelHeader)+"\n  ")]),e._v(" "),t("v-expansion-panel-content",[e._t("PanelContent")],2)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VExpansionPanel:v.a,VExpansionPanelContent:f.a,VExpansionPanelHeader:_.a})},373:function(e,n,t){"use strict";t.r(n);var r={props:{User:Object},data:function(){return{PanelHeader:"Profile"}}},l=t(52),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigPanel",{attrs:{PanelHeader:e.PanelHeader},scopedSlots:e._u([{key:"PanelContent",fn:function(){return[t("p",[e._v("名前:"+e._s(e.User.name))]),t("br"),e._v(" "),t("p",[e._v("年齢:"+e._s(e.User.age))]),t("br"),e._v(" "),t("p",[e._v("ID:"+e._s(e.User.id))]),t("br"),e._v(" "),t("p",[e._v("Email:"+e._s(e.User.email))])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ConfigPanel:t(368).default})},407:function(e,n,t){"use strict";t.r(n);t(13);var r={props:{User:{type:Object,require:!0},AvatarSize:{type:Number,require:!1,default:150}}},l=t(52),o=t(82),c=t.n(o),v=t(158),f=t(389),_=t(468),d=t(128),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("div",[t("v-avatar",{attrs:{height:e.AvatarSize,width:e.AvatarSize}},[t("v-img",{attrs:{src:e.User.icon,"aspect-ratio":16/9,alt:"user icon"}})],1)],1),e._v(" "),t("v-expansion-panels",[t("ProfileConfig",{attrs:{User:e.User}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{ProfileConfig:t(373).default}),c()(component,{VAvatar:v.a,VContainer:f.a,VExpansionPanels:_.a,VImg:d.a})}}]);