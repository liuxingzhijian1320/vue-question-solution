<template>
  <div class="tips">
    <h1>hover的时候出现tips的效果</h1>
    <div data="这是一个小程序的插件" class='wxParse'>鼠标放在这行文字上面</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tips,
h1 {
  margin: 0.3rem 0;
}
.wxParse {
  position: relative;
  cursor: pointer;
}
.wxParse::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  z-index: 1;
  left: 30%;
  bottom: 90%;
  border-top: 10px solid #4da1ff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  opacity: 0;
  transition: all 0.4s;
  transform: translateY(-10px);
}
.wxParse::after {
  content: attr(data);
  position: absolute;
  left: 20%;
  bottom: 130%;
  background: #4da1ff;
  padding: 5px 15px;
  white-space: nowrap;
  color: #333;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.4s;
  transform: translateY(-10px);
}
.wxParse:hover::before {
  opacity: 1;
  transform: translateY(0px);
}
.wxParse:hover::after {
  opacity: 1;
  transform: translateY(0px);
}
</style>
