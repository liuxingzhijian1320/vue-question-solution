webpackJsonp([3],{241:function(t,e,n){function i(t){n(485)}var o=n(3)(n(350),n(586),i,"data-v-411245c7",null);t.exports=o.exports},251:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},253:function(t,e,n){var i=n(254),o=i.Symbol;t.exports=o},254:function(t,e,n){var i=n(256),o="object"==typeof self&&self&&self.Object===Object&&self,r=i||o||Function("return this")();t.exports=r},255:function(t,e,n){function i(t){return null==t?void 0===t?s:a:l&&l in Object(t)?r(t):c(t)}var o=n(253),r=n(257),c=n(258),a="[object Null]",s="[object Undefined]",l=o?o.toStringTag:void 0;t.exports=i},256:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(35))},257:function(t,e,n){function i(t){var e=c.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[s]=n:delete t[s]),o}var o=n(253),r=Object.prototype,c=r.hasOwnProperty,a=r.toString,s=o?o.toStringTag:void 0;t.exports=i},258:function(t,e){function n(t){return o.call(t)}var i=Object.prototype,o=i.toString;t.exports=n},259:function(t,e,n){function i(t,e,n){function i(e){var n=C,i=x;return C=x=void 0,w=e,m=t.apply(i,n)}function h(t){return w=t,B=setTimeout(d,e),k?i(t):m}function u(t){var n=t-y,i=t-w,o=e-n;return H?l(o,b-i):o}function A(t){var n=t-y,i=t-w;return void 0===y||n>=e||n<0||H&&i>=b}function d(){var t=r();if(A(t))return f(t);B=setTimeout(d,u(t))}function f(t){return B=void 0,T&&C?i(t):(C=x=void 0,m)}function v(){void 0!==B&&clearTimeout(B),w=0,C=y=x=B=void 0}function g(){return void 0===B?m:f(r())}function p(){var t=r(),n=A(t);if(C=arguments,x=this,y=t,n){if(void 0===B)return h(y);if(H)return B=setTimeout(d,e),i(y)}return void 0===B&&(B=setTimeout(d,e)),m}var C,x,b,m,B,y,w=0,k=!1,H=!1,T=!0;if("function"!=typeof t)throw new TypeError(a);return e=c(e)||0,o(n)&&(k=!!n.leading,H="maxWait"in n,b=H?s(c(n.maxWait)||0,e):b,T="trailing"in n?!!n.trailing:T),p.cancel=v,p.flush=g,p}var o=n(251),r=n(262),c=n(264),a="Expected a function",s=Math.max,l=Math.min;t.exports=i},260:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},261:function(t,e,n){function i(t){return"symbol"==typeof t||r(t)&&o(t)==c}var o=n(255),r=n(260),c="[object Symbol]";t.exports=i},262:function(t,e,n){var i=n(254),o=function(){return i.Date.now()};t.exports=o},263:function(t,e,n){function i(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError(c);return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(t,e,{leading:i,maxWait:e,trailing:a})}var o=n(259),r=n(251),c="Expected a function";t.exports=i},264:function(t,e,n){function i(t){if("number"==typeof t)return t;if(r(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=l.test(t);return n||h.test(t)?u(t.slice(2),n?2:8):s.test(t)?c:+t}var o=n(251),r=n(261),c=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,h=/^0o[0-7]+$/i,u=parseInt;t.exports=i},350:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(263);e.default={name:"stickUp",data:function(){return{listHeight:[],isFixed:!1,throttleScroll:null,scrollTop:0,headerHeight:"",navHeight:""}},computed:{currentIndex:function(){console.info("scrollTop",this.scrollTop,"headerHeight",this.headerHeight,"navHeight",this.navHeight);for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],n=this.listHeight[t+1];if(this.scrollTop-this.headerHeight>=e&&this.scrollTop-this.headerHeight<n)return t;if($(window).height()+this.scrollTop+20>=$(document).height())return this.listHeight.length-2}return 0}},methods:{selectItem:function(t){console.info("index",t);return $("body,html").animate({scrollTop:this.listHeight[t]+this.headerHeight},200),!1},handleScroll:function(){this.headerHeight=$(this.$refs.header).outerHeight(),this.scrollTop=$(window).scrollTop(),this.navHeight=$(this.$refs.nav).outerHeight(),this.scrollTop>this.headerHeight?this.isFixed=!0:this.isFixed=!1},_calculateHeight:function(){var t=this.$refs.foodList,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){e+=t[n].clientHeight,this.listHeight.push(e)}console.info("每个东西的高度",this.listHeight,"页面总的高度",$(window).height(),$(document).height())}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("scroll",t.throttleScroll,!1),t._calculateHeight()}),this.throttleScroll=i(this.handleScroll,100)},destroyed:function(){window.removeEventListener("scroll",this.throttleScroll)}}},414:function(t,e,n){e=t.exports=n(69)(!0),e.push([t.i,".header[data-v-411245c7]{height:5rem;width:100%;background-color:red}.nav[data-v-411245c7]{display:-webkit-box;display:-ms-flexbox;display:flex;height:1rem;background-color:transparent;line-height:1rem;text-align:center;width:100%}.nav.isFixed[data-v-411245c7]{position:fixed;left:0;top:0;z-index:9999}.nav .item[data-v-411245c7]{-webkit-box-flex:1;-ms-flex:1;flex:1}.nav .item.current[data-v-411245c7]{background-color:#000;color:#fff;font-weight:900}.fakeNavHeight[data-v-411245c7]{height:1rem;width:100%}.content .tips[data-v-411245c7]{height:15rem;width:100%}.content .tips[data-v-411245c7]:first-child{background-color:red}.content .tips[data-v-411245c7]:nth-child(2){background-color:pink}.content .tips[data-v-411245c7]:nth-child(3){background-color:#ff0}.content .tips[data-v-411245c7]:last-child{background-color:blue;height:6rem}","",{version:3,sources:["/Users/zhanghusheng/Documents/git/vue-question-solution/src/views/stickUp/stickUp.vue"],names:[],mappings:"AACA,yBACE,YAAa,AACb,WAAY,AACZ,oBAAsB,CACvB,AACD,sBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,6BAA8B,AAC9B,iBAAkB,AAClB,kBAAmB,AACnB,UAAY,CACb,AACD,8BACI,eAAgB,AAChB,OAAQ,AACR,MAAO,AACP,YAAc,CACjB,AACD,4BACI,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACnB,AACD,oCACM,sBAAuB,AACvB,WAAY,AACZ,eAAiB,CACtB,AACD,gCACE,YAAa,AACb,UAAY,CACb,AACD,gCACE,aAAc,AACd,UAAY,CACb,AACD,4CACI,oBAAsB,CACzB,AACD,6CACI,qBAAuB,CAC1B,AACD,6CACI,qBAAyB,CAC5B,AACD,2CACI,sBAAuB,AACvB,WAAa,CAChB",file:"stickUp.vue",sourcesContent:["\n.header[data-v-411245c7] {\n  height: 5rem;\n  width: 100%;\n  background-color: red;\n}\n.nav[data-v-411245c7] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  background-color: transparent;\n  line-height: 1rem;\n  text-align: center;\n  width: 100%;\n}\n.nav.isFixed[data-v-411245c7] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    z-index: 9999;\n}\n.nav .item[data-v-411245c7] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.nav .item.current[data-v-411245c7] {\n      background-color: #000;\n      color: #fff;\n      font-weight: 900;\n}\n.fakeNavHeight[data-v-411245c7] {\n  height: 1rem;\n  width: 100%;\n}\n.content .tips[data-v-411245c7] {\n  height: 15rem;\n  width: 100%;\n}\n.content .tips[data-v-411245c7]:first-child {\n    background-color: red;\n}\n.content .tips[data-v-411245c7]:nth-child(2) {\n    background-color: pink;\n}\n.content .tips[data-v-411245c7]:nth-child(3) {\n    background-color: yellow;\n}\n.content .tips[data-v-411245c7]:last-child {\n    background-color: blue;\n    height: 6rem;\n}\n"],sourceRoot:""}])},485:function(t,e,n){var i=n(414);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(192)("dc6cc93a",i,!0)},586:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{ref:"header",staticClass:"header"},[t._v("高度250")]),t._v(" "),n("ul",{ref:"nav",staticClass:"nav",class:{isFixed:t.isFixed}},t._l(new Array(4),function(e,i){return n("li",{key:i,staticClass:"item",class:{current:t.currentIndex===i},on:{click:function(e){t.selectItem(i)}}},[t._v(t._s(i+1)+"，高度50")])})),t._v(" "),t.isFixed?n("div",{staticClass:"fakeNavHeight"}):t._e(),t._v(" "),n("ul",{staticClass:"content"},t._l(new Array(4),function(e,i){return n("li",{key:i,ref:"foodList",refInFor:!0,staticClass:"tips"},[t._v(t._s(i+1))])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.754206d9ecdd618443d4.js.map