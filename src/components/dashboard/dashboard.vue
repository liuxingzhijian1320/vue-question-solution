<template>
  <div class="dashboard-wrap">
    <div class="dashboard">
      <div class="ticks">
        <div class="tick" v-for="item,index in scale" :data-a="item.value" :style="[ {transform: `translateY(-50%) rotate(${index * stepRadian - (rotate - 180) / 2 }deg)`}, item.style ]" :class="item.class"></div>
      </div>
      <div class="infield">
        <div>
          <h5 class="process">{{ max? Math.floor( value / max * 100 ):0 }}%</h5>
          <p class="info">已扫描{{value}}件</p>
        </div>
      </div>
      <p class="tips">{{max?'正在扫描道具...':'暂未开始检查'}}</p>
    </div>
  </div>
</template>
<script>
const color1 = [39, 82, 150];
const color2 = [62, 167, 239];

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function lerpValues(value1, value2, t, out) {
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return lerp(value1, value2, t);
  }
  const len = Math.min(value1.length, value2.length);
  out = out || new Array(len);
  for (let i = 0; i < len; i++) {
    out[i] = lerp(value1[i], value2[i], t);
  }
  return out;
}
export default {
  name: 'dashboard',
  props: {
    // 当前指针对应的值
    value: {
      type: Number,
      default: 29,
    },
    lens: { // 刻度的格数
      type: Number,
    },
    // 最小刻度值
    min: {
      type: Number,
      default: 0,
    },
    // 最大刻度值
    max: {
      type: Number,
      default: 100,
    },
    // 刻度值 (刻度的最小单位)
    step: { // 刻度每隔的大小
      type: Number,
    },
    // 最小到最大的弧度, 不应该超过 360 度
    rotate: {
      type: Number,
      default: 270,
    },
  },
  data() {
    return {
      myLen: 1, // 刻度的格数
      myStep: 4, // 刻度每隔的大小
    };
  },
  computed: {
    current() {
      if (this.value < this.min) {
        return this.min;
      }
      if (this.value > this.max) {
        return this.max;
      }
      return this.value;
    },
    scale() {
      const current = this.current;
      let len = this.lens || Math.ceil((this.max - this.min) / this.myStep) + 1;
      const result = new Array(len).fill({}); // 不能 map undefined 的数组,所以要 fill 一个值
      return result.map((item, index) => {
        const ret = {
          style: { backgroundColor: '' },
          class: [],
        };
        const value = index * this.myStep;
        if (value <= current) {
          let color3 = lerpValues(color1, color2, index / len); // 渐变计算
          color3 = color3.map(item => parseInt(item));
          ret.style.backgroundColor = `rgb(${color3.toString()})`;
          // 判断是否是当前指针
          const next = (index + 1) * this.myStep;
          if (next > current) {
            ret.class.push('current'); // 是当前指针
          }
        }
        ret.value = value;
        return ret;
      });
    },
    // 计算每一步的弧度
    stepRadian() {
      return this.rotate / (this.scale.length - 1);
    },

  },
  methods:{
    init(){
      if (this.lens && this.step) {
        console.error('刻度与格数,只能传入一个值');
        return;
      }
      if (this.lens) {
        this.myLen = this.lens + 1; // 假如分成20份, 则有 21 个刻度
        this.myStep = (this.max - this.min) / (this.myLen - 1);
      } else if (this.step) {
        this.myStep = this.step;
      } else {
        console.error('需要传入刻度或者格数');
      }
    }
  },
  watch:{
    lens(){
      this.init()
    },

    min(){
      this.init()
    },
    // 最大刻度值
    max(){
      this.init()
    },

    step(){
      this.init()
    },
  },
  mounted() {
    this.init()
  },
};

</script>
<style lang="scss" scoped>
$dw: 260px;
.dashboard {
  position: relative;
  width: $dw;
  height: $dw;
  border-radius: 50%;
}
.ticks {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.tick {
  $tw: 20px; // 刻度的长度
  $inner: 100px; // 刻度离圆心的距离
  $th: 3px; // 刻度的粗细
  background: #252946;
  position: absolute;
  top: 50%;
  right: $dw/2+$inner;
  width: $tw;
  height: $th;
  transform-origin: $inner + $tw $th / 2;
  &.current {
    $spill: 6px; // 当前指针, 比其他指针的
    width: $tw + $spill;
    transform-origin: $inner + $tw + $spill $th / 2;
  }
}

.infield {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #0f1538;
  border-radius: 50%;
  width: 170px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .process {
    font-size: 32px;
    color: transparent;
    font-weight: 1000;
    background-image: linear-gradient(0deg, #3063c1, #7d9cd5);
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Calibri";
  }
  .info {
    font-size: 16px;
    color: rgb(45, 91, 176);
  }
}

.tips {
  font-size: 21px;
  color: rgb(158, 192, 255);
  position: absolute;
  bottom: -10px;
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px #9ec0ff;
}

</style>
