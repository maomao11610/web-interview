// n秒后执行，重新触发，重新计时
// 在连续时间只执行一次，要通过第三个参数来区分是否需要立即执行
// 场景：连续触发只执行一次的场景---搜索输入，手机校验，窗口resize
const debounce = (func, delay, isImmediate) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    if (isImmediate) {
      //  立即执行第一次，只有有时间执行才会触发
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    }
  };
};

const myDebounce = (func, delay, isImmediate) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    if (isImmediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    }
  };
};
