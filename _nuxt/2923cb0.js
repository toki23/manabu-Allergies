(window.webpackJsonp=window.webpackJsonp||[]).push([[30,16,17,18,19,20,23],{364:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},o=r(46),c=r(89),d=r.n(c),l=r(164),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{style:t.textStyle},[r("v-icon",{attrs:{size:t.size,color:t.color}},[t._v(t._s(t.icon))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:l.a})},369:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d}));var n=r(8),o=(r(51),r(13),r(17),r(62),r(3)),c=function(){function t(t,e){switch(t){case"public":this.access="public";break;case"friend":this.access="friend";break;default:this.access="private"}this.id=e.uid,this.name=e.displayName,this.email=e.email}t.init=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(t,e){o.a.onAuthStateChanged((function(r){r?t(r):e("Not Login")}))}));case 2:return n=e.sent,data=new t(r,n),e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var e=t.prototype;return e.set=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.collection(this.access).doc(this.id).update(((n={})[e]=r,n));case 3:t.next=11;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,o.b.collection(this.access).doc(this.id).set({id:this.id});case 9:return t.next=11,o.b.collection(this.access).doc(this.id).update(((c={})[e]=r,c));case 11:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(e,r){return t.apply(this,arguments)}}(),e.get=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection(this.access).doc(this.id).get();case 2:if(data=t.sent.data(),null!=e){t.next=7;break}return t.abrupt("return",data);case 7:return t.abrupt("return",data[e]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection("public").doc(this.id).get();case 2:return data=t.sent.data().point,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.setPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection("public").doc(this.id).update({point:p});case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setZukan=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get("zukanID");case 2:if(t.t0=e=t.sent,null==t.t0){t.next=7;break}t.t1=e,t.next=8;break;case 7:t.t1=[];case 8:return r=t.t1,console.log(r),console.log(p),r.push(p),t.next=14,o.b.collection("public").doc(this.id).update({zukanID:r});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getAll=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("public"!=this.access&&"friend"!=this.access){t.next=9;break}return data=[],t.next=4,o.b.collection(this.access).limit(20).orderBy("point","desc").get();case 4:return t.next=6,t.sent.forEach((function(t){null==e?data.push({id:t.id,value:t.data()}):data.push({id:t.id,value:t.data()[e]})}));case 6:return t.abrupt("return",data);case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).put(r);case 2:return n=t.sent,t.abrupt("return",n.ref.getDownloadURL());case 4:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),e.getFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).getDownloadURL();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.deleteFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).delete();case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}();function d(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.d.ref().child(e+"/userPhoto").getDownloadURL();case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return","default");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},371:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("795d9298",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1bbdf444",content,!0,{sourceMap:!1})},375:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,require:!1,default:"Input"},icon:{type:String,require:!1,default:""},password:{type:Boolean,require:!1,default:!1},mail:{type:Boolean,require:!1,default:!1},required:{type:Boolean,require:!1,default:!1},defaultValue:{type:String,require:!1,default:""},editSwitch:{type:Boolean,require:!1,default:!1}},computed:{form_type:function(){return this.password?this.passwdShow?"text":"password":this.mail?"email":"text"},form_type_icon:function(){return""!=this.icon?this.icon:this.password?"mdi-lock":this.mail?"mdi-email":""},value:{get:function(){return null!=this.value_?this.value_:this.defaultValue},set:function(t){""!=t&&(this.value_=t)}}},emits:["callback:changed","callback:pencil","callback:close"],data:function(){return{passwdShow:!1,disabled:!1,editable:!this.editSwitch,value_:void 0}},methods:{checker:function(){return this.required&&""==this.value?"このフォームへの入力は必須です。":!(this.mail&&!/.+@.+\..+/.test(this.value))||"メールアドレスを正しく入力してください。"},pencilClick:function(){this.editable?this.defaultValue!=this.value?this.$emit("callback:changed",this.value):(this.$emit("callback:close"),this.editable=!1):(this.editable=!0,this.password&&(this.$refs.form.value=""),this.$emit("callback:pencil"))}}},o=r(46),c=r(89),d=r.n(c),l=r(470),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{ref:"form",attrs:{label:t.title+(t.required?" *":""),type:t.form_type,"append-icon":t.password&&t.editable?t.passwdShow?"mdi-eye":"mdi-eye-off":"","append-outer-icon":t.editSwitch?t.editable?"mdi-check":"mdi-pencil":"",disabled:t.disabled,rules:[t.checker],"prepend-icon":t.form_type_icon,readonly:!t.editable},on:{"click:append":function(e){t.passwdShow=!t.passwdShow},"click:append-outer":t.pencilClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VTextField:l.a})},376:function(t,e,r){"use strict";r.r(e);var n=r(8),data=(r(51),r(369)),o={props:{userData:{type:Object,require:!0}},data:function(){return{img:""}},computed:{IconPath:function(){return"default"==this.img?"./defaultAvater.png":this.img}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(data.b)(t.userData.id);case 2:r=e.sent,t.img=r;case 4:case"end":return e.stop()}}),e)})))()}},c=(r(396),r(46)),d=r(89),l=r.n(d),f=r(137),v=r(103),h=r(167),m=r(168),_=r(69),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",[r("v-list-item-avatar",{attrs:{width:"5vw"}},[r("v-img",{attrs:{src:t.IconPath}})],1),t._v(" "),r("v-list-item-title",[t._v(t._s(t.userData.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(t.userData.id))]),t._v(" "),r("v-list-item-action",[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:f.a,VListItem:v.a,VListItemAction:h.a,VListItemAvatar:m.a,VListItemSubtitle:_.b,VListItemTitle:_.c})},396:function(t,e,r){"use strict";r(371)},397:function(t,e,r){var n=r(15)(!1);n.push([t.i,".FriendAvatarDatas{margin-top:1vw;margin-right:0}.AvatarDataText{font-size:max(1.5vw,12px);font-weight:700;margin-right:0}.FriendAvatarControlBtn{display:inline-block;margin-left:0;float:right}",""]),t.exports=n},398:function(t,e,r){"use strict";r(372)},399:function(t,e,r){var n=r(15)(!1);n.push([t.i,".PageTitle{margin-top:4vh;margin-bottom:6vh;font-weight:700;font-size:max(4vw,50px)}",""]),t.exports=n},401:function(t,e,r){"use strict";r.r(e);r(398);var n=r(46),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"PageTitle"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("8609e458",content,!0,{sourceMap:!1})},410:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("40f9ba6c",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(407)},433:function(t,e,r){var n=r(15)(!1);n.push([t.i,".DialogTexts{color:#fff}",""]),t.exports=n},434:function(t,e,r){"use strict";r(410)},435:function(t,e,r){var n=r(15)(!1);n.push([t.i,".FriendAvatarIcon{display:inline-block;margin:2vh 2vw}.FriendListCards{margin-bottom:1vh;margin-left:1vw}.FriendAvatarDatas{display:inline-block;margin:3vh 2vw}.AvatarDataText{font-size:2rem;font-weight:700;margin-right:12vw}.FriendAvatarControlBtn{display:inline-block;margin:4vh 2vw;float:right}",""]),t.exports=n},442:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{testUser:[{id:"0",name:"bob"},{id:"1",name:"john"},{id:"2",name:"mike"}]}},computed:{getRequestFriendList:function(){return this.$store.getters["friend/requestFriendList"]}},methods:{deleteRequestFriend:function(t){this.$store.dispatch({type:"friend/deleteRequestFriend",id:t}).then((function(){})).catch((function(t){}))}}},o=r(46),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list",{attrs:{width:"80%"}},t._l(t.getRequestFriendList,(function(e){return r("div",{key:e.id},[r("FriendListCard",{attrs:{userData:e}},[r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return t.deleteRequestFriend(e.id)}}},[r("StyledText",{attrs:{color:"white"}},[t._v("DELETE")])],1)],1)],1)})),0),t._v(" "),0==t.getRequestFriendList.length?r("h2",[t._v("あなたからお友達におくったフレンドリクエストは今のところないようです..."),r("br"),t._v('"ADD Friend"ボタンを使ってリクエストしてみましょう!!')]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},443:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{testUser:[{id:"0",name:"bob"},{id:"1",name:"john"},{id:"2",name:"mike"}]}},computed:{getReceiveRequestFriendList:function(){return this.$store.getters["friend/receiveFriendList"]}},methods:{addReceiveFriend:function(t){this.$store.dispatch({type:"friend/addReceiveFriend",id:t}).then((function(){})).catch((function(t){alert(t)}))},deleteReceiveFriend:function(t){this.$store.dispatch({type:"friend/deleteReceiveFriend",id:t}).then((function(){})).catch((function(t){alert(t)}))}}},o=r(46),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list",{attrs:{width:"80%"}},t._l(t.getReceiveRequestFriendList,(function(e){return r("div",{key:e.id},[r("FriendListCard",{attrs:{userData:e}},[r("v-btn",{attrs:{color:"#8ccb00"},on:{click:function(r){return t.addReceiveFriend(e.id)}}},[r("StyledText",{attrs:{color:"white"}},[t._v("承認")])],1),t._v(" "),r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return t.deleteReceiveFriend(e.id)}}},[r("StyledText",{attrs:{color:"white"}},[t._v("棄却")])],1)],1)],1)})),0),t._v(" "),0==t.getReceiveRequestFriendList.length?r("h2",[t._v("今のところ、あなたはお友達からフレンドリクエストを受け取っていないようです...")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},454:function(t,e,r){var content=r(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("24ca8690",content,!0,{sourceMap:!1})},463:function(t,e,r){"use strict";r.r(e);var n={props:{ThemeColor:{type:String,require:!0},userId:{type:String,require:!1,default:""}},data:function(){return{addfrienddialog:!1,errorMsg:"",loading:!1}},methods:{requestFriend:function(){var t=this;this.loading=!0,this.$refs.form.validate()?this.$store.dispatch({type:"friend/requestFriend",id:this.$refs.requestFriendId.value}).then((function(){t.loading=!1,t.dialog=!1})).catch((function(e){t.errorMsg="Error: same"==e?"自分自身を追加することはできません...!":e,t.loading=!1})):this.loading=!1}},mounted:function(){""!=this.userId&&(this.addfrienddialog=!0)}},o=(r(432),r(46)),c=r(89),d=r.n(c),l=r(194),f=r(366),v=r(363),h=r(544),m=r(452),_=r(406),x=r(164),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{attrs:{color:"#8ccb00",large:""},on:{click:function(e){t.addfrienddialog=!0}}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-account-plus")]),t._v(" "),r("StyledText",{attrs:{color:"white"}},[t._v("Add Friend")])],1),t._v(" "),r("v-dialog",{attrs:{width:"400px"},model:{value:t.addfrienddialog,callback:function(e){t.addfrienddialog=e},expression:"addfrienddialog"}},[r("v-card",[r("v-card-title",[t._v("フレンドリクエスト送信")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-subtitle",[t._v("\n        フォームにお友達のユーザーIDを入力するとお友達にフレンドリクエストが送信されます。"),r("br"),t._v("お友達がフレンドリクエストを承認すると、フレンドとして登録されます。\n      ")]),t._v(" "),r("v-card-text",[r("StyledText",{attrs:{color:"red"}},[t._v(t._s(t.errorMsg))]),t._v(" "),r("v-form",{ref:"form",attrs:{disabled:t.loading}},[r("TextForm",{ref:"requestFriendId",attrs:{title:"Friend's User ID",icon:"mdi-account-outline",required:"",defaultValue:t.userId}})],1)],1),t._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{disabled:t.loading},on:{click:function(e){t.addfrienddialog=!1}}},[t._v("キャンセル")]),t._v(" "),r("v-btn",{attrs:{color:"green",loading:t.loading},on:{click:t.requestFriend}},[t._v("送信")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{StyledText:r(364).default,TextForm:r(375).default}),d()(component,{VBtn:l.a,VCard:f.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VDialog:h.a,VDivider:m.a,VForm:_.a,VIcon:x.a})},464:function(t,e,r){"use strict";r.r(e);var n={components:{FriendListCard:r(376).default},computed:{getFriendListGet:function(){return this.$store.getters["friend/friendList"]}},methods:{deleteFriend:function(t){this.$store.dispatch({type:"friend/deleteFriend",id:t}).then((function(){})).catch((function(t){}))}}},o=(r(434),r(46)),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list",{attrs:{width:"80%"}},t._l(t.getFriendListGet,(function(e){return r("div",{key:e.id},[r("FriendListCard",{attrs:{userData:e}},[r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return t.deleteFriend(e.id)}}},[r("StyledText",{attrs:{color:"white"}},[t._v("DELETE")])],1)],1)],1)})),0),t._v(" "),0==t.getFriendListGet.length?r("h2",[t._v("まだお友達はいないようです...お友達を追加しましょう!!")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},506:function(t,e,r){"use strict";r(454)},507:function(t,e,r){var n=r(15)(!1);n.push([t.i,".AddFriendBtn{float:left;bottom:10vh}.TabTexts{font-size:max(.9vw,10px)}.FriendTabs{width:100%}",""]),t.exports=n},553:function(t,e,r){"use strict";r.r(e);var n=r(463),o=r(453),c=r(505),d=r(464),l=r(442),f=r(443),v={components:{AddFriendBtn:n.default,QrcodeVue:o.a,CurrentFriendList:d.default,FriendRequestedList:l.default,FriendRequestList:f.default,QrcodeStream:c.QrcodeStream},data:function(){return{ThemeColor:"light-blue darken-1",dialog:!1,loading:!1,requestFriendId:"",QRdialog:!1}},computed:{isTabVertical:function(){return!(window.innerWidth>500)},getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{onDecode:function(text){alert(text)}}},h=(r(506),r(46)),m=r(89),_=r.n(m),x=r(194),w=r(366),y=r(363),F=r(404),R=r(544),k=r(545),T=r(546),L=r(562),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.getEmailVerified?r("v-container",[r("PageTitle",[t._v("フレンド")]),t._v(" "),r("div",{staticClass:"FriendTabs"},[r("v-tabs",[r("v-tab",[r("span",{staticClass:"TabTexts"},[t._v("Friend List")])]),t._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[t._v("Friend Request List")])]),t._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[t._v("You Requested List")])]),t._v(" "),r("v-tab-item",[r("CurrentFriendList")],1),t._v(" "),r("v-tab-item",[r("FriendRequestList")],1),t._v(" "),r("v-tab-item",[r("FriendRequestedList")],1)],1)],1),t._v(" "),r("v-dialog",{model:{value:t.QRdialog,callback:function(e){t.QRdialog=e},expression:"QRdialog"}},[r("v-tabs",[r("v-tab",[r("span",{staticClass:"TabTexts"},[t._v("表示")])]),t._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[t._v("読み取り")])]),t._v(" "),r("v-tab-item",[r("v-card",[r("v-card-subtitle",[t._v("このQRコードを使用してお友達からリクエストを送信してもらってください。"),r("br"),t._v("(あらかじめログインしたブラウザで開く必要があります。)")]),t._v(" "),r("v-card-text",[r("qrcodeVue",{attrs:{value:"https://www.cabbageqq.tk/manabu-Allergies/friend?id="+t.getId}})],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",[r("v-card-subtitle",[t._v("QRコードを読み取ります。枠の中に入るように調整してください。")]),t._v(" "),r("v-card-text",[r("QrcodeStream",{on:{decode:t.onDecode}})],1)],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"AddFriendBtn"},[r("AddFriendBtn",{attrs:{ThemeColor:t.ThemeColor,userId:t.$route.query.id}}),r("v-btn",{attrs:{color:"green",large:""},on:{click:function(e){t.QRdialog=!0}}},[t._v("QRコード")]),t._v(" "),r("h3",[t._v("あなたのユーザーID:"+t._s(t.getId))])],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;_()(component,{PageTitle:r(401).default,FriendRequestList:r(443).default,FriendRequestedList:r(442).default}),_()(component,{VBtn:x.a,VCard:w.a,VCardSubtitle:y.b,VCardText:y.c,VContainer:F.a,VDialog:R.a,VTab:k.a,VTabItem:T.a,VTabs:L.a})}}]);