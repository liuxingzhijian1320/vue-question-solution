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
      {
        id: 3,
        name: "白色",
      },
      {
        id: 4,
        name: "黑色",
      },
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
      {
        id: 7,
        name: "套餐三",
      },
      {
        id: 8,
        name: "套餐四",
      },
    ],
  },
];

const skuList = [
  { id: 1608188117177, stock: 10, specs: ["套餐一", "红色"] },
  { id: 1608188117178, stock: 0, specs: ["红色", "套餐二"] },
  { id: 1608188117189, stock: 1, specs: ["紫色", "套餐一"] },
];

export { specList, skuList };
