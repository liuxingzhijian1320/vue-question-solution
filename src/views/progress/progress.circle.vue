<template>
  <div class="progresscircle">

    <div class="price-box">
      <div class="circle-inner">
        <div class="circle-box">
          <svg class="circle">
            <path ref="arc1" fill="none" stroke="#edf0fb" stroke-width="6"/>
            <path ref="arc2" fill="none" stroke="#dcab55" stroke-width="6"/>
          </svg>
        </div>
        <div class="info-price">当前价格</div>
        <div class="current-price-cont">
          <span ref="current_price" class="current_price">{{current_price}}</span><span class="unit"> 元</span>
        </div>
        <div class="min-price">{{ticketData.min_price}}元</div>
        <div class="original-price">{{ticketData.original_price}}元</div>
        <!--<img src="./image/dial.png" alt="" class="dial">-->
      </div>
    </div>
    {{ticketData.goods_price}}


    <button class="button" @click="getData">点击从后台获取数据（模拟）</button>

  </div>
</template>
<script>
  var ProgressBar = require('progressbar.js')
  let bar = {}
  let bar2 = {}

  function animate() {
    if (TWEEN.update()) {
      requestAnimationFrame(animate)
    }
  }
  export default {
    data(){
      return {
        current_price: 800,
        ticketData: {
          min_price: 1,
          original_price: 999,
        },
        fakePrice: 999
      }
    },
    methods: {
      drawArc(){
        var self = this

        function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
          var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

          return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
          };
        }

        function describeArc(x, y, radius, startAngle, endAngle) {

          var start = polarToCartesian(x, y, radius, endAngle);
          var end = polarToCartesian(x, y, radius, startAngle);

          var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

          var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
          ].join(" ");

          return d;
        }

        this.$refs.arc1.setAttribute("d", describeArc(83, 83, 76, -150, 150));
        this.$refs.arc2.setAttribute("d", describeArc(83, 83, 76, -150, 150));

        bar = new ProgressBar.Path(this.$refs.arc1, {
          easing: 'easeInOut',
          duration: 0
        });
        bar.path.style.strokeLinecap = 'round';
        bar.set(1);

        bar2 = new ProgressBar.Path(this.$refs.arc2, {
          easing: 'easeInOut',
          duration: 2000
        });
        bar2.path.style.strokeLinecap = 'round';
        bar2.set(1);
        bar2.animate((self.ticketData.goods_price) / (self.ticketData.original_price - self.ticketData.min_price));  // Number from 0.0 to 1.0

        new TWEEN.Tween({ tweeningNumber: self.ticketData.original_price })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: self.ticketData.goods_price }, 1800)
          .onUpdate(function () {
            self.current_price = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()

      },
      runAnimate(){
        var self = this
        bar2.animate((self.ticketData.goods_price) / (self.ticketData.original_price - self.ticketData.min_price));
        new TWEEN.Tween({ tweeningNumber: self.ticketData.original_price })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: self.ticketData.goods_price }, 1800)
          .onUpdate(function () {
            self.current_price = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      },
      getData(){
        this.fakePrice -= 200;
        this.$set(this.ticketData, 'goods_price', this.fakePrice);
        this.drawArc()
      }
    },
    mounted(){
      this.$set(this.ticketData, 'goods_price', this.ticketData.original_price);
      this.drawArc()
    }
  }

</script>
<style lang="scss" scoped>
  .progresscircle {
    min-height: 100vh;
    width: 100%;
    background-color: #f6f6f6;
    padding-top: 3rem;
    margin: 0 auto;
  }

  .price-box {
    //margin: 0.70rem 0;
  }

  .circle-inner {
    background-color: #ffffff;
    width: 176px;
    height: 176px;
    padding-top: 5px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
  }

  .info-price {
    position: absolute;
    top: 60px;
    font-size: 14px;
    color: #000;
    left: 50%;
    transform: translateX(-50%);
  }

  .current-price-cont {
    position: absolute;
    top: 80px;
    left: 52%;
    width: 105px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 0;
    font-weight: 900;
    .current_price {
      font-size: 34px;
      color: #000;
    }
    .unit {
      font-size: 14px;
      color: #000;
      margin-left: -0.05rem;
    }
  }

  .min-price {
    position: absolute;
    bottom: -5px;
    left: -10px;
    font-size: 12px;
    color: #000;
    width: 50px;
    text-align: right;
  }

  .original-price {
    position: absolute;
    bottom: -5px;
    right: -10px;
    font-size: 12px;
    color: #000;
    width: 50px;
    text-align: left;
  }

  .dial {
    width: 137px;
    position: absolute;
    left: 19px;
    top: 19px;
  }

  .circle-box {
    width: 166px;
    height: 166px;
    margin: 0 auto;
    .circle {
      height: 100%;
      width: 100%;
      transform-origin: 50% 50%;
      transform: rotateY(180deg);
    }
  }

  .button {
    margin: 1rem auto;
    border: none;
    height: 1rem;
  }
</style>
