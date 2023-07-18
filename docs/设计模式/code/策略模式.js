// 策略类
const strategyPattern = {
  strategy1: () => {
    console.log("策略1");
  },
  strategy2: () => {
    console.log("策略2");
  },
  strategy3: () => {
    console.log("策略3");
  },
};
// 环境类
const context = (type, task) => {
  typeof strategyPattern[type] === "function" && strategyPattern[type](task);
};
context("strategy1", "策略1的任务");
context("strategy2", "策略2的任务");
// 改版，去掉函数包裹，函数更加独立，不妨碍调用
const strategy1 = () => {
  console.log("策略1");
};
const strategy2 = () => {
  console.log("策略2");
};
const strategy3 = () => {
  console.log("策略3");
};
const context = (type, task) => {
  typeof type === "function" && task;
};
