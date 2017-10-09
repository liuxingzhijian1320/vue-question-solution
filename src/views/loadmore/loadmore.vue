<template>
  <div class="loadmore">

    <header class="header">点击-加载更多</header>

    <ul class="ul">
      <li class="list" v-for="(item,index) in list">
        <div class="list-left">{{index + 1}}</div>
        <div class="list-center">
          <div class="msg">{{item.title}}</div>
          <div class="time">时间：{{item.create_at}}</div>
          <div class="author">作者：{{item.author.loginname}}</div>
        </div>
      </li>
    </ul>

    <div class="loadmore-icon" @click="loadmore" v-show="!showlaoding">加载中<i class="fa fa-cog fa-spin"></i></div>
    <div class="loading" v-show="showlaoding">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
    </div>

  </div>
</template>
<script>

  export default {
    name: 'loadmore',
    data() {
      return {
        list: [],
        page: 1,
        showlaoding: true
      }
    },
    methods: {
      getData(page) {
        this.showlaoding = true
        axios.get('https://cnodejs.org/api/v1/topics', {
          params: {
            page: page,
            limit: 10
          }
        })
          .then((res) => {
            if (res.status == 200) {
              let list = res.data.data
              list.map(n => this.list.push(n))
              this.list.forEach(n => {
                const d = new Date(n.create_at)
                n.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
              })
              this.showlaoding = false
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      loadmore() {

        // 拿到total的字段的，判断list的长度和total的比较的，判断的loading是否展示的出来

        this.getData(this.page += 1)

      }
    },
    mounted() {
      this.getData(this.page)
    }
  }
</script>
<style lang="scss" scoped>
  .loadmore {
    min-height: 100vh;
    width: 100%;
    padding-top: 0.8rem;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: #ffffff;
    font-size: 0.32rem;
  }

  .ul {
    width: 100%;
  }

  .list {
    padding: 0.3rem;
    display: flex;
    position: relative;
    &:last-child {
      &:after {
        display: none;
      }
    }
    &:after {
      content: '';
      display: block;
      left: 0.3rem;
      right: 0;
      bottom: 0;
      background-color: #dfdfdf;
      height: 1px;
      width: 100%;
      position: absolute;
    }
    .list-left {
      width: 0.5rem;
    }
    .list-center {
      flex: 1;
      padding-left: 0.2rem;
      margin-right: 0.5rem;
      .msg {
        font-size: 0.3rem;
        font-weight: 900;
      }
      .author {
        margin-top: 0.1rem;
      }
      .time {
        margin-top: 0.1rem;
      }
    }
  }

  .loadmore-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    padding: 0.2rem 0;
  }

  .loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(#000, .3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
