<template>
  <div id="search">
    <header class="header">
      <input type="text" class="search" placeholder="搜索关键词试试看" v-model.trim="title" />
      <div class="btn" @click="cancle">取消</div>
      <img src="./images/search.png" alt="" class="icon">
    </header>

    没有正式的接口调试 ，边数边搜索的效果只能从报错信息来验证

  </div>
</template>

<script>
// 节流函数
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
export default {
  name: 'search',
  data() {
    return {
      title: '',
      hot: [],
      search: [],
      show: false,
    };
  },
  watch: {
    title() {
      delay(() => {
        this.fetchData();
      }, 300);
    },
  },
  methods: {
    hotSearch(item) {
      this.fetchData(item);
      this.title = item;
    },
    cancle() {
      this.search = [];
      this.show = false;
      this.title = '';
    },
    async fetchData(val) {
      // if (!this.title && !val) {
      //   return;
      // }
      const res = await this.axios({
        url: '/api/merchant/v1/articles',
        method: 'GET',
        params: { title: this.title || val },
      });
      this.search = res.data.list;
      // 显示 搜索结果为空 tips
      // if (!this.search.length) {
      //   this.show = true;
      // }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#search {
  padding: 0.3rem;
}
.header {
  display: flex;
  height: 0.62rem;
  position: relative;
}
.icon {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  top: 0.18rem;
  left: 0.3rem;
}
.search {
  -webkit-appearance: none;
  outline: none;
  width: 5.9rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #f6f6f6;
  padding-left: 0.6rem;
  font-size: 0.26rem;
  height: 0.62rem;
}
.btn {
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  height: 0.62rem;
  line-height: 0.62rem;
  color: #333;
}
</style>
