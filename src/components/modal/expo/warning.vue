<template>
  <transition name="modal">
      <div @click.stop="close" class="modal-mask">
        <div class="modal-outter">
          <div class="modal-wrapper">
            <div class="modal-container"  @click.stop>
              <div class="top-img"></div>
              <div class="modal-body">
                <div class="t1">您还没有购买票!</div>
                <div class="send">{{data.send}}</div>
                <button class="bt" @click="jumpHandler()">去抢票</button>
              </div>
            </div>

          </div>
        </div>

      </div>

  </transition>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations,
  } from 'vuex';

  export default {
    name: 'warning',
    data() {
      return {
        time: 0,
      };
    },
    computed: {
      ...mapState({
        data: state => state.modal.data || {},
        callback: state => state.modal.callback,
      }),
      ...mapGetters([]),
    },
    methods: {
      close() {
        this.$store.commit('closeModal');
      },
      jumpHandler() {
        this.close()
        this.callback && this.callback();
      },
    },
    mounted() {},
  };
</script>
<style scoped lang="scss">
  @import "../common";

  .modal-container {
    position: relative;
    padding: 1.60rem 0.0rem 0.72rem;
    .top-img{
      position: absolute;
      top: -0.76rem;
      left: 1.30rem;
      width: 3rem;
      height: 1.84rem;
      background-size: 100%;
    }
    .t1{
      text-align: center;
      &~.t1{
        margin-top: 0.1rem;
      }
    }

  }

  .send {
    color: red;
  }

  .modal-body {
    .bt {
      padding: 0;
      border: none;
      border-radius: 0.40rem;
      background-image: linear-gradient( 90deg, rgb(255,15,79) 0%, rgb(255,78,125) 100%);
      width: 2.88rem;
      height: 0.80rem;
      display: block;
      margin: 0.7rem auto 0;

      font-size: 0.28rem;
      color: rgb(254, 254, 254);
      line-height: 1.5;
      text-align: center;
    }
  }



</style>
