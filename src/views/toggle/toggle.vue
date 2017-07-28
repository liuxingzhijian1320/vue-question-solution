<template>
  <div class="reward">
    <div v-for="item in list" class="place" :class="{ active: item.show }" @click.stop="item.show = !item.show">
      <div class="meeting-name">
        <h5 class="name">{{item.name}}</h5>
        <div class="more"></div>
      </div>
      <div class="user-wrap">
        <div @click.stop="select = user" class="user" :class="{ active: select == user }" v-for="user in item.users">{{user.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'reward',
    data() {
      return {
        select: {},
        list: [{
          name: 123,
          show: false,
          users: [{
            name: 'asdf',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, ],
        }, {
          name: 456,
          show: false,
          users: [{
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, ],
        }, {
          name: 678,
          show: false,
          users: [{
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, ],
        }, {
          name: 890,
          show: false,
          users: [{
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, {
            name: '小熊戴欣',
          }, ],
        }, ],
      }
    }
  };

</script>
<style lang="scss" scoped>
  .reward {
    min-height: 100vh;
    width:100%;
    background-color: #222;
  }
  .place {
    padding-left: 0.32rem;
    /*border-bottom: 1px solid #2e2e2e;*/
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: calc(100% - 0.32rem);
      height: 1px;
      right: 0;
      bottom: 0;
      background: #2e2e2e;
    }
    &.active {
      .more {
        transform: rotate(90deg);
      }
      .user-wrap {
        max-height: 500px;
        visibility: visible;
        transition: all 0.5s linear;
      }
    }
  }

  .meeting-name {
    display: flex;
    align-items: center;
    padding: 0.4rem 0.3rem 0.34rem 0;
    &::before {
      content: '';
      display: inline-block;
      width: 0.03rem;
      height: 0.3rem;
      background: red;
      border: 0.03rem;
      margin-right: 0.19rem;
    }
    .name {
      font-size: 0.32rem;
      color: #fff;
      flex: 1;
    }
    .more {
      width: 0.38rem;
      height: 0.38rem;
      /*border-radius: 50%;*/
      background-image: url('./images/more@2x.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.2s ease-in;
    }
  }


  .user-wrap {
    width: 100%;
    max-height: 0;
    visibility: hidden;
    display: flex;
    overflow: hidden;
    padding-right: 0.32rem;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    transition: all 0.2s linear;
    .user {
      width: 2.1rem;
      color: #333333;
      height: 0.68rem;
      line-height: 0.68rem;
      background: #fff;
      font-size: 0.28rem;
      border-radius: 0.34rem;
      text-align: center;
      margin-bottom: 0.3rem;
      /*display: flex;*/
      /*align-items: center;*/
      &.active {
        background: #e41a55;
        color: #fff;
      }
    }
  }

</style>
