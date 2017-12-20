<template>
  <div>
    <h1 class="h1">五星好评的组件</h1>
    <judge-star v-for="(item,index) in starList" :key="index" @judge="judge"
                :name="item.name" :index="index"></judge-star>
    <button class="submit" @click="submit">提交</button>

    <ul class="tips">
      <li>1.引入font.css 和 fonts的字体的</li>
      <li>2.直接引入judgeStar和starImg的组件的，个性样式自己修改的</li>
      <li>3.star的组件的starList的数组自定修改的，字段也是的，其他的methods的不能变的</li>
    </ul>

  </div>
</template>

<script>
  import JudgeStar from './judgeStar.vue'
  export default{
    data(){
      return {
        starList: [
          { name: '服务态度', key: 'evaluate.serviceStarLevel' },
          { name: '责任感', key: 'evaluate.dutyStarLevel' },
          { name: '准时度', key: 'evaluate.onTimeStarLevel' },
        ],
        evaluate: [],
      }
    },
    components: {
      JudgeStar
    },
    methods: {
      submit(){
        let data = '';
        this.starList.forEach((val, index) => {
          data = `${val.name}:${this.evaluate[index]}`
          console.log(data)
        });
      },
      judge(data){
        this.evaluate[data[0]] = data[1];
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/font.css';

  .h1 {
    font-size: 0.4rem;
    text-align: center;
  }
  .submit {
    width:100%;
    height: 1rem;
    line-height:1rem;
    text-align: center;
    font-weight:900;
    background-color: red;
    border: none;
    margin-top:1rem;
  }
  .tips {
    background-color: #222;
    height: 3rem;
    width: 100%;
    margin-top:2rem;
    color: #ffffff;
    font-size:0.3rem;
    li {
      line-height:1.6;
    }
  }
</style>
