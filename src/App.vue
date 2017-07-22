<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <modal></modal>
  </div>
</template>

<script>
  import modal from 'components/modal/modal'
  export default {
    name: 'app',
    components: {
      modal
    }
  }
</script>

<style lang='scss'>
  body {
    font-size: 0.28rem;
    &.full-body{
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
      #footerFixed{
        position: absolute;
      }
    }
  }
</style>
