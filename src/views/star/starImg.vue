<template>
  <i style="margin: 0 3px;" :class="icon" @click="choose"></i>
</template>

<script>
  export default{
    props: {
      index: Number, //当前的星星的index
      chooseIndex: Number
    },
    data(){
      return {
        icon: 'icon-star-chosen'
      }
    },
    watch: { //实时监听的chooseIndex
      chooseIndex: function () {
        if (this.chooseIndex >= this.index) {
          this.icon = 'icon-star-chosen'
        } else {
          this.icon = 'icon-star-disabled'
        }
      },
    },
    //父组件通过v-bind:绑定参数传给子组件，子组件通过props接受这个参数。
    //在组件的最底层开始写事件，由最底层组件逐步向上$emit事件流，
    // 并携带相应参数，最后在父组件内完成总的数据处理。
    methods: {
      choose(){
        //点击获取当前的index的，$emit派发事件流给judgeStart的 父组件的
        this.$emit('choose', this.index)
        //console.info(this.index)
      }
    },
  }
</script>

<style>
  .icon-star-chosen {
    color: #f5e265;
    font-size: 20px;
    line-height: 30px;
  }

  .icon-star-disabled {
    font-size: 20px;
    color: #bbb;
    line-height: 30px;
  }
</style>
<style scoped>

</style>
