<template>
  <component v-show="status" id="modal" v-bind:is="name">
    <!-- 组件在 name 变化时改变！ -->
  </component>
</template>
<script>
import countdown from './countdown/countdown.vue';
import warning from './expo/warning.vue';
import getpocketmodal from './getpocket/getpocket.modal.vue';

import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';

// 弹出静音
// this.$store.dispatch('toggleModal', {
//   name: 'volume',
//   status: true
// });

// 关闭静音
// this.$store.dispatch('toggleModal', {
//   name: 'volume',
//   status: true
// });

export default {
  name: 'modal',
  computed: {
    ...mapState({
      status: state => state.modal.status,
      name: state => state.modal.name,
    }),
  },
  components: {
    countdown: countdown,
    warning: warning,
    getpocketmodal: getpocketmodal,

  },
};
</script>
<style lang="scss">
#modal {
  position: fixed;
}
</style>
