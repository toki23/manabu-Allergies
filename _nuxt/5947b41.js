(window.webpackJsonp=window.webpackJsonp||[]).push([[40,13],{414:function(n,t,e){var content=e(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(16).default)("a5a5ad00",content,!0,{sourceMap:!1})},430:function(n){n.exports=JSON.parse('{"general":[{"question":"エピペンとは何でしょう。","answer":["アナフィラキシーに対する緊急補助治療に使用する注射薬。","アナフィラキシーに対する緊急補助治療に使用する頓服薬。"]},{"question":"エピペンは、アレルギー反応が疑われ、息苦しいときにも打っても問題ない？","answer":["はい","いいえ"]},{"question":"エピペンは、アナフィラキシーでない人に投与すると生命に関わるか？","answer":["いいえ","はい"]},{"question":"エピペンは、特定のアレルギーを持ってる人に効果が出ない場合があるか？","answer":["いいえ","はい"]}],"milk":[{"question":"乳化剤に乳は含まれていますか？","answer":["はい","いいえ"]},{"question":"乳糖に乳は含まれていますか？","answer":["はい","いいえ"]},{"question":"食品アレルギー表示に「乳」がありますが、次のうち正しい読み方はどちらですか？","answer":["にゅう","ちち"]},{"question":"牛乳アレルギーではないが牛乳を飲むと下痢などをしてしまう病気で、次の打ち正しいのはどちら？","answer":["乳糖不耐症","乳糖不全症"]},{"question":"牛乳がアレルゲンの場合、加熱することで発症率は下がるか？","answer":["いいえ","はい"]},{"question":"牛乳を摂取しないようにする場合代替が容易なのはタンパク質ですが、逆に困難なのは次のうちどれですか？","answer":["カルシウム","ミネラル"]}],"eggs":[{"question":"卵黄と卵白、どちらのほうが、発症しやすいですか","answer":["卵白","卵黄"]},{"question":"かまぼこなどには卵が含まれている場合はありますか？","answer":["はい","いいえ"]},{"question":"鶏卵がアレルゲンの人が、ウズラの卵を食べても問題ないか？","answer":["いいえ","はい"]},{"question":"鶏卵がアレルゲンの人が鶏肉を食べても問題ないか？","answer":["はい","いいえ"]},{"question":"鶏卵アレルゲンの人が卵の殻を食べても問題ないか？","answer":["はい","いいえ"]}],"soba":[{"question":"そばアレルギーは、空気中にまったそば粉でも発症する恐れがありますか？","answer":["はい","いいえ"]},{"question":"そばアレルギーは、そばと一緒にゆでたうどんでも発症する恐れがありますか？","answer":["はい","いいえ"]},{"question":"そばアレルギーの人は十割そばを食べても問題ないか？","answer":["いいえ","はい"]}],"peanut":[{"question":"ピーナッツ(落花生)は、殻にも発症の恐れがありますか？","answer":["はい","いいえ"]},{"question":"ピーナッツ(落花生)は、加熱する前と後どちらが反応しやすいですか。","answer":["加熱後","加熱前"]},{"question":"ピーナッツがアレルゲンの人は、必ず他のナッツ類によっても同様の症状が発症するか？","answer":["いいえ","はい"]}],"wheat":[{"question":"小麦は食後運動すると症状が出ることがありますか？","answer":["はい","いいえ"]},{"question":"「小麦を含む」と書いてある醤油や味噌は、小麦アレルギーを持つ人にとって危険ですか？","answer":["いいえ","はい"]},{"question":"麦芽糖には小麦は含まれていますか？","answer":["はい","いいえ"]}],"ebikani":[{"question":"エビアレルギーを持つ人は、カニアレルギーを持つ可能性が高いですか？","answer":["はい","いいえ"]},{"question":"エビ・カニアレルギーは成人で多いですか？","answer":["はい","いいえ"]}]}')},431:function(n,t,e){"use strict";e(414)},432:function(n,t,e){var r=e(15)(!1);r.push([n.i,"canvas{width:500px;height:500px}",""]),n.exports=r},462:function(n,t,e){"use strict";e.r(t);e(30),e(44),e(28),e(78),e(72),e(49),e(464),e(19),e(53);var r=e(485),o=e(430),c=function(n,t,e,o,c){return void 0===n&&(n=""),void 0===t&&(t=24),void 0===e&&(e=300),void 0===o&&(o=!1),void 0===c&&(c=13684944),new r.d(n,{fontFamily:"Arial",fontSize:t,fill:c,wordWrap:!0,wordWrapWidth:e,breakWords:!0,align:o?"center":""})},h={mounted:function(){var n=this,t=new r.c;this.app=new r.a({width:500,height:500,antialiasing:!0,view:this.$refs.canvas,backgroundColor:5592405}),console.log("this.app",this.app),this.app.stage.addChild(this.currentScene),this.app.ticker.maxFPS=15,t.add("assets/bg.png").load((function(t,e){n.Begin()}))},data:function(){return{points:0,noClick:!1,currentScene:new r.b}},methods:{_shuffle:function(n){for(var t=n.slice(0),i=t.length-1;i>=0;i--){var e=Math.floor(Math.random()*(i+1)),r=[t[e],t[i]];t[i]=r[0],t[e]=r[1]}return t},_range:function(n){return Array.from({length:n},(function(n,t){return t}))},Begin:function(){this.app.stage.addChild(this.currentScene);var n=o.general.concat(o[this.$route.query.id||"peanuts"]);n=n.filter((function(i){return i})),this.questions=this._shuffle(n),this.now=-1,this.points=0,this.noClick=!1,this.Next()},Next:function(){this.now+=1,this.points>=2?(this.Win(),this.createRetry()):this.now>=this.questions.length?(this.Lose(),this.createRetry()):this.Question(this.questions[this.now])},Win:function(){var n=new c("勝利しました");n.position.set(50,200),this.currentScene.addChild(n)},Lose:function(){var n=new c("敗北しました");n.position.set(50,200),this.currentScene.addChild(n)},createRetry:function(){var n=this,t=new c("リトライ");t.position.set(50,400),t.interactive=!0,t.buttonMode=!0,t.on("pointertap",(function(t){n.flush(),n.Begin()})),this.currentScene.addChild(t)},Question:function(q){var n=this,t=new c(q.question);t.position.set(50,100),this.currentScene.addChild(t);var e,r=this._shuffle(this._range(q.answer.length)),o=r.map((function(i){return q.answer[i]})),h=r.indexOf(0);for(var l in o){var d=50*Number.parseInt(l)+300,a=o[l];(e=new c(a,18,400)).interactive=!0,e.buttonMode=!0,e.on("pointertap",function(t){return function(e){n.noClick||(n.noClick=!0,h==t?n.Correct():n.Wrong(),console.log(n.points),setTimeout((function(){n.noClick=!1,n.flush(),n.Next()}),1e3))}}(l)),e.position.set(50,d),this.currentScene.addChild(e)}},Correct:function(){var n=new c("正解");return n.position.set(400,400),this.points+=1,this.currentScene.addChild(n),n},Wrong:function(){var n=new c("不正解");return n.position.set(400,400),this.currentScene.addChild(n),n},flush:function(){this.currentScene.visible=!1,this.app.stage.removeChild(this.currentScene),this.currentScene=new r.b,this.app.stage.addChild(this.currentScene)}}},l=(e(431),e(40)),component=Object(l.a)(h,(function(){var n=this.$createElement;return(this._self._c||n)("canvas",{ref:"canvas",staticClass:"BattleCanvasDOM",attrs:{"scroll.prevent":""}})}),[],!1,null,null,null);t.default=component.exports},582:function(n,t,e){"use strict";e.r(t);var r={components:{BattleCanvas:e(462).default}},o=e(40),c=e(70),h=e.n(c),l=e(356),component=Object(o.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("v-app",{staticClass:"text-center",attrs:{id:"inspire"}},[t("BattleCanvas")],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{BattleCanvas:e(462).default}),h()(component,{VApp:l.a})}}]);