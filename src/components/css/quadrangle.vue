<template>
  <div class="quadrangle">
    <p class="demo2"></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quadrangle {
  padding: 1rem;
}

.demo2 {
  margin: 0 auto;
  width: 160px;
  padding: 60px;
  position: relative;
}
.demo2::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: perspective(40px) scaleY(1.3) rotateX(5deg);
  transform-origin: bottom;
  background: dodgerblue;
  z-index: -1;
}
</style>
