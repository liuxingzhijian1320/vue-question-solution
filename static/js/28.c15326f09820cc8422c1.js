webpackJsonp([28],{242:function(t,n,a){function e(t){a(471)}var o=a(3)(a(348),a(568),e,"data-v-36ba76d4",null);t.exports=o.exports},348:function(t,n,a){"use strict";function e(t){requestAnimationFrame(e),TWEEN.update(t)}Object.defineProperty(n,"__esModule",{value:!0});var o=null;n.default={name:"tewwnmany",data:function(){return{datatotal:0,dataamount:0,datawork:0,totalNum:{value:0},amountNum:{value:0},workNum:{value:0}}},mounted:function(){},methods:{add:function(){this.datatotal+=100,this.dataamount+=200,this.datawork+=300,this.action(this.datatotal,this.totalNum),this.action(this.dataamount,this.amountNum),this.action(this.datawork,this.workNum)},desc:function(){this.datatotal-=100,this.dataamount-=200,this.datawork-=300,this.action(this.datatotal,this.totalNum),this.action(this.dataamount,this.amountNum),this.action(this.datawork,this.workNum)},clear:function(){clearInterval(o),o=null,console.info("清除定时器",o)},setInter:function(){var t=this;o=setInterval(function(){t.add()},3e3,!0)},open:function(){null==o&&(this.setInter(),console.info("启动定时器",o))},action:function(t,n){var a=n.value;new TWEEN.Tween({tweeningNumber:a}).easing(TWEEN.Easing.Quadratic.Out).to({tweeningNumber:t}).onUpdate(function(){n.value=this.tweeningNumber.toFixed(0)}).start(),e()}}}},402:function(t,n,a){n=t.exports=a(69)(!0),n.push([t.i,".tweenmany[data-v-36ba76d4]{padding:.2rem .3rem;min-height:100vh}.btn-group[data-v-36ba76d4]{-ms-touch-action:none;touch-action:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}button[data-v-36ba76d4]{font-size:.5rem;height:1rem;width:3rem;border:none;margin-bottom:.3rem}article[data-v-36ba76d4]{font-size:.32rem;margin-top:2rem}","",{version:3,sources:["/Users/zhanghusheng/Desktop/vue-question-solution/src/views/tween/tween.many.vue"],names:[],mappings:"AACA,4BACE,oBAAuB,AACvB,gBAAkB,CACnB,AACD,4BACE,sBAAuB,AACnB,kBAAmB,AACvB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,mBAAoB,AAChB,cAAgB,CACrB,AACD,wBACE,gBAAkB,AAClB,YAAa,AACb,WAAY,AACZ,YAAa,AACb,mBAAsB,CACvB,AACD,yBACE,iBAAmB,AACnB,eAAiB,CAClB",file:"tween.many.vue",sourcesContent:["\n.tweenmany[data-v-36ba76d4] {\n  padding: 0.2rem 0.3rem;\n  min-height: 100vh;\n}\n.btn-group[data-v-36ba76d4] {\n  -ms-touch-action: none;\n      touch-action: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\nbutton[data-v-36ba76d4] {\n  font-size: 0.5rem;\n  height: 1rem;\n  width: 3rem;\n  border: none;\n  margin-bottom: 0.3rem;\n}\narticle[data-v-36ba76d4] {\n  font-size: 0.32rem;\n  margin-top: 2rem;\n}\n"],sourceRoot:""}])},471:function(t,n,a){var e=a(402);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(192)("26252646",e,!0)},568:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"tweenmany"},[t._v("\n  "+t._s(t.totalNum.value)+"张\n  "),a("br"),a("br"),a("br"),t._v("\n  "+t._s(t.amountNum.value)+"元\n  "),a("br"),a("br"),a("br"),t._v("\n  "+t._s(t.workNum.value)+"件\n  "),a("br"),a("br"),a("br"),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{on:{click:t.add}},[t._v("增加")]),t._v(" "),a("button",{on:{click:t.desc}},[t._v("减少")]),t._v(" "),a("button",{on:{click:t.clear}},[t._v("清除定时器")]),t._v(" "),a("button",{on:{click:t.open}},[t._v("启动定时器")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("article",[t._v("\n    1.这里使用的是应用类型来操作，便于公用同意action fn ，不然要写三个的action fn,"),a("br"),t._v("\n    2.datatotal,dataamount,datawork 这三个值是后台拿到的值，就是axios的拿到data，然后调用this.action即可\n\n  ")])}]}}});
//# sourceMappingURL=28.c15326f09820cc8422c1.js.map