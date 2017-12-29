<template>
  <div class="H5ToApp">
    <a class="btn" :href="href">在app内部打开</a>
  </div>
</template>

<script>
import linkedmeLink from 'src/assets/script/linkedme.js';
export default {
  name: '',
  data() {
    return {
      href: '',
    };
  },
  methods: {},
  mounted() {
    //detailid,view 这个名字找app要的
    linkedmeLink({
      // detailid: this.$route.params.id,
      detailid: 4, //当前id
      view: 'waredetail', //跳转app的名字
    }).then(res => {
      this.href = res.url;
    });
  },
};
</script>

<style lang="scss" scoped>
.H5ToApp {
  height: 100vh;
  width: 100%;
  .btn {
    background-image: -webkit-linear-gradient(
      180deg,
      rgb(251, 17, 72) 0%,
      rgb(253, 133, 80) 100%
    );
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

