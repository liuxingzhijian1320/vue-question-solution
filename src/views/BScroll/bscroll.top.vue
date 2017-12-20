<template>
  <div class="views-wrapper">
    <header class="header" ref="headerWrapper">
      <swiper></swiper>
    </header>
    <div class="meun-wrapper" ref='meunWrapper'>
      <ul class="meun-list">
        <li v-for='(item,index) in data' v-if="item.list.length !=0" class="menu-item"
            @click="selectMenu(index)"
            :class='{current:currentIndex === index}'>
          {{item.title}}


        </li>
      </ul>
    </div>
    <div class="scroll-div">
      <scroll :data='data'
              :probe-type="probeType"
              class="goods-wrapper"
              ref='foodsWrapper'
              :listen-scroll="listenScroll"
              @scroll="scroll"
      >

        <ul>
          <li class="section-content" v-for="(item,index) in data"
              v-if="item.list.length !=0"
              ref="foodlistRef">
            <div class="title">{{item.title}}</div>
            <ul>
              <li class="food-item" v-for=' itemList in  item.list'>
                <!--方形-->
                <div class="food-item-logo">
                  <div class="food-item-logo-border"></div>
                </div>
                <div class="food-item-info">
                  <div class="food-item-info-title height">{{itemList.title}}</div>
                  <div class="food-item-info-subtitle height">{{itemList.subtitle}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </scroll>
    </div>

  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'
  import Swiper from '../swiper/swiper-1'

  export default {
    name: 'test',
    data(){
      return {
        currentIndex: 0,
        listenScroll: true,
        listHeight: [],
        scrollY: 0,
        probeType: 3, // better-scroll 的点击
        data: [
          {
            id: 1,
            title: "宴会",
            list: [
              {
                title: "舞台truss架子",
                subtitle: "坚固安全 质地优质",
              },
              {
                title: "背景架",
                subtitle: "专业调配 质量保证",
              },
              {
                title: "浪漫星空",
                subtitle: "营造温馨浪漫感",
              },
              {
                title: "欧式吊幔",
                subtitle: "低调奢华 高端品质",
              },
              {
                title: "桁架",
                subtitle: "背景支架 坚实牢固",
              },
              {
                title: "精美珠光地毯",
                subtitle: "珠光闪耀 高端时尚",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "华丽玫瑰花",
                subtitle: "精致浪漫 时尚优雅",
              },
              {
                title: "精美藤蔓",
                subtitle: "线条优美 浪漫情调",
              },
              {
                title: "主题背景板",
                subtitle: "高贵圣洁 华丽梦幻",
              },
              {
                title: "梦幻软光灯带",
                subtitle: "光芒璀璨 增添氛围",
              },
              {
                title: "欧式雕花柱",
                subtitle: "雕刻精细 增添立体感",
              },
              {
                title: "梦幻天使",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨烛光 灵动火苗",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "精致浪漫 时尚优雅",
              },
              {
                title: "欧式罗马柱",
                subtitle: "尽显欧式奢华与典雅",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "梦幻色调 唯美大气",
              }
            ]
          },
          {
            id: 2,
            title: "T台",
            list: [
              {
                title: "幸福之路",
                subtitle: "唯美浪漫 时尚大气",
              },
              {
                title: "台阶装置",
                subtitle: "唯美浪漫 时尚大气",
              },
              {
                title: "时尚小舞台",
                subtitle: "精致浪漫 凸显主题",
              },
              {
                title: "精美珠光地毯",
                subtitle: "珠光闪耀 高端大气",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "欧式罗马柱",
                subtitle: "尽显欧式奢华与典雅",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨烛光 灵动火苗",
              },
              {
                title: "梦幻天使",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "梦幻色调 唯美大气",
              },
              {
                title: "欧式浪漫花球",
                subtitle: "色彩搭配 增添氛围",
              }
            ]
          },
          {
            id: 3,
            title: "餐桌",
            list: [
              {
                title: "主题桌布",
                subtitle: "高贵色调 舒适柔软",
              },
              {
                title: "欧式吊幔桌围",
                subtitle: "低调奢华 高端品质",
              },
              {
                title: "欧式竹节椅",
                subtitle: "奢华享受 高贵低调",
              },
              {
                title: "欧式椅背纱",
                subtitle: "唯美梦幻 轻盈飘逸",
              },
              {
                title: "欧式主桌花",
                subtitle: "唯美大气 高贵华丽",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "欧式罗马柱",
                subtitle: "尽显欧式奢华与典雅",
              },
              {
                title: "金色欧式烛台",
                subtitle: "高贵奢华 彰显品味",
              },
              {
                title: "欧式客桌花",
                subtitle: "优雅别致 精美独特",
              },
              {
                title: "欧式珠链",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "精美椅背蝴蝶结",
                subtitle: "小巧精致 凸显主题",
              },
              {
                title: "浪漫花瓣",
                subtitle: "营造气氛 增加层次",
              },
              {
                title: "主题桌卡",
                subtitle: "主题风格 精美细节",
              },
              {
                title: "主题席卡",
                subtitle: "主题风格 精美细节",
              }
            ]
          },
          {
            id: 4,
            title: "迎宾",
            list: [
              {
                title: "梦幻天使",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "梦幻云朵棉",
                subtitle: "营造梦幻视觉感",
              },
              {
                title: "梦幻天使",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "梦幻云朵棉",
                subtitle: "营造梦幻视觉感",
              }
            ]
          },
        ],
      }
    },
    mounted(){
      this._calculateHeight()
    },
    methods: {
      _calculateHeight() {//计算每个listGroup的高度
        this.listHeight = []
        const list = this.$refs.foodlistRef
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        //console.info(11,this.listHeight)
      },
      selectMenu(index){
        console.info(index)
        let foodList = this.$refs.foodlistRef;
        let el = foodList[index]
        this.$refs.foodsWrapper.scrollToElement(el, 500)
      },
      scroll(pos){
        //console.info('pos',pos)
        this.scrollY = pos.y;
      }

    },
    watch: {
      scrollY(newY) {
        //console.info('newY', newY)
        const listHeight = this.listHeight
        // 当滚动到顶部，newY>0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      }
    },
    components: {
      Scroll,
      Swiper
    },
  }
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 3rem;
    margin-bottom: 0.5rem;
  }

  .meun-wrapper {
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    background-color: green;
    color: #ffffff;
    .meun-list {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .menu-item {
      flex: 1;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &.current {
        color: #ff5a5f;
        background: #fff;
      }
    }
  }

  .scroll-div {
    position: absolute;
    top: 4.5rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  .goods-wrapper {
    height: 100%;
    background-color: #222;
    .title {
      height: 0.5rem;
      width: 100%;
      background: #f6f6f6;
      border-left: 3px solid #dfdfdf;
      padding-left: 0.3rem;
      line-height: 0.5rem;
      color: #999;
      font-size: 0.24rem;
    }
    .food-item {
      display: flex;
      height: 1.6rem;
      width: 100%;
      padding-left: 0.3rem;
      .food-item-logo {
        width: 20%;
        padding-top: 0.30rem;
        .food-item-logo-border {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: #05cd76;
        }
      }
      .food-item-info {
        width: 55%;
        padding-top: 0.20rem;
        .height {
          height: 0.32rem;
        }
        .food-item-info-title {
          padding-top: 0.05rem;
          color: #fff;
          margin-bottom: 0.1rem;

          font-size: 0.26rem;
        }
        .food-item-info-subtitle {
          color: #999;
          font-size: 0.2rem;
          margin-bottom: 0.05rem;
        }
        .food-item-info-spec {
          color: #666666;
          font-size: 0.22rem;
        }
      }
    }
  }
</style>
