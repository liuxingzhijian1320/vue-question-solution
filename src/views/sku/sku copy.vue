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

    <div class="selected">
      ¥： {{ result.price }}
    </div>

    <div class="selected">
      已选规格：<div class="select-box" v-for="(item,index) in specList"
        :key="index">
        {{ item.title }}：{{ selectSpec[item.title] }}
      </div>
    </div>
  </div>

</template>
<script>
// 第一步引入数据 这里引入的数据就是上面的 specList  skuList
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
    //  第二步  处理数据
    this.skuList = skuList;
    // 初始化选择数据的对象
    specList.forEach((item) => {
      this.$set(this.selectSpec, item.title, "");
    });
    // this.$set(this.selectSpec, "数量", this.count);
    // console.log("selectSpec", { ...this.selectSpec });

    // 将规格数据处理成我们视图所需要的数据类型
    this.specList = specList.map((item) => {
      return {
        title: item.title,
        list: item.list.map((code) => {
          return {
            ...code,
            //  判断是否可以选择
            //  这里相当于init 初始化数据  this.isAble() 核心判断逻辑
            able: this.isAble(item.title, code.name), // 注释的调试看逻辑代码 false
          };
        }),
      };
    });
    console.log("specList", this.specList);
    // 注释的调试看逻辑代码

    // 初始化默认数据
    // this.selectSpec = {
    //   颜色: "红色",
    //   套餐: "套餐一",
    //   内存: "64G",
    // };
    // this.isAble("颜色", "红色");
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
      // console.log(19, this.skuList);
      // console.log(234, this.specList);

      let selectSpec = [];
      this.selectSpecDetail = [];

      for (let key in this.selectSpec) {
        selectSpec.push(this.selectSpec[key]);
        this.selectSpecDetail.push({
          title: key,
          value: this.selectSpec[key],
        });
      }

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

    // 核心判断逻辑
    // 判断规格是否可以被选择  核心函数 key当前的规格的 title value规格值
    isAble(key, value) {
      // console.log("key, value", key, value);
      // 深拷贝 避免被影响
      var copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec));

      // 用对象的好处就在这了 直接赋值当前验证项
      copySelectSpec[key] = value;
      // console.log("copySelectSpec", copySelectSpec, key, value);
      // 用数组的 some 方法 效率高 符合条件直接退出循环
      let flag = this.skuList.some((item) => {
        // 条件判断 核心逻辑判断
        // console.log(item)
        var i = 0;
        // 这个for in 循环的逻辑就对底子不深的人来说就看不懂了
        // 原理就是循环已经选中的 和 正在当前对比的数据 和 所有的sku对比
        // 只有当前验证的所有项满足sku中的规格或者其他规格为空时 即满足条件
        // 稍微有点复杂 把注释的调试代码打开就调试下就可以看懂了
        for (let k in copySelectSpec) {
          // console.log(copySelectSpec[k])  // 注释的调试看逻辑代码
          // console.log(123, item.specs.includes(copySelectSpec[k]));
          if (
            copySelectSpec[k] != "" &&
            item.specs.includes(copySelectSpec[k])
            // item.specs.findIndex((c) => c.name === copySelectSpec[k]) > -1
          ) {
            // console.log(item)
            i++;
          } else if (copySelectSpec[k] == "") {
            i++;
          }
        }
        // 符合下面条件就退出了 不符合会一直循环知道循环结束没有符合的条件就 return false 了
        // console.log(i) // 注释的调试看逻辑代码
        return i == specList.length;
      });
      // console.log(flag);
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
      // forEach循环改变原数组
      this.specList.forEach((item) => {
        item.list.forEach((code) => {
          code.able = this.isAble(item.title, code.name);
          // console.log(code.name, code.able);
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
