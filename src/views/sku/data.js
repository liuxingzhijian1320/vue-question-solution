const specList = [
  {
    title: "颜色",
    list: [
      {
        id: 1,
        name: "红色",
      },
      {
        id: 2,
        name: "紫色",
      },
      // {
      //   id: 3,
      //   name: "白色",
      // },
      // {
      //   id: 4,
      //   name: "黑色",
      // },
    ],
  },
  {
    title: "套餐",
    list: [
      {
        id: 5,
        name: "套餐一",
      },
      {
        id: 6,
        name: "套餐二",
      },
      // {
      //   id: 7,
      //   name: "套餐三",
      // },
      // {
      //   id: 8,
      //   name: "套餐四",
      // },
    ],
  },
  {
    title: "尺寸",
    list: [
      {
        id: 50,
        name: "M",
      },
      {
        id: 60,
        name: "S",
      },
      // {
      //   id: 7,
      //   name: "套餐三",
      // },
      // {
      //   id: 8,
      //   name: "套餐四",
      // },
    ],
  },
];

const skuList = [
  { id: 111, stock: 3, price: 100, specs: ["套餐一", "红色", "M"] },
  { id: 222, stock: 0, price: 200, specs: ["红色", "套餐二", "S"] },
  { id: 333, stock: 1, price: 300, specs: ["紫色", "套餐一", "M"] },
];

export { specList, skuList };
