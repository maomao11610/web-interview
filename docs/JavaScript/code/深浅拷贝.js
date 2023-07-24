// let source = {
//   info: "xxx",
//   type: [1, 2, 3, 4],
// };
// let target = source;
// source.info = "sss";
// source.type.push(0);
// console.log(source);
// console.log(target);//都改了，不管基本类型还是引用类型
let source = {
  info: "xxx",
  type: [1, 2, 3, 4],
};
let target = Object.assign({}, source);
source.info = "sss";
source.type.push(0);
console.log(source);
console.log(target); //引用类型都改了，基本类型还是定义对象时候的值，未发生变化

const checkType = (source) => {
  return Array.prototype.toString().call(source).slice(8, -1);
};
const myCloneDeep = (source) => {
  let target;
  let sourceType = checkType(source);
  if (sourceType === "object") {
    target = {};
  } else if (sourceType === "Array") {
    target = [];
  } else {
    return source;
  }
  for (let key in source) {
    let value = source[key];
    if (checkType(value) === "object" || checkType(value)) {
      target[key] = myCloneDeep(value);
    } else {
      target[key] = value;
    }
  }
  return target;
};
