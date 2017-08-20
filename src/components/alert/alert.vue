<template>
  <transition name="alert">
    <div class="alert-mask">
      <div class="alert-wrapper">
        <div class="alert-container">
          <div class="title">提示信息</div>
          <div class="text">{{data}}</div>
          <div class="btn" @click="close">确定</div>
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
      status: state => state.com.showAlert,
      data: state => state.com.data,
    }),
    methods:{
      close(){
        this.$store.dispatch('showAlert', {
          status: false,
        });
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
    background-color: rgba(0, 0, 0, .4);
    display: table;
    transition: opacity .3s ease;
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

  .title {
    text-align: center;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 0.32rem;
    font-weight: 700;
    color: #333;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  .text {
    color: #999;
    line-height: 0.5rem;
    margin: 0.2rem auto;
    flex: 1;
    font-size:0.34rem;
  }

  .btn {
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    color: #26a2ff;
    flex: 1;
    position: relative;
    border-top:1px solid #dfdfdf;
    /*&:before {*/
      /*content: '';*/
      /*width: 100%;*/
      /*height: 1px;*/
      /*display: inline-block;*/
      /*!*transform: scaleY(0.5);*!*/
      /*background-color: #dfdfdf;*/
      /*top: 0;*/
      /*left: 0;*/
    /*}*/
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
