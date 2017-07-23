<template>
  <div class="tweenmany">
    {{totalNum.value}}张
    <br><br><br>
    {{amountNum.value}}元
    <br><br><br>
    {{workNum.value}}件
    <br><br><br>
    <div class="btn-group">
      <button @click="add">增加</button>
      <button @click="desc">减少</button>
      <button @click="clear">清除定时器</button>
      <button @click="open">启动定时器</button>
    </div>
    <article>
      1.这里使用的是应用类型来操作，便于公用同意action fn ，不然要写三个的action fn,<br>
      2.datatotal,dataamount,datawork 这三个值是后台拿到的值，就是axios的拿到data，然后调用this.action即可

    </article>
  </div>
</template>
<script>
  function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
  }
  let timer = null;
  export default {
    name: 'tewwnmany',
    data(){
      return {
        datatotal: 0,
        dataamount: 0,
        datawork: 0,
        totalNum: {
          value: 0,
        },
        amountNum: {
          value: 0,
        },
        workNum: {
          value: 0,
        },
      }
    },
    mounted(){

      //数字效果
      //this.action(this.data.total,this.totalNum);
      //this.action(this.data.amount,this.amountNum);
      //this.action(this.data.work,this.workNum);
    },
    methods: {
      add(){
        this.datatotal += 100;
        this.dataamount += 200;
        this.datawork += 300;
        this.action(this.datatotal, this.totalNum)
        this.action(this.dataamount, this.amountNum)
        this.action(this.datawork, this.workNum)
      },
      desc(){
        this.datatotal -= 100;
        this.dataamount -= 200;
        this.datawork -= 300;
        this.action(this.datatotal, this.totalNum)
        this.action(this.dataamount, this.amountNum)
        this.action(this.datawork, this.workNum)
      },
      clear(){
        clearInterval(timer);
        timer = null;
        console.info('清除定时器',timer)
      },
      setInter(){
        timer = setInterval(()=>{
          this.add()
        },3000,true)
      },
      open(){
        if(timer == null){
          this.setInter()
          console.info('启动定时器',timer)
        }
      },
      action(to, target) {
        var from = target.value;
        new TWEEN.Tween({
          tweeningNumber: from,
        })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: to })
          .onUpdate(function () {
            target.value = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .tweenmany {
    padding: 0.2rem 0.3rem;
    width: 100%;
    min-height: 100vh;
  }
  .btn-group {
    touch-action: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  button {
    font-size: 0.5rem;
    height: 1rem;
    width:3rem;
    border: none;
    margin-bottom:0.3rem;
  }
  article {
    font-size:0.32rem;
    margin-top:2rem;
  }
</style>
