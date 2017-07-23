<template>
  <div class="question">
    <div class="title">移动端常见的问题</div>
    <div class="content">
      <scroll ref="questionRef"
              :data="data"
              :probe-type="probeType"
              class="question-scroll"
      >
        <ul class="question-ul">
          <li v-for="(item,index) in data">
            <router-link tag="div" :to="{name:item.name}"><span class="index">{{index+1}}</span>{{item.title}}</router-link>
          </li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'
  export default {
    name: 'questions',
    data(){
      return {
        probeType: 3,
        data: [
          { name: 'stickyfooter', title: 'Sticky Footer(一)' },
          { name: 'stickyfooter2', title: 'Sticky Footer(二)' },
          { name: 'stickyfooterflex', title: 'Sticky Footer(三)' },
          { name: 'andiosfixed', title: '安卓ios-fixed的兼容' },
          { name: 'vuexmodal', title: 'vuex modal' },
          { name: 'tweenSimple', title: 'tween 数字动画效果' },
          { name: 'TweenMany', title: 'tween 多个数字动画效果' },
          { name: 'progress', title: 'progress 进度条' },
          { name: 'password', title: 'password 密码框' },
          { name: 'effect', title: 'effect css效果' },
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
        ]
      }
    },
    components: {
      Scroll
    }

  }
</script>
<style lang='scss'>
  .question {
    touch-action: none;
    font-size: 0.26rem;
    width: 100%;
    height: 100%;
    .title {
      text-align: center;
      padding: 0.3rem 0;
    }
    .content {
      position: absolute;
      top: 0.75rem;
      bottom: 0;
      left: 0;
      overflow: hidden;
      right: 0;
      padding-left: 0.4rem;
    }
    .question-scroll {
      height: 100%;
    }
    .question-ul {
      li {
        height: 0.7rem;
        line-height: 0.7rem;
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
          margin-right:0.2rem;
        }
      }
    }
  }
</style>
