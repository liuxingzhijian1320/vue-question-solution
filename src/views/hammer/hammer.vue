<template>
  <div class="hammer">


    <div class='demo' ref="demo" id="demo"></div>

  </div>
</template>
<script>
  export default {
    name: 'hammer',
    data() {
      return {}
    },

    mounted() {

      var hammertime = new Hammer(this.$refs.demo);

      //为该dom元素指定触屏移动事件
      hammertime.on("press", function (e) {
        document.getElementById("demo").innerHTML += "按压超过500ms了";
      });

      //双击事件
      hammertime.on("doubletap", function (e) {
        document.getElementById("demo").innerHTML += '我被双击了';
        var a = console.log(e);
      });

    }


  }
</script>
<style lang="scss" scoped>
  .hammer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }

  .demo {
    width: 5rem;
    height: 5rem;
    background-color: red;
  }
</style>
