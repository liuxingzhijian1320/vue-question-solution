<template>
  <article id="redpacket">
    <div class="hot">
      <img src="./images/eye@2x.png" alt="" class="eye">
      <span class="info">人气15425人</span>
    </div>

    <div class="packert" @click="OpenPocketModel"></div>

    <div class="phone-container">
      <ul class="phone" ref="phonewrapper">
        <li class="phone-list" v-for="item in phoneList">
          <div class="phone-l">{{item.phone.substring(0, 3) + "****" + item.phone.substring(7, 11)}}</div>
          <div class="phone-r">获得<span class="price">{{item.price}}</span>元</div>
        </li>
        <li class="phone-list" v-for="item in phoneList">
          <div class="phone-l">{{item.phone.substring(0, 3) + "****" + item.phone.substring(7, 11)}}</div>
          <div class="phone-r">获得<span class="price">{{item.price}}</span>元</div>
        </li>

      </ul>
    </div>

  </article>
</template>
<script>
  export default {
    name: 'redpacket',
    data(){
      return {
        phoneList: [
          { phone: '18715023019', price: 100 },
          { phone: '18715023019', price: 2 }
        ]
      }
    },
    methods: {
      OpenPocketModel(){
        this.$store.dispatch('toggleModal', {
          name: 'getpocketmodal',
          status: true
        });
      },

    },

    activated(){
      //动态计算列表运动的时间
      this.$refs.phonewrapper.style.animationDuration = `${1.3 * this.phoneList.length * 2 }s`;
      this.$refs.phonewrapper.style.webkitAnimationDuration = `${1.3 * this.phoneList.length * 2 }s`;
    }
  };
</script>
<style lang="scss">

  #redpacket {
    width: 100%;
    min-height: 100vh;
    background-color: #c11312;
    background-image: url('./images/red-packet-bg.jpg');
    background-size: cover;
    padding-top: 2.6rem;
    .hot {
      font-size: 0.28rem;
      background-color: rgba(0, 0, 0, 0.102);
      width: 3.6rem;
      height: 0.56rem;
      border-radius: 0.28rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0.08rem;
      .eye {
        width: 0.33rem;
        display: inline-block;
        margin-right: 0.1rem;
        margin-top: -0.07rem;
      }
      .info {
        font-size: 0.28rem;
        color: #fde887;
      }

    }
    .packert {
      background-image: url('./images/redpockage.png');
      width: 7.50rem;
      height: 5.1rem;
      background-size: cover;
      margin: 0.8rem auto 0.4rem auto;
    }
    .phone-container {
      height: 1.6rem;
      overflow: hidden;
      position: relative;
    }

    .phone {
      animation-name: aniamteTop;
      /*animation-duration: 5s;*/
      animation-timing-function:linear;
      animation-iteration-count:infinite;
      animation-fill-mode:forwards;


      .phone-list {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0.55rem;
        font-size: 0.26rem;
        color: #ffffff;
        line-height:0.55rem;
        .phone-l {
          margin-right: 0.2rem;
        }
        .phone-r {
          .price {
            display: inline-block;
            width:0.5rem;
            text-align: center;
          }
        }
      }
    }

  }

  @keyframes aniamteTop {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-50%);
    }
  }


</style>
