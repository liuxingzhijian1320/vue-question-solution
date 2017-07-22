<template>
  <div>
    <!-- header -->
    <div class="header">
      <h2 class="title">演出列表</h2>
    </div>

    <div class="list-wrapper" >

          <!-- 列表 -->
          <ul class="list-content" id="list-wrappe-hook">
            <!--<li class="list-item" v-for="(item,index) in new Array(10)">-->
              <!--<div class="avatar">-->
                <!--<img src="./images/1.png" width="100" height="100"/>-->
              <!--</div>-->
              <!--<div class="text">-->
                <!--<h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2>-->
                <!--<span v-text="`2016-11-${index}`"></span>-->
              <!--</div>-->
            <!--</li>-->
          </ul>




        </div>


  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
      }
    },
    mounted(){
//      this._initScroll()
    },
    methods: {
      _initScroll(){
        let scroll = new BScroll(document.getElementById('list-wrappe-hook'), {
          probeType: 1
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    top: 0;
    height: 1.1rem;
    background: #35a251;
  }

  .header .title {
    line-height: 1.1rem;
    color: #fff;
    text-align: center;
  }


</style>
