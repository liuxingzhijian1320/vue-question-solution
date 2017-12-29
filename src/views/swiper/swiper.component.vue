<template>
  <div class="swiper-2">
    这是抽离swiper组件的写法，存在数据加载顺序的问题
    <swiper :swiper="roomList"></swiper>
  </div>
</template>
<script>
import swiper from 'components/swiper/swiper';

export default {
  data() {
    return {
      roomList: [
        'https://rpic.douyucdn.cn/acrpic/171024/288016_0921.jpg',
        'https://rpic.douyucdn.cn/acrpic/171024/748396_0924.jpg',
        'https://rpic.douyucdn.cn/acrpic/171024/453751_0922.jpg',
        'https://rpic.douyucdn.cn/acrpic/171024/79663_0920.jpg',
      ],
    };
  },
  components: {
    swiper,
  },
};
</script>
<style lang="scss" scoped>
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.swiper-1 {
  width: 100%;
  //padding-top:1rem;
  min-height: 100vh;
}
.demo {
  background-color: red;
  height: 3rem;
  width: 6.9rem;
  margin: 0 auto;
}
</style>
