<template>
  <div class="test-progress">
    <div id="container"></div>
  </div>
</template>
<script>
  var ProgressBar = require('progressbar.js')
  export default {
    methods: {
      init(){
        var bar = new ProgressBar.Circle(container, {
          strokeWidth: 6,
          easing: 'easeInOut',
          duration: 1400,
          color: '#FFEA82',
          trailColor: '#000',
          trailWidth: 1,
          svgStyle: null,
          text:{
            value:'0'
          },
          from: {color: '#FFEA82'},
          to: {color: '#ED6A5A'},
          // Set default step function for all animate calls
          step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
              bar.setText('');
            } else {
              bar.setText(value);
            }
            bar.text.style.color = state.color;
          },

        });
        bar.text.style.fontSize = '2rem';

        bar.animate(1.0);  // Number from 0.0 to 1.0
      }
    },
    mounted(){
      this.init()
    }
  }
</script>
<style lang="scss" scoped>
  #container {
    margin: 20px;
    width: 200px;
    height: 200px;
  }


</style>
