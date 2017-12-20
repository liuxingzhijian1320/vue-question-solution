<template>
  <div class="flex_cont container">
    <div class="flex_item name">{{name}}</div>
    <div class="flex_item">
      <star-img @choose="choose" v-for="(item,index) in starArr" :key="index"
                :chooseIndex="chooseIndex" :index="index"></star-img>
    </div>
  </div>

</template>

<script>
  import StarImg from './starImg.vue'
  export default{
    props: {
      name: String,
      index: '' //三个种类的index
    },
    data(){
      return {
        chooseIndex: 4,
        starArr: Array.from({ length: 5 })
      }
    },
    components: {
      StarImg
    },
    //在这里注册一个chooseIndex，当点击某一个星星时，
    // StarImg组件emit当前星星的index，
    // JudgeStar组件中接收此参数并赋值给chooseIndex，
    // 同时StarImg里面watch这个参数，大于index表明没有被选中，反之则为选中，
    mounted(){
      this.$emit('judge', [this.index, this.chooseIndex + 1]);
    },
    methods: {
      choose(dataindex){ //从starImg子组件怕发出来的事件，并且传来的index
        this.chooseIndex = dataindex; //赋值，在传递给子组件的
        this.$emit('judge', [this.index, this.chooseIndex + 1]); //派发事件给父组件的，传递参数的
      }
    }
  }
</script>

<style scoped>
  .name {
    color: #9a9a9a;
    flex: 0 0 60px;
    padding-right: 14px;
    letter-spacing: 1px;
  }

  .container {
    height: 30px;
    line-height: 30px;
  }

  .flex_item img {
    margin: 0 2px;
  }

  .flex_cont {
    display: flex;
  }

  .flex_item {
    flex: 1;
    width: 0%;
  }
</style>
