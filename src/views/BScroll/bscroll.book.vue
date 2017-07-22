<template>
  <div class="content">
    <scroll class="listview"
            :data='data'
            :probe-type="probeType"
            ref="listview"
            :listen-scroll="listenScroll"
            @scroll="scroll"
    >
      <ul>
        <li v-for="group in data" class="list-group" ref="listGroup">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li class="list-group-item" v-for="item in group.list">
              <div class="avatar"></div>
              <span class="name">{{item.title}}</span>
            </li>
          </ul>
        </li>
      </ul>

      <div class="list-shortcut">
        <ul>
          <li class="item" v-for="(item,index) in data" :data-index="index" ref="itemlist"
              @touchstart="onShortcutTouchStart"
              @touchend="onShortcutTouchEnd"
              @touchmove.stop.prevent="onShortcutTouchMove"
              :class="{'current':currentIndex===index}">{{item.title}}

          </li>
        </ul>
      </div>
      <div :class="{centerTitle:centerTitleShow}" v-show="centerTitleShow">{{centerTitleShow}}</div>

    </scroll>
  </div>
</template>
<script>
  import Scroll from 'components/scroll/scroll'
  //const TITLE_HEIGHT = 30
  //const ANCHOR_HEIGHT = 18
  export default {
    name: 'test',
    data(){
      return {
        centerTitleShow: '',
        scrollY: -1,
        currentIndex: 0,
        data: [
          {
            id: 1,
            title: "A",
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
            title: "B",
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
            title: "C",
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
            title: "D",
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
          {
            id: 5,
            title: "E",
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
                title: "主题桌布",
                subtitle: "丝质柔软 色彩鲜艳",
              },
              {
                title: "复古香水瓶",
                subtitle: "高贵优雅 浪漫情调",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式奢华烛台",
                subtitle: "欧式浪漫 奢华品质",
              },
              {
                title: "金色欧式烛台",
                subtitle: "高贵奢华 彰显品味",
              },
              {
                title: "梦幻天使小摆件",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "复古留声机",
                subtitle: "色调高雅 回味经典",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "色彩搭配 增添氛围",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "欧式复古罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式雕花相框",
                subtitle: "高雅奢华 精雕细琢",
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
                title: "欧式雕花栅栏",
                subtitle: "雕刻精美 增添氛围",
              },
              {
                title: "复古蝴蝶",
                subtitle: "灵动优美 复古时尚",
              },
              {
                title: "主题签到笔",
                subtitle: "主题搭配 细节精致",
              },
              {
                title: "主题签到本",
                subtitle: "精美独特 主题搭配",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "主题迎宾牌",
                subtitle: "独特设计 主题展示",
              },
              {
                title: "精美画架",
                subtitle: "欧式风格 完美搭配"
              },
              {
                title: "主题席位牌",
                subtitle: "主题搭配 细节精致",
              }
            ]
          },
          {
            id: 6,
            title: "F",
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
                title: "梦幻logo字母",
                subtitle: "时尚新颖 温馨梦幻",
              },
              {
                title: "复古长条桌",
                subtitle: "典雅简约 华丽低调",
              },
              {
                title: "欧式雕花圆桌",
                subtitle: "精美雕花 端庄大气",
              },
              {
                title: "欧式实木雕花桌",
                subtitle: "浓厚的复古贵族气息",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "精致甜品架",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "精致甜品盘",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "欧式雕花茶具",
                subtitle: "彰显欧式贵族风情",
              },
              {
                title: "欧式雕花椅",
                subtitle: "色调高雅 华丽复古",
              },
              {
                title: "复古小提琴",
                subtitle: "优雅别致 精美独特",
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
                title: "复古书本",
                subtitle: "复古文艺 经典传承",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "梦幻纱幔",
                subtitle: "唯美梦幻 轻盈飘逸",
              },
              {
                title: "优质插花网格",
                subtitle: "造型多变 主题搭配",
              },
              {
                title: "浪漫瀑布花",
                subtitle: "欧式浪漫 灵动优雅",
              },
              {
                title: "浪漫花瓣",
                subtitle: "营造气氛 增加层次",
              }
            ]
          },
          {
            id: 7,
            title: "G",
            list: [
              {
                title: "追光灯",
                subtitle: "新娘手捧 传递幸福",
              },
              {
                title: "精美胸花",
                subtitle: "胸前装饰 精致小巧",
              },
              {
                title: "精美腕花",
                subtitle: "手腕花艺 花香相伴",
              },
              {
                title: "精美车头花",
                subtitle: "婚车头车精美花艺",
              }
            ]
          },
          {
            id: 9,
            title: "H",
            list: [
              {
                title: "追光灯",
                subtitle: "突出中心 画龙点睛",
              },
              {
                title: "光束灯",
                subtitle: "光束集中 梦幻氛围",
              },
              {
                title: "LED par灯",
                subtitle: "环境染色 烘托气氛",
              },
              {
                title: "LED洗墙灯",
                subtitle: "渲染背景 增强效果",
              },
              {
                title: "Par 64",
                subtitle: "基本光源 整体照明",
              },
              {
                title: "薄雾机",
                subtitle: "营造氛围 集中光束",
              }
            ]
          },
          {
            id: 10,
            title: "I",
            list: [
              {
                title: "婚礼管家",
                subtitle: "专业贴心的统筹服务",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "婚礼管家",
                subtitle: "专业贴心的统筹服务",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "灯光指导",
                subtitle: "营造最梦幻的婚礼气氛",
              }
            ]
          },
          {
            id: 1,
            title: "J",
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
            title: "K",
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
            title: "L",
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
            title: "M",
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
          {
            id: 5,
            title: "N",
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
                title: "主题桌布",
                subtitle: "丝质柔软 色彩鲜艳",
              },
              {
                title: "复古香水瓶",
                subtitle: "高贵优雅 浪漫情调",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式奢华烛台",
                subtitle: "欧式浪漫 奢华品质",
              },
              {
                title: "金色欧式烛台",
                subtitle: "高贵奢华 彰显品味",
              },
              {
                title: "梦幻天使小摆件",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "复古留声机",
                subtitle: "色调高雅 回味经典",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "色彩搭配 增添氛围",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "欧式复古罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式雕花相框",
                subtitle: "高雅奢华 精雕细琢",
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
                title: "欧式雕花栅栏",
                subtitle: "雕刻精美 增添氛围",
              },
              {
                title: "复古蝴蝶",
                subtitle: "灵动优美 复古时尚",
              },
              {
                title: "主题签到笔",
                subtitle: "主题搭配 细节精致",
              },
              {
                title: "主题签到本",
                subtitle: "精美独特 主题搭配",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "主题迎宾牌",
                subtitle: "独特设计 主题展示",
              },
              {
                title: "精美画架",
                subtitle: "欧式风格 完美搭配"
              },
              {
                title: "主题席位牌",
                subtitle: "主题搭配 细节精致",
              }
            ]
          },
          {
            id: 6,
            title: "O",
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
                title: "梦幻logo字母",
                subtitle: "时尚新颖 温馨梦幻",
              },
              {
                title: "复古长条桌",
                subtitle: "典雅简约 华丽低调",
              },
              {
                title: "欧式雕花圆桌",
                subtitle: "精美雕花 端庄大气",
              },
              {
                title: "欧式实木雕花桌",
                subtitle: "浓厚的复古贵族气息",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "精致甜品架",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "精致甜品盘",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "欧式雕花茶具",
                subtitle: "彰显欧式贵族风情",
              },
              {
                title: "欧式雕花椅",
                subtitle: "色调高雅 华丽复古",
              },
              {
                title: "复古小提琴",
                subtitle: "优雅别致 精美独特",
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
                title: "复古书本",
                subtitle: "复古文艺 经典传承",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "梦幻纱幔",
                subtitle: "唯美梦幻 轻盈飘逸",
              },
              {
                title: "优质插花网格",
                subtitle: "造型多变 主题搭配",
              },
              {
                title: "浪漫瀑布花",
                subtitle: "欧式浪漫 灵动优雅",
              },
              {
                title: "浪漫花瓣",
                subtitle: "营造气氛 增加层次",
              }
            ]
          },
          {
            id: 7,
            title: "P",
            list: [
              {
                title: "追光灯",
                subtitle: "新娘手捧 传递幸福",
              },
              {
                title: "精美胸花",
                subtitle: "胸前装饰 精致小巧",
              },
              {
                title: "精美腕花",
                subtitle: "手腕花艺 花香相伴",
              },
              {
                title: "精美车头花",
                subtitle: "婚车头车精美花艺",
              }
            ]
          },
          {
            id: 9,
            title: "Q",
            list: [
              {
                title: "追光灯",
                subtitle: "突出中心 画龙点睛",
              },
              {
                title: "光束灯",
                subtitle: "光束集中 梦幻氛围",
              },
              {
                title: "LED par灯",
                subtitle: "环境染色 烘托气氛",
              },
              {
                title: "LED洗墙灯",
                subtitle: "渲染背景 增强效果",
              },
              {
                title: "Par 64",
                subtitle: "基本光源 整体照明",
              },
              {
                title: "薄雾机",
                subtitle: "营造氛围 集中光束",
              }
            ]
          },
          {
            id: 10,
            title: "R",
            list: [
              {
                title: "婚礼管家",
                subtitle: "专业贴心的统筹服务",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "婚礼管家",
                subtitle: "专业贴心的统筹服务",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },
              {
                title: "花艺指导",
                subtitle: "用艺术的视觉呈现花之美",
              },
              {
                title: "灯光指导",
                subtitle: "营造最梦幻的婚礼气氛",
              }
            ]
          },
          {
            id: 3,
            title: "S",
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
            title: "T",
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
          {
            id: 5,
            title: "V",
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
                title: "主题桌布",
                subtitle: "丝质柔软 色彩鲜艳",
              },
              {
                title: "复古香水瓶",
                subtitle: "高贵优雅 浪漫情调",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "欧式罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式奢华烛台",
                subtitle: "欧式浪漫 奢华品质",
              },
              {
                title: "金色欧式烛台",
                subtitle: "高贵奢华 彰显品味",
              },
              {
                title: "梦幻天使小摆件",
                subtitle: "人间精灵 守护爱情",
              },
              {
                title: "复古留声机",
                subtitle: "色调高雅 回味经典",
              },
              {
                title: "欧式唯美花艺",
                subtitle: "色彩搭配 增添氛围",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "欧式复古罗马花盆",
                subtitle: "高雅奢华 彰显品味",
              },
              {
                title: "欧式雕花相框",
                subtitle: "高雅奢华 精雕细琢",
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
                title: "欧式雕花栅栏",
                subtitle: "雕刻精美 增添氛围",
              },
              {
                title: "复古蝴蝶",
                subtitle: "灵动优美 复古时尚",
              },
              {
                title: "主题签到笔",
                subtitle: "主题搭配 细节精致",
              },
              {
                title: "主题签到本",
                subtitle: "精美独特 主题搭配",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "主题迎宾牌",
                subtitle: "独特设计 主题展示",
              },
              {
                title: "精美画架",
                subtitle: "欧式风格 完美搭配"
              },
              {
                title: "主题席位牌",
                subtitle: "主题搭配 细节精致",
              }
            ]
          },
          {
            id: 6,
            title: "V",
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
                title: "梦幻logo字母",
                subtitle: "时尚新颖 温馨梦幻",
              },
              {
                title: "复古长条桌",
                subtitle: "典雅简约 华丽低调",
              },
              {
                title: "欧式雕花圆桌",
                subtitle: "精美雕花 端庄大气",
              },
              {
                title: "欧式实木雕花桌",
                subtitle: "浓厚的复古贵族气息",
              },
              {
                title: "梦幻水晶灯",
                subtitle: "奢华璀璨 高贵典雅",
              },
              {
                title: "复古首饰盒",
                subtitle: "蕴含着典雅的贵族风情",
              },
              {
                title: "精致甜品架",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "精致甜品盘",
                subtitle: "贴合主题 精致浪漫",
              },
              {
                title: "欧式雕花茶具",
                subtitle: "彰显欧式贵族风情",
              },
              {
                title: "欧式雕花椅",
                subtitle: "色调高雅 华丽复古",
              },
              {
                title: "复古小提琴",
                subtitle: "优雅别致 精美独特",
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
                title: "复古书本",
                subtitle: "复古文艺 经典传承",
              },
              {
                title: "梦幻蜡烛",
                subtitle: "温馨时尚 精致梦幻",
              },
              {
                title: "梦幻纱幔",
                subtitle: "唯美梦幻 轻盈飘逸",
              },
              {
                title: "优质插花网格",
                subtitle: "造型多变 主题搭配",
              },
              {
                title: "浪漫瀑布花",
                subtitle: "欧式浪漫 灵动优雅",
              },
              {
                title: "浪漫花瓣",
                subtitle: "营造气氛 增加层次",
              }
            ]
          },
          {
            id: 7,
            title: "W",
            list: [
              {
                title: "追光灯",
                subtitle: "新娘手捧 传递幸福",
              },
              {
                title: "精美胸花",
                subtitle: "胸前装饰 精致小巧",
              },
              {
                title: "精美腕花",
                subtitle: "手腕花艺 花香相伴",
              },
              {
                title: "精美车头花",
                subtitle: "婚车头车精美花艺",
              }
            ]
          },
          {
            id: 9,
            title: "X",
            list: [
              {
                title: "追光灯",
                subtitle: "突出中心 画龙点睛",
              },
              {
                title: "光束灯",
                subtitle: "光束集中 梦幻氛围",
              },
              {
                title: "LED par灯",
                subtitle: "环境染色 烘托气氛",
              },
              {
                title: "LED洗墙灯",
                subtitle: "渲染背景 增强效果",
              },
              {
                title: "Par 64",
                subtitle: "基本光源 整体照明",
              },
              {
                title: "薄雾机",
                subtitle: "营造氛围 集中光束",
              }
            ]
          },
          {
            id: 9,
            title: "Z",
            list: [
              {
                title: "追光灯",
                subtitle: "突出中心 画龙点睛",
              },
              {
                title: "光束灯",
                subtitle: "光束集中 梦幻氛围",
              },
              {
                title: "LED par灯",
                subtitle: "环境染色 烘托气氛",
              },
              {
                title: "LED洗墙灯",
                subtitle: "渲染背景 增强效果",
              },
              {
                title: "Par 64",
                subtitle: "基本光源 整体照明",
              },
              {
                title: "薄雾机",
                subtitle: "营造氛围 集中光束",
              }
            ]
          },
          {
            id: 10,
            title: "Y",
            list: [
              {
                title: "婚礼管家",
                subtitle: "专业贴心的统筹服务",
              },
              {
                title: "婚礼执行",
                subtitle: "呈现婚礼完美现场",
              },

            ]
          }
        ],
      }
    },
    mounted(){
      this._calculateHeight() //本例题是死的数据 所有mounted执行
    },
    methods: {
      onShortcutTouchEnd(e){
        console.info('离开屏幕')
        this.centerTitleShow = false;
      },
      onShortcutTouchStart(e){
        this._Height();
        this.small_btn_height = this.smallHeight[1] - this.smallHeight[0]; //计算小btn的高度
        //console.info(this.$refs.itemlist[2].style.height)
        let anchorIndex = this.getIndex(e.target, 'index'); //封装的方法，来获取index的方法，e的方法没法获取，这里不需要click事件，使用touch方法来实现
        //console.info(this.$refs.listGroup[anchorIndex])
        let firstTouch = e.touches[0]; //手指第一次点击的地方
        this.touch.y1 = firstTouch.pageY; //打印firstTouch 可知道pageY是啥东西
        this.touch.anchorIndex = anchorIndex; //记录当前的index
        //console.info(firstTouch，anchorIndex)
        //this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex], 0) //点击小的btn，左边自动映射到相应的位置
        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0] //手指离开的位置
        this.touch.y2 = firstTouch.pageY //记录
        let heightBoth = this.touch.y2 - this.touch.y1;//Y轴方向的偏移值
        let delta = heightBoth / this.small_btn_height | 0;  //偏移了几个小btn的高度，即偏移了几个li标签
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        //console.info(anchorIndex)
        if (this.data[anchorIndex] && this.data[anchorIndex].title) {
          this.centerTitleShow = this.data[anchorIndex].title;
          //console.info(this.centerTitleShow)
        }
        this._scrollTo(anchorIndex)
      },
