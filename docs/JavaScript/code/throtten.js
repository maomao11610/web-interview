// n秒内仅执行一次
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
