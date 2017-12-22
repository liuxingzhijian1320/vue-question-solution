<template>
  <div>
    dasd
  </div>
</template>

<script>
export default {
  name: 'getJson',
  methods: {
    fetchJson() {
      axios.get('http://10.0.1.129:2344/static/data.json').then(res => {
        console.info('获取的json的数据', res.data);
      });
    },
  },
  mounted() {
    this.fetchJson();
  },
};
</script>

<style>

</style>
