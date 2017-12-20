<template>
  <div id="progress">

    <v-progress :value="progress"></v-progress>



    <dashboard :min="0" :max="goodsTotal" :lens="20" :value="goodsCountTotalForOrder"></dashboard>


  </div>
</template>
<script>
  import dashboard from 'src/components/dashboard/dashboard.vue';
  import progress from 'src/components/progress/progress';

  export default {
    name: "progress",
    data() {
      return {
        goodsTotal: 200, //总数量
        goodsCountTotalForOrder: 50, //订单数
        progress: 0
      }
    },
    components: {
      dashboard,
      'v-progress': progress
    },

    methods: {},
    mounted(){
      setTimeout(e => {
        this.progress = 50
      }, 0)
    }
  }
</script>
<style lang='scss'>
  #progress {
    height: 100vh;
    width: 100%;
    background-color: gray;
    padding-top:1rem;
  }
</style>
