<template>
  <div class="question">
    <!--<div class="title" :class="{startBg:startBg}" :style="changeBg">移动端常见的问题</div>-->
    <div class="title">移动端常见的问题</div>
    <!--<div class="content">-->
      <!--<scroll ref="questionRef"-->
              <!--:data="data"-->
              <!--:probe-type="probeType"-->
              <!--class="question-scroll"-->
              <!--:listen-scroll="listenScroll"-->
              <!--@scroll="scroll"-->
      <!--&gt;-->
        <ul class="question-ul">
          <li v-for="(item,index) in data">
            <router-link tag="div" :to="{name:item.name}"><span class="index">{{index + 1}}</span>{{item.title}}
            </router-link>
          </li>
        </ul>
      <!--</scroll>-->
    <!--</div>-->
  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'
  export default {
    name: 'questions',
    data(){
      return {
        probeType: 3,
        listenScroll: true,
        scrollY: 0,
        op: '',
        startBg: true,
        data: [
          { name: 'stickyfooter', title: 'Sticky Footer(一)' },
          { name: 'stickyfooter2', title: 'Sticky Footer(二)' },
          { name: 'stickyfooterflex', title: 'Sticky Footer(三)' },
          { name: 'andiosfixed', title: '安卓ios-fixed的兼容' },
          { name: 'vuexmodal', title: 'vuex modal' },
          { name: 'vuexmodalstop', title: 'vuexmodalstop' },
          { name: 'tweenSimple', title: 'tween 数字动画效果' },
          { name: 'TweenMany', title: 'tween 多个数字动画效果' },
          { name: 'progress', title: 'progress 进度条111' },
          { name: 'progressbootstrap', title: 'progress 进度条222' },
          { name: 'progresscircle', title: 'progress 圆形' },
          { name: 'progressTest', title: 'progress 测试' },
          { name: 'password', title: 'password 密码框' },
          { name: 'cssEffect', title: 'css效果效果' },
          { name: 'localstorage', title: 'localstorage store/expire 储存信息的插件' },
          { name: 'redpacket', title: 'redpacket 短信倒计时 文字上下轮播css写法' },
          { name: 'swiper1', title: 'swiper1 效果' },
          { name: 'bullet', title: 'bullet 弹幕' },
          { name: 'bscrollboth', title: 'bscroll左右联动' },
          { name: 'bscrollbook', title: 'bscroll 通讯录' },
          { name: 'bscrolltop', title: 'bscroll 上下联动' },
          { name: 'test', title: 'test1' },
          { name: 'bscrollrefresh', title: '上拉刷新下拉加载' },
          { name: 'navigatoruserAgent', title: '浏览器版本' },
          { name: 'selectSearch', title: '即实搜索' },
          { name: 'fadeInNav', title: '渐变的nav' },
          { name: 'pullupimgbig', title: '下拉图片变大' },
          { name: 'toggle', title: '上下收缩' },
          { name: 'video', title: '视频组件' },
          { name: 'star', title: '五星评价' },
          { name: 'proxyTable', title: '反向代理' },
          { name: 'alerttoastr', title: '小组件' },
          { name: 'map', title: '高德地图' },
          { name: 'loadmore', title: '加载更多-点击' },
          { name: 'loadmore2', title: '加载更多-滑动' },
          { name: 'occupy', title: '文字占位符' },
          { name: 'hammer', title: '多指触控' },
          { name: 'navScroll', title: '联动的nav' },
          { name: 'fixtop', title: '顶部固定' },
          { name: 'changeRouterData', title: '动态更改的router-data' },
        ]
      }
    },
    methods: {
//      scroll(pos){
//        this.scrollY = pos.y;
//        //console.info(pos.y)
//      }
    },
//    computed: {
//      changeBg(){
//        if (this.scrollY >= 0) {
//          this.startBg = true;
//          return this.startBg;
//        } else if (this.scrollY > -400 && this.scrollY < 0) {
//          this.op = Math.abs(this.scrollY / 400 / 4); //目的是opacity为1，这有个疑问：为什么rgba不能用？
//          //console.info(`backgroundColor:rgba(red,${this.op.toFixed(2)})`)
////          return `backgroundColor:rgba(red,${this.op.toFixed(2)})`
//          return `backgroundColor:#35a251;opacity:${this.op.toFixed(2)};color:#000`
//        }
//        return `backgroundColor:#35a251;color:#000`
//      }
//    },
    components: {
      Scroll
    },
    activated(){
//      this.$refs.questionRef.refresh()
    }

  }
</script>
<style lang='scss'>
  .question {
    touch-action: none;
    font-size: 0.26rem;
    width: 100%;
    min-height: 100vh;
    .title {
      text-align: center;
      padding: 0.3rem 0;
    }
    .content {
      position: absolute;
      top: 1rem;
      bottom: 0;
      left: 0;
      overflow: hidden;
      right: 0;
    }
    .question-scroll {
      height: 100%;
    }
    .question-ul {
      li {
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.4rem;
        &:after {
          content: '';
          width: 100%;
          height: 1px;
          transform: scaleY(0.5);
          position: absolute;
          background-color: #dfdfdf;
        }
        a {
          text-decoration: none;
          color: #000;
        }
        .index {
          margin-right: 0.2rem;
        }
      }
    }
  }
</style>
