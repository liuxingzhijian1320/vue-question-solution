<template>
  <div id="localstorag">

    <form class="form" @submit.prevent>
      <div class="input-div">
        <label for="name">账户</label>
        <input type="text" @focus="change" id="name" class="input" name="name" v-model.trim="formData.name" placeholder="请输入收件人姓名">
      </div>

      <div class="input-div">
        <label for="name">号码</label>
        <input type="text" id="phone" class="input" name="phone" v-model.trim="formData.phone" placeholder="请输入收件人号码">
      </div>

      <div class="input-div">
        <label for="password">密码</label>
        <input type="password" id="password" class="input" name="password" v-model.trim="formData.password"
               placeholder="请输入密码">
      </div>

      <button class="save" type="submit" @click="save(formData)">保存信息</button>

    </form>
  </div>
</template>
<script>
  import validation from 'assets/script/validation'
  import { getUser } from 'assets/script/local.storage';
  import store from 'store'
  export default {
    name: 'localstorag',
    data(){
      return {
        formData: {
          name: '',
          password: ''
        },
        get_localstorge:getUser(),
      }
    },
    methods: {
      save(formData){
        if (this.Validate(formData)) {
          console.info('保存成功formData', formData)
          store.set('zhooson_user_token', formData)
        }
      },
      Validate(formData){
        if (validation.isEmpty(formData.name)) {
          alert('请输入姓名')
          return false
        } else if (validation.isEmpty(formData.phone)) {
          alert('请输入您的手机号')
          return false
        } else if (!validation.checkPhone(formData.phone)) {
          alert('您的手机号格式有误')
          return false
        } else if (validation.isEmpty(formData.password)) {
          alert('请输入密码')
          return false
        } else {
          return true
        }
      },
      change(e){
        console.info(11)
      }
    },
    created(){
      console.info(this.get_localstorge)
    }
  }
</script>
<style lang="scss" scoped>
  #localstorag {
    touch-action: none;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
      width: 80%;
      height: 60%;
      background-color: gray;
      .input-div {
        margin: 0.2rem;
      }
      .save {

      }
    }
  }

</style>
