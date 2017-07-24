<template>
  <div class="fadeInNav">
    <header class="header" :class="{startBg:startBg}" :style="changeBg">
      <i class="fa fa-arrow-left demo-left" aria-hidden="true" @click="goback"></i>
      <div class="title">主题</div>
    </header>

    <div class="content">
      <scroll ref="ref"
              :data="data"
              :probe-type="probeType"
              class="fadeIn-list"
              :listen-scroll="listenScroll"
              @scroll="scroll"
      >
        <div>
          <div class="img-bg"></div>
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
    name: 'fadeInNav',
    data(){
      return {
        probeType: 3,
        listenScroll: true,
        scrollY: 0,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 0, 9],
        op: '',
        startBg:true
      }
    },
    methods: {
      goback(){
        this.$router.back(-1)
      },
      scroll(pos){
        this.scrollY = pos.y;
        console.info(pos.y)
      }
    },
    computed: {
      changeBg(){
        if (this.scrollY >= 0) {
          this.startBg = true;
          return this.startBg;
        } else if (this.scrollY > -200 && this.scrollY < 0) {
          this.op = Math.abs(this.scrollY / 100);
          console.info(`backgroundColor:rgba(red,${this.op.toFixed(2)})`, `fontSize:${this.op.toFixed(2)} * 0.7rem`)
//          return `backgroundColor:rgba(red,${this.op.toFixed(2)})`
//          return `fontSize:${op * 1}rem`
          return `backgroundColor:yellow;opacity:${this.op.toFixed(2)}`
        }
        return `backgroundColor:yellow`
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style lang="scss" scoped>
  .fadeInNav {

  }

  .header {
    height: 1rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    &.startBg {
     background-color: rgba(#000,0.1);
    }
    .demo-left {
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      font-size: 0.5rem;
    }
    .title {
      font-size: 0.4rem;
      color: red;
      width: 100%;
      font-weight: 900;
      line-height: 1rem;
      text-align: center;
      justify-content: center;
    }
  }

  .content {
    position: fixed;
    top: 0rem;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: gray;
    overflow: hidden;
    .img-bg {
      background-image: url('./images/demo.jpg');
      background-size: cover;
      width: 100%;
      height: 9.6rem;
    }
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
    }
  }
</style>
