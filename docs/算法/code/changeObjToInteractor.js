Object.prototype[Symbol.iterator] = () => {
  return Object.values(this)[Symbol.iterator];
};
