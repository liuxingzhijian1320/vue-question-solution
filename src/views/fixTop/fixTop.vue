<template>
  <div class="fixtop">

    <header class="header" ref="banner"></header>


    <div class="nav" ref="nav" :class="{isFixed:isFixed}">
      <div class="box" v-for="(item,index) in list" @click="queryTopic(item,index)">
        <div class="item" :class="{active:navActiveIndex==index}">{{item.title}}</div>
      </div>
    </div>

    <div :class="{fakeNav:isFixed}"></div>


    <ul>
      <li class="li" v-for="(item,index) in list" :style="{height: caluheight(index+1)}">{{item.title}}</li>
    </ul>


  </div>
</template>
<script>
  import modalTag from 'components/navModal/navModal.vue';
  import AutoScroll from 'assets/script/autoScroll'

  var throttle = require('lodash/throttle');

  let autoScrollInstance = null  //关键点：在加载的插件之前的就要定义个变量的，如果定在data中 ，则会报错
  export default {
    name: 'navScroll',
    data() {
      return {
        list: [ //自己定义的假数据，实际是获取的数据
          {title: 'AAAA', id: 1},
          {title: 'BBBB', id: 2},
          {title: 'CCCC', id: 3},
          {title: 'DDDD', id: 4},
          {title: 'EEEE', id: 5},
          {title: 'FFFF', id: 6},
          {title: 'HHHH', id: 7},
          {title: 'MMMM', id: 8},
          {title: 'RRRR', id: 9},
          {title: 'QQQQ', id: 10},
          {title: 'UUUU', id: 11},
          {title: 'TTTT', id: 12},
          {title: 'NNNN', id: 13},
          {title: 'OOOO', id: 14},
          {title: 'PPPP', id: 15},
          {title: 'ZZZZ', id: 16},
        ],
        navActiveIndex: 0, //当前高亮的tab选项卡index
        showModal: false, //是否显示modal
        selectTag: null,   //传递个子组件（modal）的数据的
        isFixed: false,
        throttleScroll: null
      }
    },
    methods: {
      caluheight(index) {
        if (index < 5) {
          return `${index * 4}rem`
        } else if (index < 10 && index > 5) {
          return `${index * 3}rem`
        } else {
          return `${index * 2}rem`
        }
      },
      //
      queryTopic(data, index) {
        //点击谁，谁就高亮 ，定一个变量，click事件的赋值使其相等，而在:class 中 判断是否相等，即可
        this.navActiveIndex = index;

        //插件的调取方法
        if (autoScrollInstance) { //确保的插件加载成功
          autoScrollInstance.scrollTo(this.$refs.nav.childNodes[index])
        }

      },

      //点击modal的事件
      openTagModal(tag) {
        event.stopPropagation() //点击箭头，阻止事件向下传递
        this.showModal = true //modal的出现
        this.selectTag = tag; //传值给modal子组件
      },


      handleScroll() {
        let h = $(this.$refs.banner).outerHeight()
//      let h=$(this.$refs.nav).offset().top
        let wh = $(window).scrollTop()
        let navH = $(this.$refs.nav).outerHeight()

        if (wh > h) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }

      }


    },
    components: {
      'modal-tag': modalTag,  //组件
    },
    mounted() {
      //写在掉接口的里面的
      this.$nextTick(() => {
        autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav

        window.addEventListener('scroll', this.throttleScroll, false)


      })

      this.throttleScroll = throttle(this.handleScroll, 100)

    },
    deactivated() {
      window.removeEventListener('scroll', this.throttleScroll)
    },
  }
</script>
<style lang="scss" scoped>
  .fixtop {
    min-height: 100vh
  }

  .header {
    height: 5rem;
    width: 100%;
    background-color: red;
  }

  .nav {
    display: flex;
    width: 7rem;
    overflow-x: auto;
    overflow-y: hidden;
    &.isFixed {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
    }
    .box {
      white-space: nowrap;
      font-size: 0.3rem;
      padding: 0 0.3rem;
      height: 0.9rem;
      line-height: 0.9rem;
      color: #333333;
      .item {
        height: 100%;
        &.active {
          color: #fe3e62;
          border-bottom: 1.5px solid #fe3e62;
        }
      }
    }
  }


  .li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1rem;
    border-bottom: 2px solid #dfdfdf;
  }


</style>
