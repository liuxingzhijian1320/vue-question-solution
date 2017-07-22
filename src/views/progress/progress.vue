<template>
  <div id="progress">
    <div class="progress-wrap">
      <div class="progress">
        <div class="progress" :style="progressClass">
          <div class="popup-wrap">
            <span class="increamem">已减</span>
          </div>
        </div>
      </div>
    </div>
    <div class="price-range">
      <span class="min">{{min}}元</span>
      <span class="max">{{max}}元</span>
    </div>
    <br>
    <div>num:{{num}}</div>
    <button @click="add">增加</button>
    <button @click="desc">减少</button>

  </div>
</template>
<script>
  export default {
    name: "progress",
    data(){
      return {
        num: 50,
        min:0,
        max:1000,
      }
    },
    computed: {
      progressClass() {
        let width;
        if(this.max > this.num){
          width = (this.num / this.max) * 6
        }else if(this.max <= this.num) {
           width = 6
        }
        console.info('computed',width)
        return {
          width:`${width}rem`,
        }
      },


    },
    methods: {
      add(){
        this.num  += 500;
        console.info('add',width)
      },
      desc(){
        this.num  -= 200;
        console.info('desc',width)
      }
    },


  }
</script>
<style lang='scss'>
  #progress {
    padding: 0 0.5rem;
    touch-action: none;
    @keyframes progress-bar-stripes {
      from {
        background-position: 6px 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .progress-wrap {
      background-color: rgb(239, 234, 225);
      border-radius: 0.5rem;
      height: 1rem;
      position: relative;
      margin-top: 1.22rem;
      text-align: left;
      width: 6rem;
      transform: scaleX(-1); //////////////////////
      /*overflow: hidden;*/
      .progress {
        height: 100%;
        display: inline-block;
        position: absolute;
        border-radius: 0.05rem;
        background: #fff;
        transition: all 5s ease-in;
        /*background-image: -webkit-linear-gradient(180deg, rgb(181, 147, 88) 1%, rgb(233, 214, 174) 100%);*/
        background-image: repeating-linear-gradient(-45deg, #fff, #fff 1px, rgba(255, 34, 93, 0.25) 1px, rgba(255, 34, 93, 0.25) 2px, #fff 2px);
        animation: 2s progress-bar-stripes linear infinite normal;
        .increamem {
          display: inline-block;
          position: absolute;
          height:0.3rem;
          padding:0 0.1rem;
          width:0.6rem;
          background-color: red;
          font-size:0.2rem;
          top:-1rem;
          right: 0;
        }
      }
    }
    .price-range {
      margin-top: 0.24rem;
      display: flex;
      text-align: left;
      font-size: 0.22rem;
      color: rgb(51, 51, 51);
      font-weight: bold;
      .min {
        flex: 1;
      }
    }
  }
</style>
