import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import store from './store';
import vueWaves from './directive/waves';// 水波纹指令

// import './directive/waves.scss'
//------------
// import storeLocal from 'store'
// window.store = storeLocal;
//---------------
fastclick.attach(document.body)
Vue.use(vueWaves);

//rem.js
import { rem } from 'assets/script/rem'; // rem
import { userAgent } from 'assets/script/userAgent'; // userAgent
rem();
userAgent();
//图片蓝记载
Vue.use(VueLazyLoad,{
	loading:require('assets/logo.png')
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
