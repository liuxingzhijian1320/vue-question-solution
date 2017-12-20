<template>
  <div class="views-wrapper">

    <div class="meun-wrapper" :class="{menuFixTop:menuFixTop}" ref='meunWrapper' v-show="menuFixTop">
      <ul class="meun-list">
        <li v-for='(item,index) in data' v-if="item.list.length !=0" class="menu-item"
            @click="selectMenu(index)"
            :class='{current:currentIndex === index}'>
          {{item.title}}
            </li>
      </ul>
    </div>

    <scroll class="listview"
            :data='data'
            :probe-type="probeType"
            :listen-scroll="listenScroll"
            @scroll="scroll"
            ref="listview"
            :class="{scrollFixTop:menuFixTop}"
    >
      <div class="content">

        <header class="header" ref="headerWrapper">
          <swiper></swiper>
        </header>

        <div class="meun-wrapper" ref='meunWrapper' v-show="!menuFixTop">
          <ul class="meun-list">
            <li v-for='(item,index) in data' v-if="item.list.length !=0" class="menu-item"
                @click="selectMenu(index)"
                :class='{current:currentIndex === index}'>
              {{item.title}}
            </li>
          </ul>
        </div>

        <div class="goods-wrapper" ref='foodsWrapper'>
          <ul>
            <li class="section-content food-list-hook" v-for="(item,index) in data" v-if="item.list.length !=0">
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
        </div>

      </div>
    </scroll>
  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'
  import Swiper from '../swiper/swiper-1'

  export default {
    name: 'test',
    data(){
      return {
        listHeight: [],
        scrollY: 0,
        headerRealHeight:'',//header 真实高度(px)
        listenScroll:true, //监听scroll事件
        menuFixTop:false, //nav fixed
        currentIndex: 0,  //高亮
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
                title: "背景架",
                subtitle: "专业调配 质量保证",
              },
              {
                title: "主题布幔",
                subtitle: "丝质柔软 色彩鲜艳",
              },
              {
                title: "欧式吊幔",
                subtitle: "低调奢华 高端品质",
              },
              {
                title: "主题背景板",
                subtitle: "高贵圣洁 华丽梦幻",
              },
              {
                title: "欧式雕花栅栏",
                subtitle: "雕刻精美 增添氛围",
              },
              {
                title: "时尚小舞台",
                subtitle: "精致浪漫 凸显主题",
              },
              {
                title: "精美地毯",
                subtitle: "高贵色调 舒适柔软",
              },
              {
                title: "浪漫白鸽",
                subtitle: "灵动活泼 寓意美好",
              },
              {
                title: "欧式喷泉",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "色彩搭配 增添氛围",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式罗马柱",
                subtitle: "尽显欧式奢华与典雅",
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
      scroll(pos){ //监听滚动事件，实时获取到y轴滚动的距离
        this.getHeaderHeight();
        this.scrollY = pos.y
        console.info(pos.y)
        //console.info(-pos.y,this.headerRealHeight)
          if(this.headerRealHeight <= -pos.y){
            this.menuFixTop = true
          }else {
            this.menuFixTop = false
          }
      },
      getHeaderHeight(){  //获取header的高度
        this.headerRealHeight = $('.header').outerHeight(true)
        //console.info(this.headerRealHeight)
      },
      _calculateHeight(){
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        //console.info('foodList',foodList)
        let height = 0;
        this.listHeight.push(height);
        //console.info('this.listHeight',this.listHeight)
        for (var i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
        //console.info('this.listHeight',this.listHeight)
      },
      selectMenu(index){
        //console.info(index)
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index]
        this.$refs.listview.scrollToElement(el, 300,this.headerRealHeight)
        this.menuFixTop = true
        console.info(this.menuFixTop)
      }

    },
    computed: {


    },
    components: {
      Scroll,
      Swiper
    },
  }
</script>
<style lang="scss" scoped>
  .views-wrapper {
    touch-action: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &.scrollFixTop {
      top:1rem;
    }
  }

  .header {
    width: 100%;
    height: 3rem;
    margin-bottom:0.5rem;
  }
  .menuFixTop {
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    animation: fadeInScale 0.4s ease-out;
  }

  @keyframes fadeInScale {
    0% {
      transform: scale(0);
      opacity: 0.2;
    }
    25% {
      transform: scale(0.3);
      opacity: 0.4;
    }
    50% {
      transform: scale(0.6);
      opacity: 0.6;
    }
    75% {
      transform: scale(0.8);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
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
      &.current {
        color: #ff5a5f;
        background: #fff;
      }
    }
    .menu-item {
      flex: 1;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .goods-wrapper {
    flex: 1;
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
      border-bottom: 1px solid #dfdfdf;
      .food-item-logo {
        width: 20%;
        padding-top: 0.30rem;
        .food-item-logo-border {
          width: 1rem;
          height: 1rem;
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
          color: #333333;
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
