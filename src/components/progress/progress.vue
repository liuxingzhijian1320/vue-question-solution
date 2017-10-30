<template>
  <div id="progress-wrapper">
    <div class="progress-container">
      <div class="progress" :style="{width:`${value}%`}">
        <div class="progress-btn">{{animatedNumber}}%</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'progress',
    data() {
      return {
        animatedNumber: 0,
      }
    },
    props: {
      value: {
        type: Number,
        default: '',
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        console.info(newValue, oldValue)
        var vm = this

        function animate() {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }

        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newValue }, 2000)
          .onUpdate(function () {
            vm.animatedNumber = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      }
    }

  }

</script>
<style lang="scss" scoped>
  .progress-container {
    height: 0.16rem;
    width: 100%;
    border-radius: 0.08rem;
    background-color: #dfdfdf;
    margin-top: 0.5rem;
    position: relative;
    margin-bottom:1rem;
  }

  .progress {
    height: 0.16rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    border-radius: 0.08rem;
    background-image: -webkit-linear-gradient(180deg, rgb(251, 17, 72) 0%, rgb(252, 75, 76) 45%, rgb(253, 133, 80) 100%);
    transition: all 4s ease;
  }

  .progress-btn {
    position: absolute;
    top: 50%;
    right: -1.2rem;
    transform: translateY(-50%);
    border: 2px solid rgb(245, 54, 85);
    width: 1.26rem;
    height: 0.56rem;
    box-shadow: 0px 0px 10px 0px rgba(251, 35, 73, 0.35);
    border-radius: 0.28rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f53655;
    font-size: 0.3rem;
    font-weight: 900;
  }

</style>
