const originalProto = Array.prototype;
const arrayProto = Object.create(originalProto); //clone一份Array的原型
const methodsPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methodsPatch.forEach((method) => {
  arrayProto[method] = () => {
    originalProto[method].apply(this, arguments);
  };
});
