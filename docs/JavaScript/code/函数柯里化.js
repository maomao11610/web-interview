const curry = (fn) => {
  const outArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    const inArgs = Array.prototype.slice.call(arguments);
    const resArgs = outArgs.concat(inArgs);
    return fn.apply(null, resArgs);
  };
};
