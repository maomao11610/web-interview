// 根据构造函数生成一个实例对象，生成出来的实例对象不仅可以访问构造函数上的属性原型上的也可以
const myNew = (func, ...args) => {
  let newObj = {};
  newObj._proto_ = func.prototype;
  let result = func.apply(Obj, args);
  return result instanceof Object ? result : newObj;
};

/**
 * 1.新建一个对象
 * 2.构造函数的原型对象挂载到实例对象的原型链上
 * 3.更改构造函数的this到实例对象
 * 4.根据条件返回构造出来的实例对象
 */
const myNew1 = (fn, ...args) => {
  let newObj = {};
  newObj._proto_ = fn.prototype;
  let res = fn.apply(newObj, args);
  return res instanceof Object ? res : newObj;
};
