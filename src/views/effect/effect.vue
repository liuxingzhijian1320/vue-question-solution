<template>
  <div id="effect">

    <div class="one">
      <h4>使用box-shadow实现边框的效果</h4>
      <div class="price-wrap">
        <div class="tips">当前优惠价格</div>
        <p class="price">
          <span class="symbol">¥nbsp;</span>
          <span>500</span>
        </p>
      </div>
    </div>

    <div class="two">
      <h1>水波纹的按钮</h1>
      <waves></waves>
    </div>
  </div>
</template>
<script>
  import Waves from 'components/waves/waves'
  export default {
    data(){
      return {}
    },
    components: {
      Waves
    }
  }
</script>

<style lang="scss" scoped>
  #effect {
    width: 100%;
    padding: 0 0.3rem;
    .one {
      h4 {
        text-align: center;
      }
      .price-wrap {
        margin-top: 0.5rem;

        display: inline-block;
        font-size: 0.31rem;
        color: #c29957;
        font-weight: bold;
        position: relative;
        box-shadow: 0 0 0px 1px #cfb995, 0 0 0px 5px #fff, 0 0 0px 8px #cfb995;
        padding: 0.35rem 0.55rem;
        min-width: 2rem;
      }
      .tips {
        font-size: 0.22rem;
        position: absolute;
        background: #fff;
        left: 50%;
        top: 0;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #666;
        white-space: nowrap;
        height: 0.5rem;
        padding: 0 0.17rem;
      }
    }

    .two {
      margin-top: 0.4rem;
    }
  }
</style>
