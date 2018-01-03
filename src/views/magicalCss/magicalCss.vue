<template>
  <div id="effect">
    <box-shadow></box-shadow>

    <hr>
    <waves-com></waves-com>
    <hr>

    <tips></tips>
    <hr>

    <heart></heart>
    <hr>

    <quadrangle></quadrangle>
    <hr>

  </div>
</template>
<script>
import boxShadow from 'components/css/boxShadow';
import wavesCom from 'components/css/wavesCom';
import tips from 'components/css/tips';
import heart from 'components/css/heart';
import quadrangle from 'components/css/quadrangle';
export default {
  data() {
    return {};
  },
  components: {
    boxShadow,
    wavesCom,
    tips,
    heart,
    quadrangle,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/waves.css';

#effect {
  text-align: center;
  width: 100%;
  padding: 0.3rem;
}
</style>
