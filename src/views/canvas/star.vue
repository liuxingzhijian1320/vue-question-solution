<template>
  <div class="star">
    <canvas id="space"></canvas>
  </div>
</template>
<script>
import { drawSpacePrepare } from './space';
export default {
  name: 'star',
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      drawSpacePrepare();
    });
  },
};
</script>
<style lang="scss" scoped>
.star {
  height: 100vh;
  width: 100%;
}
#space {
  width: 100%;
  height: 100%;
}
</style>
