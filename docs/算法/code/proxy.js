// 可撤销的代理--多用于完全封闭对目标对象的访问
const target = {
  name: "hh",
  age: 18,
};
const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy.name);
revoke(); //关闭代理，封闭proxy
proxy.name; //error
//Object.definePrototype
// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

Object.defineProperty(target, targetKey, keyDescription);
Object.defineProperty(obj, "a", {
  value: 1,
  writable: false, // 是否可写
  configurable: false, // 是否可配置
  enumerable: false, // 是否可枚举
});
// 无效
obj.a = 2; // 无效
delete obj.a; // 无效
for (key in obj) {
  console.log(key); // 无效
}
// vue2双向绑定采用的是defineProperty 的getter和setter
//get set实现
const obj = {};
Object.defineProperty(obj, "a", {
  set(val) {
    console.log(`开始设置新值: ${val}`);
  },
  get() {
    console.log(`开始读取属性`);
    return 1;
  },
  writable: true,
});

obj.a = 2; // 开始设置新值: 2
obj.a; // 开始获取属性
//vue2双向绑定----观察到对象属性的变更，再去通知更新视图就好了
Object.defineProperty(obj, key, {
  enumerable: true,
  configurable: true,
  get: function reactiveGetter() {
    // ...
    if (Dep.target) {
      // 收集依赖
      dep.depend();
    }
    return value;
  },
  set: function reactiveSetter(newVal) {
    // ...
    // 通知视图更新
    dep.notify();
  },
});
//1.vue2 里定义好data后面再去更改obj的属性视图未更新why?
//2.data init在create生命周期就完成了，这时候还没有这个新属性，自然不会有get,set所以observe监听不到
//3.解决：全局提供的$set其实就是手动加set observe

// Object.definedProperty 是劫持对象的属性，新增元素需要再次 definedProperty。而 Proxy 劫持的是整个对象，不需要做特殊处理

// 使用 defineProperty 时，我们修改原来的 obj 对象就可以触发拦截，而使用 proxy，就必须修改代理对象，即 Proxy 的实例才可以触发拦截
