<template>
  <div>

    <div class="nav" ref="nav">
      <div class="box" v-for="(item,index) in list" @click="select(item,index)">
        <div class="item" :class="{active:selected.id==item.id || $route.query.cate==item.id}">{{item.title}}</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'changeRouterData',
    data() {
      return {
        list: [ //自己定义的假数据，实际是获取的数据
          {title: '首页', id: 1},
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
        navActiveIndex: 0,
        selected: {},
      }
    },
    methods: {
      select(item, index) {
//        this.navActiveIndex = index;
        if (index == 0) {
          this.$router.push({
            name: 'questions',
          })
        } else {
          this.$router.push({
            name: 'changeRouterData',
            query: {
              cate: item.id
            }
          })
        }

      },

    }
  }
</script>
<style lang="scss" scoped>
  .nav {
    display: flex;
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
</style>
