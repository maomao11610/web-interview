const myInstanceOf = (left, right) => {
  if (typeof left !== "object" || left === null) {
    return false;
  }
  let leftProto = Object.getPrototypeOf(left);
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (leftProto === right.prototype) {
      return true;
    }
    leftProto = Object.getPrototypeOf(leftProto);
  }
};

// 公共方法封装
const normalTypeCheck = (origin) => {
  const type = typeof origin;
  if (type !== "object") {
    return type;
  }
  return Object.prototype
    .toString()
    .call(origin)
    .replace(/^\[object (\s+)\]$/, "$1");
};
