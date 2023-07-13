// 将函数设置为传入对象的属性；
// 执行该函数；
// 删除该属性； 上面的例子就可以改写为：
const myCall = (context) => {
  // 初始化，获取传入的this对象和后续所有参数
  const [context, ...args] = [...arguments];
  // 在传入的对象上设置属性为待执行函数
  context.fn = this;
  // 执行函数
  const res = context.fn(args);
  // 删除属性
  delete context.fn;

  // 返回执行结果
  return res;
};

// apply  和call一样的，就是参数是数组
const myApply = function (context, args) {
  // 给传入的对象添加属性，值为当前函数
  context.fn = this;

  // 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行，并存储函数执行结果
  let res = !args ? context.fn() : context.fn(...args);

  // 删除新增属性
  delete context.fn;

  // 返回函数执行结果
  return res;
};

// bind  创建一个新的函数，在 bind 被调用时，这个新函数的 this 被指定为 bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用
const myBind = () => {
  // 将当前函数的this存放起来
  var _self = this;
  // 绑定bind传入的参数，从第二个开始 argument变数组
  var args = Array.prototype.slice.call(arguments, 1);
  // 声明一个空的构造函数
  function fNOP() {}
  var fBound = function () {
    // 绑定bind返回新的函数，执行所带的参数
    const bindArgs = Array.prototype.slice.apply(arguments);
    // 合并数组
    args.push.apply(args, bindArgs);
    // 作为普通函数，this指向Window
    // 作为构造函数，this指向实例
    return _self.apply(this instanceof fNOP ? this : context, args);
  };
  if (this.prototype) {
    // 修改返回函数的prototype为绑定函数的prototype，实例就可以继承绑定函数的原型中的值
    fNOP.prototype = this.prototype;
  }
  // FNOP继承fBound
  fBound.prototype = new fNOP();
  return fBound;
};
