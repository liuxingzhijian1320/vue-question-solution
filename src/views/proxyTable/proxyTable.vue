<template>
  <div class="proxyTable">
    <div class="getData" @click="getData">获取数据</div>
    <div class="getData" @click="getDataSecond">获取数据</div>
    <div class="getData" @click="getDatathree">获取数据</div>

  </div>
</template>
<script>
  export default {
    name: 'proxyTable',
    methods: {
      getData() {
        axios.get('/api/v1/topics', {
          params: {
            page: 20,
            limit: 10
          }
        })
          .then(function (response) {
            //console.log(response);
          })
          .catch(function (error) {
            //console.log(error);
          });
      },
      getDatathree() {
        axios.get('/baseapi/table')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>

  .getData {
    width: 100%;
    height: 1rem;
    background-color: #000;
    color: #ffffff;
    margin-top: 1rem;
  }
</style>
