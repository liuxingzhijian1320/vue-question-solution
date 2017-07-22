<template>
  <div id="tween">
    <h1>{{text}}</h1>
    <div class="firsr">{{ animatedNumber }}</div>
    <button @click="add">增加</button>
    <button @click="des">减少</button>
    <button @click="clear">清除定时器</button>
    <button @click="open">启动定时器</button>
  </div>
</template>
<script>

  function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
  }
  let timer = null;

  export default {
    name: 'tween-simple',
    data() {
      return {
        text:'单个tween',
        animatedNumber: null,
        start: 0,
        end: 100
      };
    },
//    props: {
//      start: {
//        type:Number,
//        default:0
//      },
//      end: {
//        type:Number,
//        default:2000
//      },
//    },
    methods: {

      action(from, to, duration) {
        console.info('action', this.start, this.end);
        this.animatedNumber = this.start;
        var vm = this;
        new TWEEN.Tween({
          tweeningNumber: this.start,
        })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({
          tweeningNumber: this.end,
        }, this.duration || 1000)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0)
        })
        .start()
        animate();
      },


      add(){
        this.end += 10;
      },
      des(){
        this.end -= 10;
      },
      setInter(){
        timer = setInterval(()=>{
          this.add()
        },3000,true)
      },
      clear(){
        clearInterval(timer);
        timer = null;
        console.info('清除定时器',timer)
      },
      open(){
        if(timer == null){
          this.setInter()
          console.info('启动定时器',timer)
        }
      }
    },

    watch: {
      end: function (val, oldValue) {
        if(val != oldValue){
          this.start = oldValue;
        }
        this.end = val
        this.action(this.start, val);
      },
    },

    mounted(){
      this.action()
    }
  };
</script>
<style lang="scss">
  #tween {
    font-size: 0.7rem;
    touch-action: none;
    .firsr {
      margin: 0.5rem auto;
      text-align: center;
    }
  }
</style>
