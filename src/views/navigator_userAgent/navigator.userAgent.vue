<template>
  <div>
    获取浏览器的版本信息：<br>
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串<br>
    我的版本信息：{{userAgent}}


  </div>
</template>
<script>

  export default {
    name: 'navigatoruserAgent',
    data(){
      return {
        userAgent: navigator.userAgent
      }
    },
    methods: {},
    mounted(){

      console.info(Modernizr)

      if (Modernizr.chrome) {
        alert('我是谷歌')
      } else if (Modernizr.weixin) {
        alert('我是微信')
      } else if (Modernizr.zhifubao) {
        alert('我是支付宝')
      } else {
        alert('我不认识你')
      }
    }

  }
</script>
<style lang="scss" scoped>


</style>
