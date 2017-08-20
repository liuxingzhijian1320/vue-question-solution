<template>
  <div class="fadeInNav">
    <header class="header" :style="changeBg"></header>

    <div class="content">
      <scroll ref="ref"
              :data="data"
              :probe-type="probeType"
              class="fadeIn-list"
              :listen-scroll="listenScroll"
              @scroll="scroll"
      >
        <div>
          <div class="ref-ul">
            <div class="list" v-for="item in data">{{item}}</div>
          </div>
        </div>
      </scroll>
    </div>

  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'

  export default {
    name: 'pullupimgbig',
    data(){
      return {
        probeType: 3,
        listenScroll: true,
        scrollY: 0,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 0, 9],
        op: '',
      }
    },
    methods: {
      scroll(pos){
        this.scrollY = pos.y;
        console.info(pos.y)
      }
    },
    computed: {
      changeBg(){
        if (this.scrollY >= 0) {
          this.op = this.scrollY / 100 + 1;
          return `transform:scale(${this.op});-webkit-transform:scale(${this.op})`
        }
        return 1

      },
    },
    components: {
      Scroll
    }
  }
</script>
<style lang="scss" scoped>

  .header {
    background-image: url('./images/demo.png');
    background-size: cover;
    width: 100%;
    height: 5rem;
    transform-origin: top
  }

  .content {
    position: fixed;
    top: 5rem;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #fff;
    overflow: hidden;
    .fadeIn-list {
      height: 100%;
    }
    .list {
      width: 100%;
      border-bottom: 1px solid red;
      padding: 2rem 0;
      text-align: center;
      margin-bottom: 0.3rem;
      font-size: 2rem;
      font-weight: 900;
      color: #ffffff;
      background-color: gray;
    }
  }
</style>
