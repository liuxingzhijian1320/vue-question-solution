<template>
  <div id="container"></div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {}
    },
    mounted() {
      var map = new AMap.Map('container', {
        resizeEnable: true, //是否缩放
        zoom: 10, //放大的比例
        center: [121.4997835563, 31.2394653920]
      });
    }
  }
</script>

<style lang="scss" scoped>

  #container {
    width: 100%;
    min-height: 100vh;
  }
</style>
