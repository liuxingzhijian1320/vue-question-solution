// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';


import modal from './modules/modal'; // modal 弹窗 模块
import com from './modules/com'; // 公共的操作

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modal,
    com
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});
