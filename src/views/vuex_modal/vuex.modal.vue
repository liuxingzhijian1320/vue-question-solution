<template>
  <div id="vuex-modal">
    <button @click="openVolume">倒计时</button>
    <button @click="warningHandler">警告</button>
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

  export default {
    data(){
      return {
        propsData:'我是传递的来的值'
      }
    },
    methods: {
        openVolume(){
          this.$store.dispatch('toggleModal', {
            name: 'countdown',
            status: true
          });
      },
      warningHandler(){
          this.$store.dispatch('toggleModal', {
            name: 'warning',
            status: true,
            data:{send:this.propsData},
            callback:function(){         //可选
              alert('我是回调函数');
            }
          });
      },
    }
  }
</script>
<style lang='scss'>
  #vuex-modal {
    min-height: 100vh;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
    button {
      width:50%;
      margin-bottom: 0.2rem;
      font-size:0.36rem;
    }
  }


</style>
