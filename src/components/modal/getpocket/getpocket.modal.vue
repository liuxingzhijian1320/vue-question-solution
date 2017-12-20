<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="close" @click="close">
            <img src="./images/btn_close@2x.png" alt="" class="btn_close">
          </div>
          <div class="top">
            <div class="title">确认个人信息</div>
            <div class="subtitle">RED POCKET COMING</div>

            <input type="text" class="phone input" name="phone" v-model.trim="formData.phone" placeholder="请输入您的手机号码">

            <div class="code">
              <input class="code-l input" name="code" v-model.trim="formData.code">
              <button class="code-r input" @click="getCode(formData)" :class="{btnBackground:!show}" :disabled="!show">
                <span v-show="show">获取验证码</span>
                <span v-show="!show">{{count}} 秒</span>
              </button>
            </div>

          </div>
          <div class="bottom" @click="submit(formData)">立即领取</div>


        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TIME_COUNT = 60;
  export default{
    name: 'getpocketmodal',
    data(){
      return {
        formData: {
          phone: '',
          code: ''
        },
        show: true,
        count: '',
        timer: null,
      }
    },
    activated(){


    },
    methods: {
      close() {
        this.$store.commit('closeModal');
      },
      //获取验证码
      async getCode(formData){
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }


      },

      //提交数据
      async submit(formData){
        this.close()
      },

    }
  }
</script>
<style scoped lang="scss">
  @import '../../../assets/style/mixin.scss';

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 6.7rem;
    height: 6.45rem;
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
  }

  .top {
    height: 5.05rem;
    width: 100%;
    background-color: #fff;
    padding: 0.5rem 0.4rem 0 0.4rem;
    text-align: center;
  }

  .title {
    color: #f74875;
    font-weight: 900;
    font-size: 0.46rem;
  }

  .subtitle {
    color: #c8c8c8;
    font-size: 0.24rem;
    margin-top: 0.1rem;
    margin-bottom: 0.4rem;
  }

  .input {
    width: 100%;
    height: 1rem;
    border: 1px solid #dfdfdf;
    line-height: 1rem;
    font-size: 0.3rem;
    &:focus {
      border: 1px solid #f74875;
    }
  }

  .phone {
    padding-left: 0.2rem;
    @include hbPlaceholder {
      color: #d7d7d7;
    }
  }

  .code {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.25rem;
    .code-l {
      width: 2.8rem;
      padding-left: 0.2rem;
    }
    .code-r {
      width: 2.8rem;
      height: 1rem;
      background-color: #218ff6;
      color: #ffffff;
      border: none;
      &.btnBackground {
        background-color: #d1d1d1;
      }
    }
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.3rem;
    .btn_close {
      width: 0.28rem;
    }
  }

  .bottom {
    height: 1.1rem;
    width: 100%;
    background-color: #f74875;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.38rem;
    line-height: 1.1rem;
    text-align: center;
    font-weight: 900;
    color: #ffffff;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
