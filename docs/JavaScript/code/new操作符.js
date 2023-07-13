const myNew = (func, ...args) => {
  let newObj = {};
  newObj._proto_ = func.prototype;
  let result = func.apply(Obj, args);
  return result instanceof Object ? result : newObj;
};
