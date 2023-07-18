let eventBus = {
  eventList: {},
  subscribe: (key, func) => {
    // 订阅
    if (!this.eventList[key]) {
      this.eventList[key] = [];
    }
    this.eventList[key].push(func);
  },
  notify: (key, ...arg) => {
    this.eventList[key].forEach((fn) => {
      // 执行
      fn.call(this, ...arg);
    });
  },
  cancelScribe: (key, func) => {
    let cancelEventList = this.eventList[key];
    if (!cancelEventList) {
      return;
    }
    if (!func) {
      // 未传入置顶的取消方法，就清空所有key对应的事件
      cancelEventList && (cancelEventList.length = 0);
    } else {
      // 找到要取消的取消
      cancelEventList.forEach((ev, eIndex) => {
        if (ev === func) {
          cancelEventList.splice(eIndex, 1);
        }
      });
    }
  },
};
