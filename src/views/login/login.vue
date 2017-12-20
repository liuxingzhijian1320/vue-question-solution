<template>
  <div class="login">
    <div class="conter">
      <div class="coordinates-icon">
        <div class="coordinates topAct">
          <img src="./images/login.png" />
        </div>
        <div class="circle-1-1 circle-show-2"></div>
        <div class="circle-2-2 circle-show-1"></div>
        <div class="circle-3-3 circle-show"></div>
      </div>
    </div>

    <form class="form" @click.submit.prevent>
      <div class="input-div">
        <label for="name" class="label">姓名</label>
        <input type="text" id="name" class="input" name="name" v-model.trim='formData.name'
          placeholder="姓名">
      </div>
      <div class="input-div">
        <label for="phone" class="label">手机</label>
        <input type="text" id="phone" class="input" name="phone" v-model.trim='formData.phone'
          placeholder="手机号">
      </div>

      <button class="submit" type="submit" @click="loginHandler(formData)">登录</button>
    </form>

  </div>
</template>
<script>
import validation from 'assets/script/validation';
import { getLogin } from 'assets/script/local.storage';
import { MessageBox } from 'mint-ui';
import store from 'store';
export default {
  name: 'login',
  data() {
    return {
      //        formData:getLogin()
      formData: {
        name: '',
        phone: '',
      },
    };
  },
  methods: {
    Validate(formData) {
      if (validation.isEmpty(formData.name)) {
        MessageBox.alert('请输入姓名');
        return false;
      } else if (validation.isEmpty(formData.phone)) {
        MessageBox.alert('请输入您的手机号');
        return false;
      } else if (!validation.checkPhone(formData.phone)) {
        MessageBox.alert('您的手机号格式有误');
        return false;
      } else {
        return true;
      }
    },
    loginHandler(formData) {
      if (this.Validate(formData)) {
        store.set('zhooson_login_token', formData);
        MessageBox.alert('登录成功').then(() => {
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect,
          });
        });
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.login {
  min-height: 100vh;
  width: 100%;
  background-color: #333;
  padding: 0 0.2rem;
  .conter {
    padding: 2rem 0.3rem 0rem 0.3rem;
  }

  .input-div {
    height: 1rem;
    display: flex;
    width: 100%;
    font-size: 0.28rem;
    margin-bottom: 0.2rem;

    .label {
      width: 1rem;
      color: #ffffff;
      line-height: 1rem;
    }
    .input {
      flex: 1;
      padding-left: 0.2rem;
      -webkit-appearance: none;
    }
  }

  .submit {
    width: 100%;
    height: 1rem;
    background-color: red;
    border: none;
    margin-top: 1rem;
    border-radius: 0.5rem;
  }

  .coordinates-icon {
    width: 4rem;
    height: 2.5rem;
    margin: 0.5rem auto;
    position: relative;
    .coordinates {
      width: 1.5rem;
      overflow: hidden;
      position: absolute;
      z-index: 8;
      left: 32%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .circle-1-1 {
      width: 100%;
      height: 1.5rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 100%;
      background-color: #3a3d4a;
      position: absolute;
      bottom: 0;
      z-index: 1;
      opacity: 0;
    }
    .circle-2-2 {
      width: 2.3rem;
      height: 0.8rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 100%;
      background-color: #4e515c;
      left: 75%;
      margin-left: -2.17rem;
      bottom: 0.35rem;
      position: absolute;
      z-index: 2;
      opacity: 0;
    }
    .circle-3-3 {
      width: 1.3rem;
      height: 0.5rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      background-color: #71747d;
      z-index: 3;
      left: 35%;
      margin-left: -0.08rem;
      bottom: 0.5rem;
      position: absolute;
      opacity: 0;
    }
  }
  .topAct {
    animation: topAct 3s ease-in-out infinite;
    -webkit-animation: topAct 3s ease-in-out infinite;
  }
  @keyframes topAct {
    0% {
      top: -100px;
    }
    50% {
      top: -30px;
    }
    100% {
      top: -100px;
    }
  }

  .circle-show {
    animation: circleShow 3s ease-in-out infinite 1s;
    -webkit-animation: circleShow 3s ease-in-out infinite 1s;
    -moz-animation: circleShow 3s ease-in-out infinite 1s;
    -ms-animation: circleShow 3s ease-in-out infinite 1s;
    -o-animation: circleShow 3s ease-in-out infinite 1s;
  }
  @keyframes circleShow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .circle-show-1 {
    animation: circleShow1 3s ease-in-out infinite 1.2s;
    -webkit-animation: circleShow1 3s ease-in-out infinite 1.2s;
    -moz-animation: circleShow1 3s ease-in-out infinite 1.2s;
    -ms-animation: circleShow1 3s ease-in-out infinite 1.2s;
    -o-animation: circleShow1 3s ease-in-out infinite 1.2s;
  }
  @keyframes circleShow1 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .circle-show-2 {
    animation: circleShow2 3s ease-in-out infinite 1.4s;
    -webkit-animation: circleShow2 3s ease-in-out infinite 1.4s;
    -moz-animation: circleShow2 3s ease-in-out infinite 1.4s;
    -ms-animation: circleShow2 3s ease-in-out infinite 1.4s;
    -o-animation: circleShow2 3s ease-in-out infinite 1.4s;
  }
  @keyframes circleShow2 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
