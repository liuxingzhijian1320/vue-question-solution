import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'; //vuex
import setTitle from '../assets/script/settitle.js'; // 设置页面标题
import { getLogin } from '../assets/script/local.storage';
// console.info('保存在本地的信息',getLogin().name,getLogin().phone)
Vue.use(Router);
import { MessageBox } from 'mint-ui';

const Question = resolve => import('../views/Question');

const AndIosFixed = resolve => import('../views/AndIosFixed/AndIosFixed');

const StickyFooter = resolve => import('../views/StickyFooter/StickyFooter');

const StickyFooter2 = resolve => import('../views/StickyFooter/StickyFooter2');

const StickyFooterFlex = resolve => import('../views/StickyFooter/StickyFooter-flex');

const VuexModal = resolve => import('../views/vuex_modal/vuex.modal');

const vuexmodalstop = resolve => import('../views/vuex_modal/vuex-modal-stop');

const TweenSimple = resolve => import('../views/tween/tween.simple');

const TweenMany = resolve => import('../views/tween/tween.many');

const progress = resolve => import('../views/progress/progress');

const progresscircle = resolve => import('../views/progress/progress.circle');

const progressTest = resolve => import('../views/progress/test.progress');

const password = resolve => import('../views/password/password-1');

const cssEffect = resolve => import('../views/cssEffect/cssEffect');

const localstorage = resolve => import('../views/local.storage/local.storage');

const redpacket = resolve => import('../views/redpacket/redpacket');

const swiper1 = resolve => import('../views/swiper/swiper-1');

const swiper2 = resolve => import('../views/swiper/swiper.component');

const bullet = resolve => import('../views/bullet/bullet');

const bscrollboth = resolve => import('../views/BScroll/bscroll.both');

const bscrollbook = resolve => import('../views/BScroll/bscroll.book.vue');

const bscrolltop = resolve => import('../views/BScroll/bscroll.top');

const bscrollrefresh = resolve => import('../views/BScroll/bscroll.refresh');

const navigatoruserAgent = resolve => import('../views/navigator_userAgent/navigator.userAgent');

const selectSearch = resolve => import('../views/selectSearch/select.search');

const fadeInNav = resolve => import('../views/fadeIn.nav/fadeIn.nav');

const pullupimgbig = resolve => import('../views/pullup_img_big/pullup.img.big');

const toggle = resolve => import('../views/toggle/toggle');

const video = resolve => import('../views/video/video');

const star = resolve => import('../views/star/star');

const proxyTable = resolve => import('../views/proxyTable/proxyTable');

const login = resolve => import('../views/login/login');

const alerttoastr = resolve => import('../views/alert_toastr/alert_toastr');

const map = resolve => import('../views/map/map');

const map1 = resolve => import('../views/map/map_1');

const map2 = resolve => import('../views/map/map_2');

const loadmore = resolve => import('../views/loadmore/loadmore');

const loadmore2 = resolve => import('../views/loadmore/loadmore-2');

const occupy = resolve => import('../views/occupy/occupy');

const hammer = resolve => import('../views/hammer/hammer');

const navScroll = resolve => import('../views/navScroll/navScroll');

const fixtop = resolve => import('../views/fixTop/fixTop');
const fixtop2 = resolve => import('../views/fixTop-2/fixTop-2');

const changeRouterData = resolve => import('../views/changeRouterData/changeRouterData');

const filterActionsheet = resolve => import('../views/filter_actionsheet/filter_actionsheet');
const filterActionsheetvuex = resolve => import('../views/filter_actionsheet_vuex/filter_actionsheet_vuex');

import test from '../views/BScroll/test';

