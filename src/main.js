import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import store from './store';
// import './assets/style/waves.css'
import vueWaves from './directive/waves';// 水波纹指令


import mint from 'mint-ui';
import mintCss from 'src/assets/style/mint.ui.min.css';
// Vue.use(Mint)


// import './directive/waves.scss'
//------------
// import storeLocal from 'store'
// window.store = storeLocal;
//---------------
fastclick.attach(document.body) //解决移动端300ms的延迟的
Vue.use(vueWaves);


// import 'toastr'
// console.info(tosatr)
// import '../node_modules/toastr/build/toastr.min.css'
// window.tosatr = tosatr

//rem.js
import { rem } from 'assets/script/rem'; // rem
import { userAgent } from 'assets/script/userAgent'; // userAgent
rem();
userAgent();
//图片蓝记载
Vue.use(VueLazyLoad,{
	loading:require('assets/logo.png')
})

import axios from 'axios'
// Vue.prototype.axios = axios 组件调用this.axios.get(...)
// Vue.prototype.$ajax = axios  换个名字 组件调用this.$ajax.get(...)
window.axios = axios;  //组件中调用 axios.get(...)


//文字占位符
import VueOccupy from 'vue-occupy'
Vue.use(VueOccupy)

//多指触控
import Vue2Touch from 'vue2-touch'
Vue.use(Vue2Touch)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