//      _scrollTo(index) { //封装的方法。滚到映射
//        this.scrollY = -this.listHeight[index]
//        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0) //0表示缓动动画时间
//      },
      _scrollTo(index){
        console.info('index',index)
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index]
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      },
      getIndex(el, name, val){
        const prefix = 'data-'
        name = prefix + name;
        if (val) {
          return el.setAttribute(name, val)
        }
        return el.getAttribute(name)
      },
      scroll(pos){//scroll组件emit出来的事件
        //console.info(pos)
        this.scrollY = pos.y
      },

      _calculateHeight() {//计算每个listGroup的高度
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        //console.info(11,this.listHeight)
      },
      _Height() { //计算每个btn的高度的
        this.smallHeight = []
        const list = this.$refs.itemlist
        let height = 0
        this.smallHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.smallHeight.push(height)
        }
        //console.info(this.smallHeight)
      },

    },
    watch: {
      data() {  //观测data数据（列表显示数据）的变化，实时计算listGroup的高度
        setTimeout(() => {
          //this._calculateHeight() //真实接口的调用这个数据
        }, 20)
      },
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
      },

    },
    components: {
      Scroll
    },
    created(){
      this.touch = {}; //这里创建的值只是为了全局变量的作用，并不要的来观测值得变化的
      this.probeType = 3
      this.listenScroll = true
      this.listHeight = []
      this.smallHeight = []
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/style/variable.scss';

  .content {
    touch-action: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .centerTitle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
    background-color: rgba(#000,.7);
    text-align: center;
    line-height: 1.5rem;
    font-size: 0.6rem;
    color: #ffffff;
  }

  .listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .list-group {
      padding-bottom: 0.6rem;
      .list-group-title {
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.4rem;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
      .list-group-item {
        display: flex;
        align-items: center;
        padding: 0.4rem 0 0 0.6rem;
        .avatar {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: #fff;
        }
        .name {
          margin-left: 0.4rem;
          color: $color-text-l;
          font-size: $font-size-medium;
        }
      }
    }
    .list-shortcut {
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.4rem;
      padding: 0.4rem 0;
      border-radius: 0.2rem;
      text-align: center;
      background: $color-background-d;
      font-family: Helvetica;
      .item {
        padding: 0.06rem;
        line-height: 1;
        color: $color-text-l;
        font-size: $font-size-small;
        &.current {
          color: $color-theme;
          font-size:0.3rem;
        }
      }
    }
    .list-fixed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .fixed-title {
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.4rem;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
    }
  }
</style>
