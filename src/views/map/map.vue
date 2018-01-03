<template>
  <div class="map">

    <router-link :to="{name:'map1'}" tag="div" class="brn">东方明珠</router-link>

    <router-link :to="{name:'map2'}" tag="div" class="brn">显示当前的位置</router-link>

    <router-link :to="{name:'searchLocation'}" tag="div" class="brn">搜索与定位</router-link>

  </div>
</template>
<script>
export default {
  name: 'mapContainer',
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.map {
  padding: 0.5rem 0.3rem;
}
.brn {
  width: 5rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  border-radius: 0.1rem;
  margin-bottom: 0.3rem;
}
</style>
