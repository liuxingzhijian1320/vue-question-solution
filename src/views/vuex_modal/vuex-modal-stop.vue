<template>
  <div class="vuex-modal-stop">
    <div class="btn" @click="reserve">预约点击</div>
    <h2>当弹出层出来时候，背景是不能滚动</h2>
    <div class="list" v-for="item in new Array(5)"></div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'vuex-modal-stop',
  computed: {
    ...mapState({
      modalStatus: state => state.modal.status,
      modalName: state => state.modal.name,
    }),
  },
  watch: {
    modalStatus(val) {
      console.log(11, val);
      this.$nextTick(() => {
        if (this.modalName == 'vuexmodalstop') {
          if (val) {
            document.body.classList.add('stop-scroll');
          } else {
            document.body.classList.remove('stop-scroll');
            //document.body.removeEventListener('touchstart',this.disableScroll)
          }
        }
      });
    },
  },
  methods: {
    reserve() {
      this.$store.dispatch('toggleModal', {
        name: 'vuexmodalstop',
        status: true,
      });
    },
  },
};
</script>
<style lang="scss">
.html-vuexmodalstop {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.btn {
  width: 4rem;
  height: 1rem;
  margin: 0 auto;
  background-color: red;
  line-height: 1rem;
  color: #ffffff;
  text-align: center;
  font-weight: 900;
}
.list {
  height: 4rem;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: #d93f30;
}
</style>
