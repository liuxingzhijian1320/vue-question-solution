<template>
  <div>
    <div class="topic-list-inner">
      <div class="nav" ref="nav">
        <div class="box" v-for="(item,index) in list" @click="queryTopic(item,index)">
          <div class="item" :class="{active:navActiveIndex==index}">{{item.title}}</div>
        </div>
      </div>

      <div class="nav-right-arrow rotateUp" @click="openTagModal(list)">
        <img src="./images/drop-down.png" alt="" class="drop-down" :class="{reverse:showModal}">
      </div>

      <!-- use the modal component, pass in the prop -->
      <modal-tag v-if="showModal" @close="showModal = false" :query="queryTopic"
                 :my-tag="selectTag" :active-index="navActiveIndex"
      ></modal-tag>

      <!--传递子组件的方法，参数-->
      <!--queryTopic:方法-->
      <!--selectTag：数据-->

    </div>
  </div>
</template>
<script>
  import modalTag from 'components/navModal/navModal.vue';
  import AutoScroll from 'assets/script/autoScroll'

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
      }
    },
    methods: {
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
    },
    components: {
      'modal-tag': modalTag,  //组件
    },
    mounted() {
      //写在掉接口的里面的
      this.$nextTick(() => {
        autoScrollInstance = new AutoScroll(this.$refs.nav, {spaceBetween: 0})//节点 nav
      })
    }
  }
</script>
<style lang="scss" scoped>
  .topic-list-inner {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
  }

  .nav {
    display: flex;
    width: 7rem;
    overflow-x: auto;
    overflow-y: hidden;
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

  .nav-right-arrow {
    position: fixed;
    right: 0;
    top: 0;
    width: 1rem;
    height: 0.9rem;
    /*background: #fff;*/
    background-image: linear-gradient(to right, rgba(#fff, 0), #fff 30%, #fff);

    display: flex;
    align-items: center;
    justify-content: center;

    .drop-down {
      width: 0.22rem;
      /*padding-top: 0.35rem;*/
      /*margin-left: 0.22rem;*/
      transform: rotate(0deg);
      transition: all 0.5s;
      &.reverse {
        transform: rotate(-180deg);
      }
    }
  }

</style>
