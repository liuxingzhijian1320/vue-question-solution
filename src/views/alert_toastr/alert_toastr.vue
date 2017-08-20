<template>
  <div>
    <button class="alert info" @click="alert()">alert的弹出层</button>
    {{count}}
    <button class="toastr info" @click="toastr()">toastr的提示信息</button>
  </div>
</template>
<script>
  export default {
    name:'alert_toastr',
    data(){
      return {
        count:0
      }
    },
    methods:{
      alert(){
        this.$store.dispatch('showAlert', {
          status: true,
          data:'我是传进来的值',
          callback:this.count++
        })
      },
      toastr(){

      }
    }
  }
</script>
<style lang="scss" scoped>
  .info {
    width:4rem;
    height: 0.5rem;
    line-height:0.5rem;
    text-align: center;
    margin:0.3rem auto;
  }
</style>