const router = new Router({
	mode: 'hash', // ['history', 'hash']
	linkActiveClass: 'active', // active class 名称
	scrollBehavior(to, from, savedPosition) {
		// 后退页面时, 保留滚动位置
		if (savedPosition) {
			return savedPosition;
		}
		return { x: 0, y: 0 };
	},

	//路由
	routes: [
		{
			path: '/solution',
			component: Question,
		},
		{
			path: '/solution/question',
			name: 'question',
			component: Question,
		},
		{
			path: '/solution/andiosfixed',
			name: 'andiosfixed',
			meta: {
				title: 'ios对fixed兼容',
				login: true,
			},
			component: AndIosFixed,
		},
		{
			path: '/solution/stickyfooter',
			name: 'stickyfooter',
			meta: {
				title: 'Sticy Footer - 1',
				login: true,
			},
			component: StickyFooter,
		},
		{
			path: '/solution/stickyfooter2',
			name: 'stickyfooter2',
			meta: {
				title: 'Sticy Footer - 2',
				login: true,
			},
			component: StickyFooter2,
		},
		{
			path: '/solution/stickyfooterflex',
			name: 'stickyfooterflex',
			meta: {
				title: 'Sticy Footer - 3',
				login: true,
			},
			component: StickyFooterFlex,
		},
		{
			path: '/solution/vuexmodal',
			name: 'vuexmodal',
			meta: {
				title: 'vuexmodal',
			},
			component: VuexModal,
		},
		{
			path: '/solution/vuexmodalstop',
			name: 'vuexmodalstop',
			meta: {
				title: 'vuex-modal-stop',
			},
			component: vuexmodalstop,
		},
		{
			path: '/solution/tweenSimple',
			name: 'tweenSimple',
			meta: {
				title: 'tween.js数字动画效果',
			},
			component: TweenSimple,
		},
		{
			path: '/solution/TweenMany',
			name: 'TweenMany',
			meta: {
				title: 'tween.js多个数字动画效果',
			},
			component: TweenMany,
		},
		{
			path: '/solution/progress',
			name: 'progress',
			meta: {
				title: 'progress css的进度条',
			},
			component: progress,
		},
		{
			path: '/solution/progresscircle',
			name: 'progresscircle',
			meta: {
				title: 'progress 圆形进度条',
			},
			component: progresscircle,
		},
		{
			path: '/solution/progressTest',
			name: 'progressTest',
			meta: {
				title: 'progress 测试',
			},
			component: progressTest,
		},
		{
			path: '/solution/password',
			name: 'password',
			meta: {
				title: 'password 手写密码框',
			},
			component: password,
		},
		{
			path: '/solution/cssEffect',
			name: 'cssEffect',
			meta: {
				title: 'css的效果',
			},
			component: cssEffect,
		},
		{
			path: '/solution/localstorage',
			name: 'localstorage',
			meta: {
				title: 'store expire 储存信息插件',
			},
			component: localstorage,
		},
		{
			path: '/solution/redpacket',
			name: 'redpacket',
			meta: {
				title: '文字上下滚共轮播,短信倒计时',
			},
			component: redpacket,
		},
		{
			path: '/solution/swiper1',
			name: 'swiper1',
			meta: {
				title: 'swiper-1效果',
			},
			component: swiper1,
		},
		{
			path: '/solution/swiper2',
			name: 'swiper2',
			meta: {
				title: '轮播图（组件）',
			},
			component: swiper2,
		},
		{
			path: '/solution/bullet',
			name: 'bullet',
			meta: {
				title: 'bullet 弹幕',
			},
			component: bullet,
		},
		{
			path: '/solution/bscrollboth',
			name: 'bscrollboth',
			meta: {
				title: 'bscroll 俩边滚动',
			},
			component: bscrollboth,
		},
		{
			path: '/solution/bscrollbook',
			name: 'bscrollbook',
			meta: {
				title: 'bscroll 电话本',
			},
			component: bscrollbook,
		},
		{
			path: '/solution/bscrolltop',
			name: 'bscrolltop',
			meta: {
				title: 'bscroll 上下滚动',
			},
			component: bscrolltop,
		},
		{
			path: '/solution/bscrollrefresh',
			name: 'bscrollrefresh',
			meta: {
				title: '上拉刷新下拉加载',
			},
			component: bscrollrefresh,
		},
		{
			path: '/solution/navigatoruserAgent',
			name: 'navigatoruserAgent',
			meta: {
				title: '浏览器版本',
			},
			component: navigatoruserAgent,
		},
		{
			path: '/solution/test',
			name: 'test',
			meta: {
				title: 'test test',
			},
			component: test,
		},
		{
			path: '/solution/selectSearch',
			name: 'selectSearch',
			meta: {
				title: '即实搜索',
			},
			component: selectSearch,
		},
		{
			path: '/solution/fadeInNav',
			name: 'fadeInNav',
			meta: {
				title: '渐变的nav',
			},
			component: fadeInNav,
		},
		{
			path: '/solution/pullupimgbig',
			name: 'pullupimgbig',
			meta: {
				title: '下拉图片变大',
			},
			component: pullupimgbig,
		},
		{
			path: '/solution/toggle',
			name: 'toggle',
			meta: {
				title: '上下收缩',
			},
			component: toggle,
		},
		{
			path: '/solution/video',
			name: 'video',
			meta: {
				title: '视频组件',
			},
			component: video,
		},
		{
			path: '/solution/star',
			name: 'star',
			meta: {
				title: '五星评价',
			},
			component: star,
		},
		{
			path: '/solution/proxyTable',
			name: 'proxyTable',
			meta: {
				title: '反向代理',
			},
			component: proxyTable,
		},
		{
			path: '/solution/login',
			name: 'login',
			meta: {
				title: '登录页面',
			},
			component: login,
		},
		{
			path: '/solution/alerttoastr',
			name: 'alerttoastr',
			meta: {
				title: '小组件',
			},
			component: alerttoastr,
		},
		{
			path: '/solution/map',
			name: 'map',
			meta: {
				title: '高德地图',
			},
			component: map,
		},
		{
			path: '/solution/map1',
			name: 'map1',
			meta: {
				title: '高德地图',
			},
			component: map1,
		},
		{
			path: '/solution/map2',
			name: 'map2',
			meta: {
				title: '高德地图',
			},
			component: map2,
		},
		{
			path: '/solution/loadmore',
			name: 'loadmore',
			meta: {
				title: '加载更多-点击',
			},
			component: loadmore,
		},
		{
			path: '/solution/loadmore2',
			name: 'loadmore2',
			meta: {
				title: '加载更多-滑动',
			},
			component: loadmore2,
		},
		{
			path: '/solution/occupy',
			name: 'occupy',
			meta: {
				title: '文字占位符',
			},
			component: occupy,
		},
		{
			path: '/solution/hammer',
			name: 'hammer',
			meta: {
				title: '多指触控',
			},
			component: hammer,
		},
		{
			path: '/solution/navScroll',
			name: 'navScroll',
			meta: {
				title: '联动的nav',
			},
			component: navScroll,
		},
		{
			path: '/solution/fixtop',
			name: 'fixtop',
			meta: {
				title: '顶部固定',
			},
			component: fixtop,
		},
		{
			path: '/solution/fixtop2',
			name: 'fixtop2',
			meta: {
				title: '顶部固定2',
			},
			component: fixtop2,
		},
		{
			path: '/solution/changeRouterData',
			name: 'changeRouterData',
			meta: {
				title: '动态更改的router-data',
			},
			component: changeRouterData,
		},
		{
			path: '/solution/filterActionsheet',
			name: 'filterActionsheet',
			meta: {
				title: 'actionsheet过滤',
			},
			component: filterActionsheet,
		},
		{
			path: '/solution/filterActionsheetvuex',
			name: 'filterActionsheetvuex',
			meta: {
				title: 'actionsheet过滤-vuex版本',
			},
			component: filterActionsheetvuex,
		},
		{
			path: '*',
			redirect: {
				name: 'question',
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	// console.info(22, window.location.href)
	//console.info(to,from,next)
	// 对路由变化作出响应...
	// console.log(router,to)
	// console.log(router,to.query, from)
	// console.log(to,$.param( to.query ),window.location.href)

	//全局拦截器的
	// console.info(to)
	// next()
	if (to.meta.login) {
		// 判断该路由是否需要登录权限
		if (getLogin().name && getLogin().phone) {
			// 通过store获取当前的token是否存在
			next();
		} else {
			MessageBox.alert('未登录，请先登录');
			next({
				path: '/solution/login',
				query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
			});
		}
	} else {
		next();
	}

	addHtmlBodyClass(from, to);

	// html加class ==>给每个组件添加一个className ，min-height：100vh；有些手机是不兼容
	//使用方法：html-路由的名称 组成的一个className：height:100%;width:100%; 全屏充满
	//这个className的查看方法 控制台 Element 即可
	function addHtmlBodyClass(from, to) {
		const fromName = from.name || '';
		const toName = to.name || '';
		if (fromName) {
			document.documentElement.classList.remove(`html-${fromName}`);
		}
		document.documentElement.classList.add(`html-${toName}`);
	}

	// next();
});

// 路由变化, 关闭弹窗
router.afterEach(function(to) {
	if (to.meta && to.meta.title) {
		//console.info(to.meta.title)
		setTitle(to.meta.title);
	}
	store.commit('closeModal');
});

export default router;
