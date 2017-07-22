<template>
  <div id="StickyFooter-wrapper-1">

    <div class="StickyFooter-header-1">sticky footer的效果（一）</div>
    <div class="StickyFooter-content-1">
      1.进入这个组件，beforeCreate JQ创建一个class的名称，使其的组件的宽，高为100%<br>
      2.wrapper为relative，min-height:100%。。。footer为absolute，bottom：0。。<br>
      3.离开组件，销毁class的名称<br>

      注意：如果fixed的话，则定位的手机屏幕的底部的
            <!-- <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> -->
    </div>
    <footer class="StickyFooter-close-1">我是底部的信息</footer>

  </div>
</template>
<script></script>
<style lang='scss'>
  #StickyFooter-wrapper-1 {
    min-height: 100vh;
    width: 100%;
    font-size:0.26rem;
    .StickyFooter-header-1 {
      width: 100%;
      text-align: center;
      background: gray;
    }
    .StickyFooter-content-1 {
      background: #ddd;
    }
    .StickyFooter-close-1 {
      position: absolute;
      bottom: 0;
      height: 1rem;
      background: red;
      width: 100%;
    }
  }
</style>
