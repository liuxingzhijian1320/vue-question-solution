<template>
  <div id="searchLocation_container_wrapper">
    <div id="searchLocation_container"></div>
    <input type="text" v-model="search" id="search">
    <div id="panel"></div>
  </div>
</template>

<script>
export default {
  name: 'searchLocation',
  data() {
    return {
      search: '',
      map: null,
      result: [],
    };
  },
  watch: {
    search() {
      this.searchData(this.search);
    },
  },
  methods: {
    searchData(val) {
      this.map = new AMap.Map('searchLocation_container', {
        resizeEnable: true, //是否缩放
      });
      AMap.service(['AMap.PlaceSearch'], () => {
        var placeSearch = new AMap.PlaceSearch({
          //构造地点查询类
          pageSize: 5,
          pageIndex: 1,
          city: '010', //城市
          map: this.map,
          panel: 'panel',
        });
        //关键字查询
        placeSearch.search(val);
        console.log('可以在这里进行实时调试，输入代码后按Enter执行。');
      });
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
#searchLocation_container_wrapper {
  height: 100vh;
  width: 100%;
  position: relative;
  #searchLocation_container {
    width: 100%;
    height: 100%;
  }
  #search {
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 80%;
    border-radius: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #dfdfdf;
    padding: 0 0.5rem;
  }
  #panel {
    position: absolute;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
  }
}
</style>
