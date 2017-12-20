// import * as types from '../types'

/**
 * App通用配置
 */
const state = {
  alertStatus: false,
  data:null,
}

const mutations = {
  setAlertStaus(state, { status = false, data = null }) {
    state.alertStatus = status
    state.data = data
  },
}


const actions = {
  showAlert({ state, rootState, commit, dispatch, getters }, payload) {
    console.info(111,payload)
    commit('setAlertStaus', payload);
  },


}

const getters = {
  showAlert: state => state.alertStatus,
}


export default {
  state,
  actions,
  getters,
  mutations
}
