<template>
  <div class="swiper-1">

    <section ref="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="demo swiper-slide" v-for="item in colorList" :style="`backgroundColor:${item}`"></div>
      </div>
    </section>


  </div>
</template>
<script>
  let sw = import('swiper')
//  console.info('sw',typeof sw)
//  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return {
        colorList:['red','yellow','gray','pink']
      }
    },
    methods: {
      async _initSwiper() {
      let Swiper = await sw;
         const  container = this.$refs.swiper;
        const config = {
          effect: 'coverflow',
          slidesPerView: 'auto',
          centeredSlides: true,
          initialSlide: this.activeIndex,
          loop:true,
          autoplay:2000,
          speed:3000,
          coverflow: {
            rotate: 0,
            stretch: -30,
            depth: 100,
            modifier: 0.7,
            slideShadows: false,
          },
          onTransitionStart: (swiper) => {
            this.activeIndex = swiper.activeIndex;
          },
        };
        this.mySwiper = new Swiper(container, config);
      },
    },
    mounted(){
      this._initSwiper()
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';
  .swiper-1 {
    width:100%;
    //padding-top:1rem;
    min-height: 100vh;
  }
  .demo {
    background-color: red;
    height: 3rem;
    width:6.9rem;
    margin: 0 auto;
  }
</style>
