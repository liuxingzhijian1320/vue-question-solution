<template>
  <div class="heart">
    <p class="demo1"></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.heart {
  padding: 1rem;
}
.demo1 {
  margin: 0 auto;
  width: 60px;
  height: 60px;
  position: relative;
  top: 20px;
  background: red;
  transform: rotate(45deg);
}
.demo1::before,
.demo1::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background: red;
  top: 0;
  left: -30px;
  border-radius: 50%;
}
.demo1::after {
  top: -30px;
  left: 0;
}
</style>
