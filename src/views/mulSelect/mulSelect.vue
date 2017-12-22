<template>
  <article id="select">
    <div class="date">08月09日</div>
    <ul class="reservetime-ul">
      <li class="reservetime-li" :class="{status:item.status == 1,active:item.active }"
        :key="index" v-for="(item,index) in data.lists1" @click="clickSelect(data.lists1,item,index)">
        <div class="yiyue" v-if="!item.status" v-text="item.date"></div>
        <div class="weiyue" v-if="item.status">
          <div class="info" v-text="item.date"></div>
          <div class="info">已约满</div>
        </div>
      </li>
    </ul>
    <div class="line"></div>
    <div class="date">08月10日</div>
    <ul class="reservetime-ul">
      <li class="reservetime-li" :class="{status:item.status,active:item.active }" v-for="(item,index) in data.lists2"
        @click="clickSelect(data.lists2,item,index)" :key="index">
        <div class="yiyue" v-if="!item.status" v-text="item.date"></div>
        <div class="weiyue" v-if="item.status">
          <div class="info" v-text="item.date"></div>
          <div class="info">已约满</div>
        </div>
      </li>
    </ul>
    <div class="reserve" @click="reserveHandler" :class="{btnActive:isSelect}">确认预约</div>
  </article>
</template>
<script>
import { MessageBox, Indicator, Picker, Popup } from 'mint-ui';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'exposelect',
  data() {
    return {
      // data: {},
      data: {
        lists1: [
          {
            date: '10:00-12:00',
            status: 0,
            active: false,
          },
          {
            date: '13:00-15:00',
            status: 0,
            active: false,
          },
          {
            date: '15:00-17:00',
            status: 0,
            active: false,
          },
        ],
        lists2: [
          {
            date: '10:00-12:00',
            status: 0,
            active: false,
          },
          {
            date: '13:00-15:00',
            status: 0,
            active: false,
          },
          {
            date: '15:00-17:00',
            status: 0,
            active: false,
          },
        ],
        date: '08月09日 13:00-15:00',
        is_buy_ticket: 0,
        reserve_num: 5,
      },
      btnActive: false,
    };
  },
  computed: {
    isSelect() {
      let ret = false;
      if (this.data.lists1) {
        ret =
          ret ||
          this.data.lists1.some(function(item) {
            return item.active;
          });
      }
      if (this.data.lists2) {
        ret =
          ret ||
          this.data.lists2.some(function(item) {
            return item.active;
          });
      }
      return ret;
    },
  },
  methods: {
    reserveHandler() {
      if (this.isSelect) {
        //lists的active:true的状态
        let arr1 = this.data.lists1.filter(n => n.active == true);
        let arr2 = this.data.lists2.filter(n => n.active == true);

        if (arr1.length != 0) {
          arr1 = '08月09日 ' + arr1[0].date;
        }
        if (arr2.length != 0) {
          arr2 = '08月10日 ' + arr2[0].date;
        }

        let sendData;
        if (Array.isArray(arr1)) {
          sendData = arr2;
        } else if (Array.isArray(arr2)) {
          sendData = arr1;
        } else {
          sendData = arr1 + ',' + arr2;
        }
      }
    },
    clickSelect(list, item, index) {
      if (item.status == 0) {
        //console.info('原始',item.active);
        let cache = item.active;
        list.forEach(n => {
          n.active = false;
        });
        item.active = !cache;
        //console.info('更改...',item.active);
      }
    },
    getData() {
      // let res = await this.fetch({
      //   url: '/api/expo',
      // });
      let res = this.data;
      console.info(22, this.data.lists1);
      res.lists1.forEach(n => Object.assign(n, { active: false }));
      res.lists2.forEach(n => Object.assign(n, { active: false }));
      this.data = res.data;
      window.aa = res.data;
    },
  },
  // activated() {
  //   this.getData();
  // },
  deactivated() {},
  mounted() {
    this.getData();
  },
};
</script>
<style lang="scss">
#select {
  width: 100%;
  min-height: 100vh;
  background-color: #ffebee;
  padding: 0.95rem 0.3rem 0 0.3rem;
  text-align: center;
  color: #333333;
  .line {
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #ffd1d8;
    margin: 0.5rem 0 0.75rem 0;
  }
  .title {
    font-size: 0.38rem;
    font-weight: 900;
    margin-bottom: 0.2rem;
  }
  .subtitle {
    font-size: 0.26rem;
    margin-bottom: 1.1rem;
  }
  .date {
    font-size: 0.3rem;
    position: relative;
    font-weight: 900;
    &:after {
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      background-color: #333;
      left: 2.5rem;
      top: 0.12rem;
      border-radius: 50%;
    }
    &:before {
      border-radius: 50%;
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      background-color: #333;
      right: 2.5rem;
      top: 0.12rem;
    }
  }
  .reservetime-ul {
    margin-top: 0.4rem;
    width: 100%;
    height: 1.5rem;

    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;

    .reservetime-li {
      font-size: 0.2rem;
      width: 2.2rem;
      border-radius: 0.12rem;
      background-color: #fff;
      box-shadow: 0px 0.05rem 0.2rem 0px rgba(254, 185, 196, 0.24);
      align-items: center;
      display: flex;
      justify-content: center;
      .info {
        margin-top: 0.1rem;
      }
      .time {
        display: inline-block;
        width: 100%;
      }
      &.status {
        background-color: #ffd8de;
        color: #ff225d;
      }
      &.active {
        background-color: #ff225d;
        color: #fff;
      }
    }
  }
  .reserve {
    box-shadow: 0px 0.05rem 0.2rem 0px rgba(254, 185, 196, 0.24);
    width: 6.9rem;
    height: 0.96rem;
    border-radius: 0.48rem;
    background-color: #fff;
    margin-top: 1.02rem;
    color: #999999;
    font-size: 0.3rem;
    line-height: 0.96rem;
    &.btnActive {
      color: #ff225d;
    }
  }
}
</style>
