<style lang="scss" scoped>
.content {
  padding: 30px;
  font-size: 18px;
  h5 {
    color: #333;
    margin-bottom: 20px;
  }
}
.title {
  font-size: 16px;
  padding-bottom: 20px;
}
.item {
  margin-bottom: 30px;
}
.spec-item {
  display: inline-block;
  margin-right: 10px;
}
.spec-item span {
  border: 1px solid #eee;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px;
}
.spec-item .active {
  border: 1px solid red;
  background-color: red;
  color: #fff;
}
.spec-item .disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>
<template>
  <div class="content">
    <h5>前端SKU实现</h5>
    <div class="item" v-for="(item,index) in specList" :key="index">
      <div class='title'>{{item.title}}</div>
      <div class='spec'>
        <div class='spec-item' v-for="(code,codeindex) in item.list"
          :key="code.name + codeindex">
          <span @click="changeSpec(item.title, code.name, code.able)"
            :class="[selectSpec[item.title] === code.name ? 'active' : '' , code.able? '' : 'disabled']">{{code.name}}</span>
        </div>
      </div>
    </div>

    <div class="item">
      <div class='title'>数量</div>
      <div class='spec'>
        <button @click="addPlus(1)">减少</button>
        <button>{{ count }}</button>
        <button @click="addPlus(2)">增加</button>
      </div>
    </div>

    <div class="selected" v-if="isShowSpecTitle">
      ¥： {{ result.price }}
      <br>
      已选规格：
      <div class="select-box" v-for="(item,index) in specList" :key="index">
        {{ item.title }}：{{ selectSpec[item.title] }}
      </div>
    </div>
  </div>

</template>
<script>
import { specList, skuList } from "./data";

export default {
  name: "App",
  data() {
    return {
      count: 1,
      specList: [],
      skuList: [],
      selectSpec: {}, // 选择数据的对象 将已选的数据放在这个对象里面记录下来  用对象的好处在下面深拷贝处就能体验到了
      result: {},
      isShowSpecTitle: false,
    };
  },

  created() {
    // 模拟异步请求数据
    setTimeout(() => {
      // 对返回的数据处理
      this.skuList = skuList;
      console.log("skuList", this.skuList);
      // 初始化选择数据的对象
      specList.forEach((item) => {
        this.$set(this.selectSpec, item.title, "");
      });
      // 将规格数据处理成我们视图所需要的数据类型
      this.specList = specList.map((item) => {
        return {
          title: item.title,
          list: item.list.map((code) => {
            return {
              ...code,
              able: this.isAble(item.title, code.name),
            };
          }),
        };
      });
      console.log("specList", this.specList);

      // 默认选中代码
      // this.selectSpec = {
      //   颜色: "红色",
      //   套餐: "套餐一",
      //   尺寸: "M",
      // };
      // this.isAble("颜色", "红色", "M");
      // this.isShowSpecTitle = true;
      // this.updatePrice();
    }, 2000);
  },
  methods: {
    // 判断每个key是否empty
    isObjectEveryEmpty(form) {
      let flag = true;
      for (let key in form) {
        if (!form[key]) {
          return false;
        }
      }
      return flag;
    },

    updatePrice() {
      let selectSpec = [];
      // this.selectSpecDetail = [];

      for (let key in this.selectSpec) {
        selectSpec.push(this.selectSpec[key]);
        // this.selectSpecDetail.push({
        //   title: key,
        //   value: this.selectSpec[key],
        // });
      }

      // [1,2,3] === [2,1,3]
      this.result = this.skuList.find(
        (c) =>
          c.specs.length === selectSpec.length &&
          c.specs.sort().toString() === selectSpec.sort().toString()
      ) || { Id: 0 };
      console.log("result", this.result);
    },

    addPlus(index) {
      if (!this.isShowSpecTitle) {
        alert("请选择规格");
        return false;
      }

      if (index == 1) {
        this.count = this.count - 1 < 1 ? 1 : this.count - 1;
      } else if (index == 2) {
        if (this.count + 1 > this.result.stock) {
          alert(`库存不足`);
        } else {
          this.count += 1;
        }
      }
    },

    isAble(key, value) {
      // 深拷贝 避免被影响
      var copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec));
      copySelectSpec[key] = value;
      let flag = this.skuList.some((item) => {
        var i = 0;
        for (let k in copySelectSpec) {
          if (
            copySelectSpec[k] != "" &&
            item.specs.includes(copySelectSpec[k])
          ) {
            i++;
          } else if (copySelectSpec[k] == "") {
            i++;
          }
        }
        return i == specList.length;
      });
      return flag;
    },

    // 点击事件
    changeSpec(key, value, able) {
      if (!able) return;
      this.count = 1; // 重置count
      if (this.selectSpec[key] === value) {
        this.selectSpec[key] = "";
      } else {
        this.selectSpec[key] = value;
      }
      this.specList.forEach((item) => {
        item.list.forEach((code) => {
          code.able = this.isAble(item.title, code.name);
        });
      });

      if (this.isObjectEveryEmpty(this.selectSpec)) {
        this.isShowSpecTitle = true;
      } else {
        this.isShowSpecTitle = false;
      }
      this.updatePrice();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
