webpackJsonp([51],{199:function(t,e,i){function o(t){i(465)}var n=i(3)(i(306),i(567),o,"data-v-1d4ce9f6",null);t.exports=n.exports},306:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(70),n=i.n(o),l=i(44),r=i.n(l);e.default={name:"test",data:function(){return{currentIndex:0,listenScroll:!0,listHeight:[],scrollY:0,probeType:3,data:[{id:1,title:"宴会",list:[{title:"舞台truss架子",subtitle:"坚固安全 质地优质"},{title:"背景架",subtitle:"专业调配 质量保证"},{title:"浪漫星空",subtitle:"营造温馨浪漫感"},{title:"欧式吊幔",subtitle:"低调奢华 高端品质"},{title:"桁架",subtitle:"背景支架 坚实牢固"},{title:"精美珠光地毯",subtitle:"珠光闪耀 高端时尚"},{title:"梦幻水晶灯",subtitle:"奢华璀璨 高贵典雅"},{title:"华丽玫瑰花",subtitle:"精致浪漫 时尚优雅"},{title:"精美藤蔓",subtitle:"线条优美 浪漫情调"},{title:"主题背景板",subtitle:"高贵圣洁 华丽梦幻"},{title:"梦幻软光灯带",subtitle:"光芒璀璨 增添氛围"},{title:"欧式雕花柱",subtitle:"雕刻精细 增添立体感"},{title:"梦幻天使",subtitle:"人间精灵 守护爱情"},{title:"梦幻蜡烛",subtitle:"温馨烛光 灵动火苗"},{title:"欧式罗马花盆",subtitle:"精致浪漫 时尚优雅"},{title:"欧式罗马柱",subtitle:"尽显欧式奢华与典雅"},{title:"欧式唯美花艺",subtitle:"梦幻色调 唯美大气"}]},{id:2,title:"T台",list:[{title:"幸福之路",subtitle:"唯美浪漫 时尚大气"},{title:"台阶装置",subtitle:"唯美浪漫 时尚大气"},{title:"时尚小舞台",subtitle:"精致浪漫 凸显主题"},{title:"精美珠光地毯",subtitle:"珠光闪耀 高端大气"},{title:"梦幻水晶灯",subtitle:"奢华璀璨 高贵典雅"},{title:"欧式罗马柱",subtitle:"尽显欧式奢华与典雅"},{title:"欧式罗马花盆",subtitle:"高雅奢华 彰显品味"},{title:"梦幻蜡烛",subtitle:"温馨烛光 灵动火苗"},{title:"梦幻天使",subtitle:"人间精灵 守护爱情"},{title:"欧式唯美花艺",subtitle:"梦幻色调 唯美大气"},{title:"欧式浪漫花球",subtitle:"色彩搭配 增添氛围"}]},{id:3,title:"餐桌",list:[{title:"主题桌布",subtitle:"高贵色调 舒适柔软"},{title:"欧式吊幔桌围",subtitle:"低调奢华 高端品质"},{title:"欧式竹节椅",subtitle:"奢华享受 高贵低调"},{title:"欧式椅背纱",subtitle:"唯美梦幻 轻盈飘逸"},{title:"欧式主桌花",subtitle:"唯美大气 高贵华丽"},{title:"梦幻蜡烛",subtitle:"温馨时尚 精致梦幻"},{title:"欧式罗马柱",subtitle:"尽显欧式奢华与典雅"},{title:"金色欧式烛台",subtitle:"高贵奢华 彰显品味"},{title:"欧式客桌花",subtitle:"优雅别致 精美独特"},{title:"欧式珠链",subtitle:"高雅奢华 彰显品味"},{title:"精美椅背蝴蝶结",subtitle:"小巧精致 凸显主题"},{title:"浪漫花瓣",subtitle:"营造气氛 增加层次"},{title:"主题桌卡",subtitle:"主题风格 精美细节"},{title:"主题席卡",subtitle:"主题风格 精美细节"}]},{id:4,title:"迎宾",list:[{title:"梦幻天使",subtitle:"人间精灵 守护爱情"},{title:"梦幻蜡烛",subtitle:"温馨时尚 精致梦幻"},{title:"梦幻云朵棉",subtitle:"营造梦幻视觉感"},{title:"梦幻天使",subtitle:"人间精灵 守护爱情"},{title:"梦幻蜡烛",subtitle:"温馨时尚 精致梦幻"},{title:"梦幻云朵棉",subtitle:"营造梦幻视觉感"}]}]}},mounted:function(){this._calculateHeight()},methods:{_calculateHeight:function(){this.listHeight=[];var t=this.$refs.foodlistRef,e=0;this.listHeight.push(e);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listHeight.push(e)}},selectMenu:function(t){console.info(t);var e=this.$refs.foodlistRef,i=e[t];this.$refs.foodsWrapper.scrollToElement(i,500)},scroll:function(t){this.scrollY=t.y}},watch:{scrollY:function(t){var e=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var i=0;i<e.length-1;i++){var o=e[i],n=e[i+1];if(-t>=o&&-t<n)return void(this.currentIndex=i)}this.currentIndex=e.length-2}},components:{Scroll:n.a,Swiper:r.a}}},394:function(t,e,i){e=t.exports=i(69)(!0),e.push([t.i,".header[data-v-1d4ce9f6]{width:100%;height:3rem;margin-bottom:.5rem}.meun-wrapper[data-v-1d4ce9f6]{width:100%;border-bottom:1px solid #dfdfdf;background-color:green;color:#fff}.meun-wrapper .meun-list[data-v-1d4ce9f6]{width:100%;-ms-flex-align:center;-ms-flex-pack:center}.meun-wrapper .menu-item[data-v-1d4ce9f6],.meun-wrapper .meun-list[data-v-1d4ce9f6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.meun-wrapper .menu-item[data-v-1d4ce9f6]{-webkit-box-flex:1;-ms-flex:1;flex:1;height:1rem;-ms-flex-align:center;-ms-flex-pack:center}.meun-wrapper .menu-item.current[data-v-1d4ce9f6]{color:#ff5a5f;background:#fff}.scroll-div[data-v-1d4ce9f6]{position:absolute;top:4.5rem;bottom:0;left:0;width:100%;overflow:hidden}.goods-wrapper[data-v-1d4ce9f6]{height:100%;background-color:#222}.goods-wrapper .title[data-v-1d4ce9f6]{height:.5rem;width:100%;background:#f6f6f6;border-left:3px solid #dfdfdf;padding-left:.3rem;line-height:.5rem;color:#999;font-size:.24rem}.goods-wrapper .food-item[data-v-1d4ce9f6]{display:-webkit-box;display:-ms-flexbox;display:flex;height:1.6rem;width:100%;padding-left:.3rem}.goods-wrapper .food-item .food-item-logo[data-v-1d4ce9f6]{width:20%;padding-top:.3rem}.goods-wrapper .food-item .food-item-logo .food-item-logo-border[data-v-1d4ce9f6]{width:1rem;height:1rem;border-radius:50%;background-color:#05cd76}.goods-wrapper .food-item .food-item-info[data-v-1d4ce9f6]{width:55%;padding-top:.2rem}.goods-wrapper .food-item .food-item-info .height[data-v-1d4ce9f6]{height:.32rem}.goods-wrapper .food-item .food-item-info .food-item-info-title[data-v-1d4ce9f6]{padding-top:.05rem;color:#fff;margin-bottom:.1rem;font-size:.26rem}.goods-wrapper .food-item .food-item-info .food-item-info-subtitle[data-v-1d4ce9f6]{color:#999;font-size:.2rem;margin-bottom:.05rem}.goods-wrapper .food-item .food-item-info .food-item-info-spec[data-v-1d4ce9f6]{color:#666;font-size:.22rem}","",{version:3,sources:["/Users/zhanghusheng/Documents/git/vue-question-solution/src/views/BScroll/bscroll.top.vue"],names:[],mappings:"AACA,yBACE,WAAY,AACZ,YAAa,AACb,mBAAsB,CACvB,AACD,+BACE,WAAY,AACZ,gCAAiC,AACjC,uBAAwB,AACxB,UAAe,CAChB,AACD,0CAII,WAAY,AAER,sBAAuB,AAGvB,oBAAsB,CAE7B,AACD,oFAXI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AAEd,yBAA0B,AAElB,mBAAoB,AAC5B,wBAAyB,AAEjB,sBAAwB,CAgBnC,AAdD,0CACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,YAAa,AAKT,sBAAuB,AAGvB,oBAAsB,CAE7B,AACD,kDACM,cAAe,AACf,eAAiB,CACtB,AACD,6BACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,eAAiB,CAClB,AACD,gCACE,YAAa,AACb,qBAAuB,CACxB,AACD,uCACI,aAAe,AACf,WAAY,AACZ,mBAAoB,AACpB,8BAA+B,AAC/B,mBAAqB,AACrB,kBAAoB,AACpB,WAAY,AACZ,gBAAmB,CACtB,AACD,2CACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,WAAY,AACZ,kBAAqB,CACxB,AACD,2DACM,UAAW,AACX,iBAAqB,CAC1B,AACD,kFACQ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,wBAA0B,CACjC,AACD,2DACM,UAAW,AACX,iBAAqB,CAC1B,AACD,mEACQ,aAAgB,CACvB,AACD,iFACQ,mBAAqB,AACrB,WAAY,AACZ,oBAAsB,AACtB,gBAAmB,CAC1B,AACD,oFACQ,WAAY,AACZ,gBAAkB,AAClB,oBAAuB,CAC9B,AACD,gFACQ,WAAe,AACf,gBAAmB,CAC1B",file:"bscroll.top.vue",sourcesContent:["\n.header[data-v-1d4ce9f6] {\n  width: 100%;\n  height: 3rem;\n  margin-bottom: 0.5rem;\n}\n.meun-wrapper[data-v-1d4ce9f6] {\n  width: 100%;\n  border-bottom: 1px solid #dfdfdf;\n  background-color: green;\n  color: #ffffff;\n}\n.meun-wrapper .meun-list[data-v-1d4ce9f6] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.meun-wrapper .menu-item[data-v-1d4ce9f6] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 1rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.meun-wrapper .menu-item.current[data-v-1d4ce9f6] {\n      color: #ff5a5f;\n      background: #fff;\n}\n.scroll-div[data-v-1d4ce9f6] {\n  position: absolute;\n  top: 4.5rem;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n}\n.goods-wrapper[data-v-1d4ce9f6] {\n  height: 100%;\n  background-color: #222;\n}\n.goods-wrapper .title[data-v-1d4ce9f6] {\n    height: 0.5rem;\n    width: 100%;\n    background: #f6f6f6;\n    border-left: 3px solid #dfdfdf;\n    padding-left: 0.3rem;\n    line-height: 0.5rem;\n    color: #999;\n    font-size: 0.24rem;\n}\n.goods-wrapper .food-item[data-v-1d4ce9f6] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 1.6rem;\n    width: 100%;\n    padding-left: 0.3rem;\n}\n.goods-wrapper .food-item .food-item-logo[data-v-1d4ce9f6] {\n      width: 20%;\n      padding-top: 0.30rem;\n}\n.goods-wrapper .food-item .food-item-logo .food-item-logo-border[data-v-1d4ce9f6] {\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background-color: #05cd76;\n}\n.goods-wrapper .food-item .food-item-info[data-v-1d4ce9f6] {\n      width: 55%;\n      padding-top: 0.20rem;\n}\n.goods-wrapper .food-item .food-item-info .height[data-v-1d4ce9f6] {\n        height: 0.32rem;\n}\n.goods-wrapper .food-item .food-item-info .food-item-info-title[data-v-1d4ce9f6] {\n        padding-top: 0.05rem;\n        color: #fff;\n        margin-bottom: 0.1rem;\n        font-size: 0.26rem;\n}\n.goods-wrapper .food-item .food-item-info .food-item-info-subtitle[data-v-1d4ce9f6] {\n        color: #999;\n        font-size: 0.2rem;\n        margin-bottom: 0.05rem;\n}\n.goods-wrapper .food-item .food-item-info .food-item-info-spec[data-v-1d4ce9f6] {\n        color: #666666;\n        font-size: 0.22rem;\n}\n"],sourceRoot:""}])},465:function(t,e,i){var o=i(394);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(192)("d76a5caa",o,!0)},567:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"views-wrapper"},[i("header",{ref:"headerWrapper",staticClass:"header"},[i("swiper")],1),t._v(" "),i("div",{ref:"meunWrapper",staticClass:"meun-wrapper"},[i("ul",{staticClass:"meun-list"},t._l(t.data,function(e,o){return 0!=e.list.length?i("li",{staticClass:"menu-item",class:{current:t.currentIndex===o},on:{click:function(e){t.selectMenu(o)}}},[t._v("\n        "+t._s(e.title)+"\n\n\n      ")]):t._e()}))]),t._v(" "),i("div",{staticClass:"scroll-div"},[i("scroll",{ref:"foodsWrapper",staticClass:"goods-wrapper",attrs:{data:t.data,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(e,o){return 0!=e.list.length?i("li",{ref:"foodlistRef",refInFor:!0,staticClass:"section-content"},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.list,function(e){return i("li",{staticClass:"food-item"},[i("div",{staticClass:"food-item-logo"},[i("div",{staticClass:"food-item-logo-border"})]),t._v(" "),i("div",{staticClass:"food-item-info"},[i("div",{staticClass:"food-item-info-title height"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"food-item-info-subtitle height"},[t._v(t._s(e.subtitle))])])])}))]):t._e()}))])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=51.f93024336b4b66c5450e.js.map