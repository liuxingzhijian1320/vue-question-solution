<template>
  <div id="progress">

    <button @click="add">ADD</button>

    <dashboard :min="0" :max="goodsTotal" :lens="20" :value="goodsCountTotalForOrder"></dashboard>

  </div>
</template>
<script>
  import dashboard from 'src/components/dashboard/dashboard.vue';

  export default {
    name: "progress",
    data() {
      return {
        goodsTotal: 200, //总数量
        goodsCountTotalForOrder: 50, //订单数
      }
    },
    components: {
      dashboard,
    },

    methods: {
      add() {
        this.goodsTotal += 50;
        this.goodsCountTotalForOrder += 10;
        console.info('add')
      },
    },


  }
</script>
<style lang='scss'>
  #progress {
    height: 100vh;
    width: 100%;
    background-color: gray;
  }
</style>
