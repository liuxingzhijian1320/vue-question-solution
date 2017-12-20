<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      listenScroll: { //坚挺滚动时间
        type: Boolean,
        default: false
      },

    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
        })

        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
      },
      //禁用 better-scroll
      disable() {
        this.scroll && this.scroll.disable()
      },
      //启用 better-scroll，默认开启
      enable() {
        this.scroll && this.scroll.enable()
      },
      //强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法。
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      //scrollTo(x, y, time, easing)
      //滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      //scrollToElement(el, time, offsetX, offsetY, easing)
      //滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },

    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

