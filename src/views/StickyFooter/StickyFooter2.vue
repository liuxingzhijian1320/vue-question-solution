<template>
  <div id="StickyFooter-2">
    <!--<header class="header-2">sticky footer的效果（二）</header>-->

    <div class="content-2">

      <div class="main-2">


        <ul>
          <li>content > main > min-height:100vh;padding-bottom:1rem</li>
          <li>footer > margin-top:-1rem</li>
        </ul>


         <!--<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
      </div>

    </div>

    <footer class="footer-2">我是底部的信息</footer>


  </div>
</template>
<script></script>
<style lang='scss'>
  #StickyFooter-2 {
    min-height: 100vh;
    width: 100%;
    font-size:0.26rem;
    .content-2 {
      .main-2 {
        min-height:100vh;
        padding-bottom: 1rem;
      }
    }
    .footer-2 {
      height: 1rem;
      background: red;
      width: 100%;
      margin-top: -1rem;
      text-align: center;
      line-height:1rem;
    }

  }
</style>
