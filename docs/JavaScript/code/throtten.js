// n秒内仅执行一次
// 场景:适合间隔一段时间执行一次的场景，滚动到底加载下一页；搜索框联想
const throtten = (func, delay) => {
  let timer = null;
  let startTime = Date().now;
  return function () {
    let currentTime = Date().now;
    let existedTime = delay - startTime - currentTime;
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (existedTime <= 0) {
      func.apply(context, args);
      startTime = Date().now;
    } else {
      timer = setTimeout(func, existedTime);
    }
  };
};

const myThrottle = (func, delay) => {
  let timer = null;
  let startTime = Date().now;
  return function () {
    let currentTime = Date().now;
    let existedTime = delay - startTime - currentTime;
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (existedTime <= 0) {
      func.apply(context, args);
      startTime = Date().now;
    } else {
      timer = setTimeout(func, existedTime);
    }
  };
};
