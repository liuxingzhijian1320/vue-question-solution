<template>
  <div>

    <!-- alert -->
    <div class="alert" ref="alert_hook">刷新成功</div>

    <!-- header -->
    <div class="header">
      <h2 class="title">我是头部</h2>
    </div>

    <div class="list-wrapper" ref="list_content_hook">
      <div ref="list_warapper_cont">
        <!-- 顶部提示信息 -->
        <div class="top-tip">
          <span class="refresh-hook" ref="refresh_hook">下拉刷新</span>
        </div>
        <!-- 列表 -->
        <ul class="list-content list-content-hook" ref="list_content_hook_ul">
          <li class="list-item" v-for="(item,index) in new Array(10)">{{index}}</li>
        </ul>

        <!--底部的提示信息-->
        <div class="bottom-tip" @click="reloadData">
          <span class="loading-hook" ref="loading_hook">查看更多</span>
        </div>


      </div>
    </div>

    <footer class="footer">我是底部</footer>


  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        maxScrollY: ''
      }
    },
    mounted(){
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll(){
        let scroll = new BScroll(this.$refs.list_content_hook, {
          probeType: 3
        });

        //监听滚动事件
        scroll.on('scroll', (pos) => {
          /*maxScrollY:用滑动的页面的高度减掉固定窗口的差值，就是页面当前状态的滚动的值*/
          this.maxScrollY = this.$refs.list_warapper_cont.getBoundingClientRect().height - this.$refs.list_content_hook.getBoundingClientRect().height
          this.scrollY = pos.y;
          //console.info('y', pos.y.toFixed(2), this.maxScrollY)
          if (pos.y > 30) {
            this.$refs.refresh_hook.innerText = '释放立即刷新'
          }
        })

        /*
         * @ touchend:滑动结束的状态
         */

        //滑动结束效果
        scroll.on('touchend', (pos) => {
          if (pos.y > 30) {
            setTimeout(() => {
              /*
               * 这里发送ajax刷新数据
               * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
               */

              //恢复文本
              this.$refs.refresh_hook.innerText = '下拉刷新'
              //刷新成功的提示
              this.refreshAlert('刷新成功')
              // 刷新列表后,重新计算滚动区域高度
              scroll.refresh();
            }, 1000)
          } else if (-pos.y >= (this.maxScrollY - 30)) {
            //console.info(2233333333333333333333333333333333)
            this.$refs.loading_hook.innerText = '加载中 · · ·'

            setTimeout(() => {
              // 恢复文本值
              this.$refs.loading_hook.innerText = '查看更多';
              // 向列表添加数据
              this.reloadData();
              // 加载更多后,重新计算滚动区域高度
              scroll.refresh();
              console.info('加载过后的li数量',document.querySelectorAll('.list-item').length)
            }, 1000);

          }
        })


      },
      // 加载更多方法
      reloadData() {
        //实际是请求接口的，page++的作用

        var template = '<li class="list-item" style="background-color: red;width: 100%;height: 2rem;border-bottom: 3px solid #dfdfdf"></li>'
        // 向ul容器中添加内容
        this.$refs.list_content_hook_ul.innerHTML += template;
      },
      refreshAlert(text){
        let alert = this.$refs.alert_hook;
        text = text || '操作成功';
        alert.innerText = text;
        alert.style.display = 'block'
        setTimeout(() => {
          alert.style.display = 'none'
        }, 1000)
      },
    }
  }
</script>
<style lang="scss" scoped>

  .header {
    top: 0;
    height: 1.1rem;
    width: 100%;
    background: #35a251;
    position: fixed;
    left: 0;
    top: 0;
    .title {
      line-height: 1.1rem;
      color: #fff;
      text-align: center;
    }
  }

  .footer {
    height: 1rem;
    width: 100%;
    background-color: #222;
    line-height: 1rem;
    text-align: center;
    font-size: 0.36rem;
    color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .list-wrapper {
    position: fixed;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    width: 100%;
    background: #ccc;
    overflow: hidden;
  }

  /* 下拉、上拉提示信息 */
  .top-tip {
    position: absolute;
    top: -0.4rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 0.6rem;
    line-height: 0.4rem;
    text-align: center;
    color: #555;
  }

  .bottom-tip {
    width: 100%;
    height: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    color: #777;
    background: #f2f2f2;
  }

  /* 全局提示信息 */
  .alert {
    display: none;
    position: fixed;
    top: 1rem;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
    background: rgba(7, 17, 27, 0.7);
  }

  /*content*/
  .list-wrapper .list-content {
    background: #fff;
  }

  .list-wrapper .list-item {
    width: 100%;
    border-bottom: 3px solid #ddd;
    height: 2rem;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: #ffffff;
  }


</style>
