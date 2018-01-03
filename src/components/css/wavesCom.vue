<template>
  <div class="waracaw">
    <h1>水波纹的按钮</h1>
    <button v-waves class="button">水波纹</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import '../../assets/style/waves.css';
.button {
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 0.1rem;
  -webkit-appearance: none;
}
.waracaw {
  margin-top: 0.4rem;
}
h1 {
  margin-bottom: 0.2rem;
}
</style>
