<template>
  <div id="app">
    <keep-alive exclude="question">
      <router-view></router-view>
    </keep-alive>
    <v-modal></v-modal>
    <v-alert v-show="showAlert"></v-alert>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

  import modal from 'components/modal/modal'
  import alert from 'components/alert/alert'
  export default {
    name: 'app',
    components: {
      'v-alert': alert,
      'v-modal': modal,
    },
    computed: {
      ...mapGetters([
        'showAlert',
      ]),
    },
    mounted(){
    }
  }
</script>

<style lang='scss'>
  @import './assets/style/reset.scss';
  @import './assets/style/mixin.scss';
  @import './assets/style/func.css';

  body {
    font-size: 0.28rem;
    &.full-body {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
      overflow: hidden !important;
      #footerFixed {
        position: absolute;
      }
    }
    &.stop-scroll {
      height: 100%;
      overflow: hidden;
    }
  }
</style>
