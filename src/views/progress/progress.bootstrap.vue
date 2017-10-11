<template>
  <div class="progress-bootstrap">
    <div class="container">
      <div class="progress">
        <div class="progress-bar progress-bar-info progress-bar-striped active"
             :style=changeBg>
          <div class="progress-value">75%</div>
        </div>
      </div>
    </div>
    <button @click="add">增加</button>

    <v-progress :value="progress"></v-progress>



  </div>
</template>
<script>
  import progress from 'src/components/progress/progress';

  export default {
    name: 'progress-bootstrap',
    data(){
      return {
        width:30,
        progress: 0
      }
    },
    methods: {
      add(){
        this.width += 10
      }
    },
    computed:{
      changeBg(){
        if(this.width){
          return `width:${this.width}%`
        }
        return `width:30%`
      }
    },
    components: {
      'v-progress': progress
    },
    mounted(){
      setTimeout(e => {
        this.progress = 50
      }, 0)
    }
  }
</script>
<style lang="scss" scoped>
  .progress-bootstrap {
    padding: 1rem 0.3rem;
  }

  .progress {
    height: 0.25rem;
    background: #262626;
    padding: 0.05rem;
    overflow: visible;
    border-radius: 0.2rem;
    /*border-top: 1px solid #000;*/
    /*border-bottom: 1px solid #7992a8;*/
  }

  .progress .progress-bar {
    border-radius: 0.2rem;
    position: relative;
    animation: animate-positive 2s;
    height: 100%;
    background-color: #0275d8;
  }

  .progress-bar-striped {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 0.3rem 0.3rem;  //修改的
  }
  .progress .progress-value {
    display: block;
    padding: 0 0.03rem;
    font-size: 0.13rem;
    color: #fff;
    border-radius: 0.04rem;
    background: #191919;
    border: 1px solid #000;
    position: absolute;
    top: -1.2rem;
    right: -0.18rem;
  }

  .progress .progress-value:after {
    content: "";
    border-top: 0.1rem solid #191919;
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    position: absolute;
    bottom: -0.06rem;
    left: 26%;
  }

  .progress-bar.active {
    animation: reverse progress-bar-stripes 4s linear infinite, animate-positive 2s;
  }

  @-webkit-keyframes animate-positive {
    0% {
      width: 0;
    }
  }

  @keyframes animate-positive {
    0% {
      width: 0;
    }
  }
</style>
