<template>
  <div>
    <h1>获取浏览器的版本信息：</h1>
    <!--取得浏览器的userAgent字符串-->

    <h2>var userAgent = navigator.userAgent; </h2>

    我的版本信息：
    <div>{{userAgent}}</div>

  </div>
</template>
<script>
export default {
  name: 'navigatoruserAgent',
  data() {
    return {
      userAgent: navigator.userAgent,
    };
  },
  methods: {},
  mounted() {
    console.info(Modernizr);

    if (Modernizr.chrome) {
      alert('我是谷歌');
    } else if (Modernizr.weixin) {
      alert('我是微信');
    } else if (Modernizr.zhifubao) {
      alert('我是支付宝');
    } else {
      alert('我不认识你');
    }
  },
};
</script>
<style lang="scss" scoped>

</style>
