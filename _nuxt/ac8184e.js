(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17,23],{364:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},c=r(46),o=r(89),l=r.n(o),f=r(164),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{style:t.textStyle},[r("v-icon",{attrs:{size:t.size,color:t.color}},[t._v(t._s(t.icon))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:f.a})},369:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var n=r(8),c=(r(51),r(13),r(17),r(62),r(3)),o=function(){function t(t,e){switch(t){case"public":this.access="public";break;case"friend":this.access="friend";break;default:this.access="private"}this.id=e.uid,this.name=e.displayName,this.email=e.email}t.init=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(t,e){c.a.onAuthStateChanged((function(r){r?t(r):e("Not Login")}))}));case 2:return n=e.sent,data=new t(r,n),e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var e=t.prototype;return e.set=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.b.collection(this.access).doc(this.id).update(((n={})[e]=r,n));case 3:t.next=11;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,c.b.collection(this.access).doc(this.id).set({id:this.id});case 9:return t.next=11,c.b.collection(this.access).doc(this.id).update(((o={})[e]=r,o));case 11:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(e,r){return t.apply(this,arguments)}}(),e.get=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.collection(this.access).doc(this.id).get();case 2:if(data=t.sent.data(),null!=e){t.next=7;break}return t.abrupt("return",data);case 7:return t.abrupt("return",data[e]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.collection("public").doc(this.id).get();case 2:return data=t.sent.data().point,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.setPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.collection("public").doc(this.id).update({point:p});case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setZukan=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get("zukanID");case 2:if(t.t0=e=t.sent,null==t.t0){t.next=7;break}t.t1=e,t.next=8;break;case 7:t.t1=[];case 8:return r=t.t1,console.log(r),console.log(p),r.push(p),t.next=14,c.b.collection("public").doc(this.id).update({zukanID:r});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getAll=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("public"!=this.access&&"friend"!=this.access){t.next=9;break}return data=[],t.next=4,c.b.collection(this.access).limit(20).orderBy("point","desc").get();case 4:return t.next=6,t.sent.forEach((function(t){null==e?data.push({id:t.id,value:t.data()}):data.push({id:t.id,value:t.data()[e]})}));case 6:return t.abrupt("return",data);case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.ref().child(this.id+"/"+e).put(r);case 2:return n=t.sent,t.abrupt("return",n.ref.getDownloadURL());case 4:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),e.getFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.ref().child(this.id+"/"+e).getDownloadURL();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.deleteFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.ref().child(this.id+"/"+e).delete();case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}();function l(t){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.d.ref().child(e+"/userPhoto").getDownloadURL();case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return","default");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},371:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("795d9298",content,!0,{sourceMap:!1})},376:function(t,e,r){"use strict";r.r(e);var n=r(8),data=(r(51),r(369)),c={props:{userData:{type:Object,require:!0}},data:function(){return{img:""}},computed:{IconPath:function(){return"default"==this.img?"./defaultAvater.png":this.img}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(data.b)(t.userData.id);case 2:r=e.sent,t.img=r;case 4:case"end":return e.stop()}}),e)})))()}},o=(r(396),r(46)),l=r(89),f=r.n(l),d=r(137),h=r(103),v=r(167),m=r(168),w=r(69),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",[r("v-list-item-avatar",{attrs:{width:"5vw"}},[r("v-img",{attrs:{src:t.IconPath}})],1),t._v(" "),r("v-list-item-title",[t._v(t._s(t.userData.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.userData.id))]),t._v(" "),r("v-list-item-action",[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VImg:d.a,VListItem:h.a,VListItemAction:v.a,VListItemAvatar:m.a,VListItemSubtitle:w.b,VListItemTitle:w.c})},396:function(t,e,r){"use strict";r(371)},397:function(t,e,r){var n=r(15)(!1);n.push([t.i,".FriendAvatarDatas{margin-top:1vw;margin-right:0}.AvatarDataText{font-size:max(1.5vw,12px);font-weight:700;margin-right:0}.FriendAvatarControlBtn{display:inline-block;margin-left:0;float:right}",""]),t.exports=n},410:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("40f9ba6c",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(410)},435:function(t,e,r){var n=r(15)(!1);n.push([t.i,".FriendAvatarIcon{display:inline-block;margin:2vh 2vw}.FriendListCards{margin-bottom:1vh;margin-left:1vw}.FriendAvatarDatas{display:inline-block;margin:3vh 2vw}.AvatarDataText{font-size:2rem;font-weight:700;margin-right:12vw}.FriendAvatarControlBtn{display:inline-block;margin:4vh 2vw;float:right}",""]),t.exports=n},464:function(t,e,r){"use strict";r.r(e);var n={components:{FriendListCard:r(376).default},computed:{getFriendListGet:function(){return this.$store.getters["friend/friendList"]}},methods:{deleteFriend:function(t){this.$store.dispatch({type:"friend/deleteFriend",id:t}).then((function(){})).catch((function(t){}))}}},c=(r(434),r(46)),o=r(89),l=r.n(o),f=r(194),d=r(166),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list",{attrs:{width:"80%"}},t._l(t.getFriendListGet,(function(e){return r("div",{key:e.id},[r("FriendListCard",{attrs:{userData:e}},[r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return t.deleteFriend(e.id)}}},[r("StyledText",{attrs:{color:"white"}},[t._v("DELETE")])],1)],1)],1)})),0),t._v(" "),0==t.getFriendListGet.length?r("h2",[t._v("まだお友達はいないようです...お友達を追加しましょう!!")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),l()(component,{VBtn:f.a,VList:d.a})}}]);