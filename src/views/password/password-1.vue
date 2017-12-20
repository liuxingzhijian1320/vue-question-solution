<template>
  <form @submit.prevent="submit" class="form">
    <div class="text-wrapper">请输入幻熊领取码</div>
    <div class="input-wrapper">
      <!--<div class="box" v-for="(item, index) in list" :class="{active: index === num.length }">{{num[index] && '*'}}-->
      <div class="box" v-for="(item, index) in list" :class="{active: index === num.length }">{{num[index]}}
      </div>
      <label class="label">
        <input ref="input" pattern="[0-9]*" type="number"
               onKeyUp="if (this.value.length >= 4) { this.value = this.value.slice(0, 4) }"
               maxlength="4" @input="sliceNum" class="hidden-input">
      </label>
    </div>
    <button class="bt" type="submit">确认领取</button>
  </form>
</template>
<script>

  const LEN = 4;
  export default {
    name: 'password-1',
    data() {
      return {
        num: '',
        code: '',
        list: new Array(LEN),
      };
    },
    components: {},
    watch: {},
    computed: {},
    activated() {
    },
    methods: {
      sliceNum(e){   //@input的事件  @input = 'sliceNum'
        let code = e.target.value;
        this.num = code.slice(0, 4)
        this.code = this.num;
        console.info(this.num, this.code)
      },

      submit(){
        console.log(this.code)
      },

    },

  };
</script>
<style lang="scss">

  .form {
    background: #ffffff;
    height: 100%;
    .text-wrapper {
      text-align: center;
      font-size: 0.36rem;
      color: rgb(51, 51, 51);
      font-weight: bold;
      line-height: 1.611;
      margin-top: 1.2rem;

    }
    .input-wrapper {
      width: 5rem;
      height: 1.1rem;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 0.7rem;
      position: relative;
      .box {
        width: 1.1rem;
        height: 1.1rem;
        background-color: #f8f8f8;
        border-radius: 0.07rem;
        border: 1px solid #dfdfdf;
        font-size: 0.72rem;
        color: rgb(51, 51, 51);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        &.active {
          border-color: #c29957;
        }

      }
      .label {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
      }
      .hidden-input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: -100%;
        top: -100%;
      }
    }
    .bt {
      background-image: linear-gradient(-90deg, rgb(181, 146, 88) 0%, rgb(224, 201, 149) 100%);
      box-shadow: 0px 8px 16px 0px rgba(89, 79, 39, 0.2);
      width: 3.5rem;
      height: 0.9rem;
      border: none;
      color: #ffffff;
      padding: 0;
      display: block;
      margin: 0 auto;
      margin-top: 1.1rem;
    }
  }


</style>
