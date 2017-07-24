import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import setTitle from '../assets/script/settitle.js'; // 设置页面标题

Vue.use(Router)

const Question = resolve =>
  import ('../views/Question');

const AndIosFixed = resolve =>
  import ('../views/AndIosFixed/AndIosFixed');

const StickyFooter = resolve =>
  import ('../views/StickyFooter/StickyFooter');

const StickyFooter2 = resolve =>
  import ('../views/StickyFooter/StickyFooter2');

const StickyFooterFlex = resolve =>
  import ('../views/StickyFooter/StickyFooter-flex');

const VuexModal = resolve =>
  import ('../views/vuex_modal/vuex.modal');

const TweenSimple = resolve =>
  import ('../views/tween/tween.simple');

const TweenMany = resolve =>
  import ('../views/tween/tween.many');

const progress = resolve =>
  import ('../views/progress/progress');

const password = resolve =>
  import ('../views/password/password-1');

const effect = resolve =>
  import ('../views/effect/effect');

const localstorage = resolve =>
  import ('../views/local.storage/local.storage');

const redpacket = resolve =>
  import ('../views/redpacket/redpacket');

const swiper1 = resolve =>
  import ('../views/swiper/swiper-1');

const bullet = resolve =>
  import ('../views/bullet/bullet');

const bscrollboth = resolve =>
  import ('../views/BScroll/bscroll.both');

const bscrollbook = resolve =>
  import ('../views/BScroll/bscroll.book.vue');

const bscrolltop = resolve =>
  import ('../views/BScroll/bscroll.top');

const bscrollrefresh = resolve =>
  import ('../views/BScroll/bscroll.refresh');

const navigatoruserAgent = resolve =>
  import ('../views/navigator_userAgent/navigator.userAgent');

const selectSearch = resolve =>
  import ('../views/selectSearch/select.search');

const fadeInNav = resolve =>
  import ('../views/fadeIn.nav/fadeIn.nav');



import test from '../views/BScroll/test'



const router = new Router({

  mode: 'history', // ['history', 'hash']
  linkActiveClass: 'active', // active class 名称
  base: '',
  scrollBehavior(to, from, savedPosition) { // 后退页面时, 保留滚动位置
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },

  //路由
	routes: [
    {
      path: '/',
      component: Question,
    },{
      path: '/question',
      name: 'question',
      component: Question,
    },{
      path: '/andiosfixed',
      name: 'andiosfixed',
      meta: {
        title: 'ios对fixed兼容',
      },
      component: AndIosFixed
    }, {
      path: '/stickyfooter',
      name: 'stickyfooter',
      meta: {
        title: 'Sticy Footer - 1',
      },
      component: StickyFooter
    }, {
      path: '/stickyfooter2',
      name: 'stickyfooter2',
      meta: {
        title: 'Sticy Footer - 2',
      },
      component: StickyFooter2
    }, {
      path: '/stickyfooterflex',
      name: 'stickyfooterflex',
      meta: {
        title: 'Sticy Footer - 3',
      },
      component: StickyFooterFlex
    }, {
      path: '/vuexmodal',
      name: 'vuexmodal',
      meta: {
        title: 'vuexmodal',
      },
      component: VuexModal
    },{
      path: '/tweenSimple',
      name: 'tweenSimple',
      meta: {
        title: 'tween.js数字动画效果',
      },
      component: TweenSimple
    },{
      path: '/TweenMany',
      name: 'TweenMany',
      meta: {
        title: 'tween.js多个数字动画效果',
      },
      component: TweenMany
    },{
      path: '/progress',
      name: 'progress',
      meta: {
        title: 'progress css的进度条',
      },
      component: progress
    },{
      path: '/password',
      name: 'password',
      meta: {
        title: 'password 手写密码框',
      },
      component: password
    },{
      path: '/effect',
      name: 'effect',
      meta: {
        title: 'css的奇妙效果',
      },
      component: effect
    },{
      path: '/localstorage',
      name: 'localstorage',
      meta: {
        title: 'store expire 储存信息插件',
      },
      component: localstorage
    },{
      path: '/redpacket',
      name: 'redpacket',
      meta: {
        title: '文字上下滚共轮播,短信倒计时',
      },
      component: redpacket,
    },{
      path: '/swiper1',
      name: 'swiper1',
      meta: {
        title: 'swiper-1效果',
      },
      component: swiper1,
    },{
      path: '/bullet',
      name: 'bullet',
      meta: {
        title: 'bullet 弹幕',
      },
      component: bullet,
    },{
      path: '/bscrollboth',
      name: 'bscrollboth',
      meta: {
        title: 'bscroll 俩边滚动',
      },
      component: bscrollboth,
    },{
      path: '/bscrollbook',
      name: 'bscrollbook',
      meta: {
        title: 'bscroll 电话本',
      },
      component: bscrollbook,
    },{
      path: '/bscrolltop',
      name: 'bscrolltop',
      meta: {
        title: 'bscroll 上下滚动',
      },
      component: bscrolltop,
    },{
      path: '/bscrollrefresh',
      name: 'bscrollrefresh',
      meta: {
        title: '上拉刷新下拉加载',
      },
      component: bscrollrefresh,
    },{
      path: '/navigatoruserAgent',
      name: 'navigatoruserAgent',
      meta: {
        title: '浏览器版本',
      },
      component: navigatoruserAgent,
    },{
      path: '/test',
      name: 'test',
      meta: {
        title: 'test test',
      },
      component: test,
    },{
      path: '/selectSearch',
      name: 'selectSearch',
      meta: {
        title: '即实搜索',
      },
      component: selectSearch,
    },{
      path: '/fadeInNav',
      name: 'fadeInNav',
      meta: {
        title: '渐变的nav',
      },
      component: fadeInNav,
    },{
	    path:'*',
      redirect: {
        name: 'question'
      }
    }
  ],



});

router.beforeEach((to, from, next) => {
    //console.info(to,from,next)

  next();
})

// 路由变化, 关闭弹窗
router.afterEach(function (to) {
  if (to.meta && to.meta.title) {
    //console.info(to.meta.title)
    setTitle(to.meta.title);
  }
  store.commit('closeModal');

})



export default router;
