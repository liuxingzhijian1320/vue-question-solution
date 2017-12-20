<template>
  <transition name="modal">
    <div @click.stop="close" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          123
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
  name: 'vuexmodalstop',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    close() {
      this.$store.dispatch('toggleModal', {
        name: 'vuexmodalstop',
        status: false,
      });
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
  @import '../_common.scss';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-color: rgba(0, 0, 0, .5);*/
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  background-color: rgba(#000, 0.72);
  border-radius: 0.2rem;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
  transition: all .3s ease;
  /*font-family: Helvetica, Arial, sans-serif;*/
  padding-top: 0.77rem;
  .add {
    width: 2.21rem;
    margin: 0 auto;
  }
  .volume-info {
    color: #ffffff;
    font-size: 0.29rem;
    margin-top: 0.57rem;
    text-align: center;
  }
  .volume-tips {
    font-size: 0.24rem;
    text-align: center;
    color: rgba(#fff, 0.5);
    margin-top: 0.22rem;
  }
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
