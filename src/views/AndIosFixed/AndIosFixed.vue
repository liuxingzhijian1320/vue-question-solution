<template>
  <transition name='fade'>
    <div class="andiosfixed">
      <p class="title">移动端业务开发，iOS 下经常会有 fixed 元素和输入框(input 元素)同时存在的情况,但是fixed元素在有软键盘唤起的情况下</p>
      <div class="content">
        内容区域<br>
        <div>1.安卓的是出现在上面的，ios是fixed头部的部分是消失的</div>
      </div>
      <footer class="footer" id="footerFixed">
        <input type="text" @focus="addBodyClass" @blur="removeBodyClass" placeholder="Footer..."/>
        <button class="submit">提交</button>
      </footer>
    </div>
  </transition>
</template>
<script>
  import $ from 'jquery'
  export default {
    name:'andiosFixed',
    methods:{
      addBodyClass(){
        console.info('add')
        document.body.classList.add('full-body');
        console.info(document.body.classList)
      },
      removeBodyClass(){
        console.info('remove')
        document.body.classList.remove('full-body')
      },
    },
    beforeCreate(){
      //$('html').addClass('html-common');
      //$('body').addClass('body-common');
    },
    destroyed(){
      //$('html').removeClass('html-common');
      //$('body').removeClass('body-common');
    }
  }
</script>
<style lang='scss'>
  .andiosfixed {
    height: 100%;
    width: 100%;
    .title {
      text-align: center;
      background: red;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 1.5rem;
      display: block;
    }
    .content {
      margin-top: 1.5rem;

    }
    .footer {
      height: 34px;
      width: 100%;
      background: red;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      input {
        height: 34px;
        width: 80%;
      }
    }
  }
</style>
