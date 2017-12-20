<template>
  <transition name="alert">
    <div class="alert-mask">
      <div class="alert-wrapper">
        <div class="alert-container">
          <div class="text">{{data}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: mapState({
      status: state => state.com.showToastr,
      data: state => state.com.data,
    }),
    methods:{
      close(){

      }
    }
  }

</script>
<style lang="scss" scoped>

  .alert-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: table;
    transition: opacity .1s ease;
  }

  .alert-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .alert-container {
    width: 90%;
    /*height: 7rem;*/
    margin: 0 auto;
    background-color: #fff;
    border-radius: 2px;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .text {
    color: #999;
    line-height: 0.5rem;
    margin: 0.2rem auto;
    flex: 1;
    font-size:0.34rem;
  }

  .alert-enter {
    opacity: 0;
  }

  .alert-leave-active {
    opacity: 0;
  }

  .alert-enter .alert-container,
  .alert-leave-active .alert-container {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

</style>
