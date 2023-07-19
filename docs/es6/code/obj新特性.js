// 1.方法、对象key value一致可简写，简写的对象方法不能用做构造函数会报错
const obj = {
  f() {
    this.foo = 'bar';
  }
};

new obj.f() // 报错
// `this`关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字 `super`，指向当前对象的原型对象
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto); // 为obj设置原型对象
obj.find() // "hello"

// 新增方法
- Object.is(a,b)判断两个值是否完全相等，同===
- Object.assign()浅拷贝，遇到同名属性会替换
- Object.getOwnPropertyDescriptors()返回指定对象所有自身属性（非继承属性）的描述对象
- Object.setPrototypeOf()，Object.getPrototypeOf()设置获取对象的原型对象
- Object.keys()，Object.values()，Object.entries()返回可遍历的xxx
- Object.fromEntries()键值对数组转对象
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }