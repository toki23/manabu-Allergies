(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(e,t,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("56b15182",content,!0,{sourceMap:!1})},234:function(e,t,r){"use strict";var n={data:function(e){return{drawer:!1}},methods:{login:function(){console.log("Login")}}},o=(r(277),r(57)),c=r(86),l=r.n(c),m=r(349),d=r(353),f=r(350),h=r(235),v=r(162),x=r(351),w=r(354),V=r(352),k=r(186),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("Menu")],1),e._v(" "),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),r("v-toolbar-title",[e._v("\n      マナブアレルギー\n    ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",nuxt:""},on:{click:e.login}},[r("v-icon",[e._v("mdi-login-variant")])],1)],1),e._v(" "),r("v-main",[r("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{Menu:r(337).default}),l()(component,{VApp:m.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:h.a,VIcon:v.a,VMain:x.a,VNavigationDrawer:w.a,VSpacer:V.a,VToolbarTitle:k.a})},243:function(e,t,r){r(244),e.exports=r(245)},277:function(e,t,r){"use strict";r(221)},278:function(e,t,r){var n=r(13)(!1);n.push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),e.exports=n},337:function(e,t,r){"use strict";r.r(t);var n={name:"Menu",components:!0,data:function(){return{items:[{title:"トップ",to:"/"},{title:"ランキング",to:"/ranking"},{title:"戦闘",to:"/battle"},{title:"アカウント設定",to:"/account-setting"},{title:"マイページ",to:"/my-page"},{title:"ダイアログのテスト",to:"/dialog-test"}]}}},o=r(57),c=r(86),l=r.n(c),m=r(161),d=r(99),f=r(76),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:"",to:t.to,nuxt:""}},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VList:m.a,VListItem:d.a,VListItemContent:f.a,VListItemTitle:f.b})},338:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return l})),r.d(t,"getters",(function(){return m})),r.d(t,"mutations",(function(){return d})),r.d(t,"actions",(function(){return f}));var n=r(9),o=(r(62),r(18),r(11),r(134));r(334),r(339);0===o.a.apps.length&&o.a.initializeApp({apiKey:"AIzaSyBPBI1X80qznbcXFX5IM4JraiRPOLeb2MA",authDomain:"manabu-allergies.firebaseapp.com",projectId:"manabu-allergies",storageBucket:"manabu-allergies.appspot.com",messagingSenderId:"653982808749",appId:"1:653982808749:web:8c52b4786ce2acd5bce424",measurementId:"G-CHCRY1DZVK"});var c=o.a,l=function(){return{emailVerified:!1,id:"",email:"",name:"",photo:""}},m={emailVerified:function(e){return e.emailVerified},id:function(e){return e.id},email:function(e){return e.email},name:function(e){return e.name},photo:function(e){return e.photo}},d={set:function(e,t){var r,n,o,c,l;e.emailVerified=null!=(r=t.emailVerified)?r:e.emailVerified,e.id=null!=(n=t.id)?n:e.id,e.email=null!=(o=t.email)?o:e.email,e.name=null!=(c=t.name)?c:e.name,e.photo=null!=(l=t.photo)?l:e.photo}},f={authStateWithVerification:function(e){var t=this;return new Promise((function(r,n){t.getters["auth/emailVerified"]?r({emailVerified:t.getters["auth/emailVerified"],id:t.getters["auth/id"],email:t.getters["auth/email"],name:t.getters["auth/name"],photo:t.getters["auth/photo"]}):c.auth().onAuthStateChanged((function(t){t?(e.commit({type:"set",emailVerified:t.emailVerified,id:t.uid,email:t.email,name:t.displayName,photo:t.photoURL}),r(t)):(e.commit({type:"set",emailVerified:!1}),n())}))}))},createUserWithProfileVerification:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.auth().createUserWithEmailAndPassword(t.email,t.password);case 3:return n=r.sent,r.next=6,n.user.updateProfile({displayName:t.name,photoURL:t.photo});case 6:return r.next=8,n.user.sendEmailVerification();case 8:return e.commit({type:"set",emailVerified:n.user.emailVerified,id:n.user.uid,email:n.user.email,name:n.user.displayName,photo:n.user.photoURL}),r.abrupt("return",n);case 12:throw r.prev=12,r.t0=r.catch(0),new Error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},signInWithVerification:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o=c.auth().currentUser,r.getters["auth/emailVerified"]||!o){n.next=8;break}return n.next=5,o.sendEmailVerification();case 5:return n.abrupt("return",o);case 8:return n.next=10,c.auth().signInWithEmailAndPassword(t.email,t.password);case 10:return l=n.sent,e.commit({type:"set",emailVerified:l.user.emailVerified,id:l.user.uid,email:l.user.email,name:l.user.displayName,photo:l.user.photoURL}),n.abrupt("return",l);case 13:n.next=18;break;case 15:throw n.prev=15,n.t0=n.catch(0),new Error(n.t0);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))()},signOut:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.auth().signOut();case 3:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""}),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},updateProfile:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t.photo){n.next=10;break}return n.next=4,c.storage().ref().child(r.getters["auth/id"]+"/userPhoto").put(t.photo);case 4:return o=n.sent,n.next=7,o.ref.getDownloadURL();case 7:t.photo=n.sent,n.next=11;break;case 10:t.photo=r.getters["auth/photo"];case 11:return n.next=13,c.auth().currentUser.updateProfile({displayName:t.name,photoURL:t.photo});case 13:e.commit({type:"set",name:t.name,photo:t.photo}),n.next=19;break;case 16:throw n.prev=16,n.t0=n.catch(0),new Error(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()},updateEmailWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=c.auth().currentUser,r.next=4,c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 4:return o=r.sent,r.next=7,n.reauthenticateWithCredential(o);case 7:return r.next=9,n.updateEmail(t.email);case 9:e.commit({type:"set",email:t.email}),r.next=15;break;case 12:throw r.prev=12,r.t0=r.catch(0),new Error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},updatePasswordWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=c.auth().currentUser,e.next=4,c.auth.EmailAuthProvider.credential(r.email,t.confirmationPassword);case 4:return n=e.sent,e.next=7,r.reauthenticateWithCredential(n);case 7:return e.next=9,r.updatePassword(t.password);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},resetPassword:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.auth().sendPasswordResetEmail(t.email);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},deleteAccountWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=c.auth().currentUser,r.next=4,c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 4:return o=r.sent,r.next=7,n.reauthenticateWithCredential(o);case 7:return r.next=9,n.delete();case 9:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""}),r.next=15;break;case 12:throw r.prev=12,r.t0=r.catch(0),new Error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}}},[[243,27,7,28]]]);