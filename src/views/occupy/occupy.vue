<template>
  <div id="occupy">

    <div class="methods">
      1.npm install vue-occupy <br>
      2.文章链接地址 https://segmentfault.com/a/1190000008511102 <br>
      3.import VueOccupy from 'vue-occupy' <br>
      Vue.use(VueOccupy) <br>
      <br>
    </div>


    <div style="width:100%;height:1rem">
      <div v-occupy="{ data: content, config }"></div>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'occupy',
    data() {
      return {
        content: '',
        config: {
          width: '100%',
          height: '1rem',
          background: 'red'
        }
      }
    },
    mounted() {

      setTimeout(() => {
        this.content = '在fetch方法返回数据之前，这个节点会被一个矩形色块所占据。当数据被成功返回后，色块将会被替换成content的内容。'
      }, 500)


    }
  }
</script>
<style lang="scss" scoped>

</style>
