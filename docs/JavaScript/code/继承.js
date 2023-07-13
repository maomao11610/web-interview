// // 原型链继承：每个构造函数都有一个原型对象，每个原型都有一个构造函数的指针，每个实例则包含每个原型对象的指针
// function parent() {
//   this.name = "hh";
//   this.arr = [1, 2, 3, 4];
// }
// function children() {
//   this.type = "child";
// }
// children.prototype = new parent();
// console.log(new children().name); //原型上的也可以找到
// const s1 = new children();
// const s2 = new children();
// s1.arr.push(5);
// console.log(s1.arr, s2.arr); //都改变了，两个实例使用的是同一个原型对象，内存空间是共享的

// 构造函数继承，使用call调用父函数
// function parent() {
//   this.name = "hh";
//   this.arr = [1, 2, 3, 4];
// }
// parent.prototype.getName = () => {
//   return this.name;
// };
// function children() {
//   parent.call(this);
//   this.type = "child";
// }
// console.log(new children().getName()); //报错，仅能继承实例属性和方法，原型上的无法继承
// const s1 = new children();
// const s2 = new children();
// s1.arr.push(5);
// console.log(s1.arr, s2.arr); //仅改变一个，引用属性不会更改

// 组合继承
// function parent() {
//   this.name = "hh";
//   this.arr = [1, 2, 3, 4];
// }
// parent.prototype.getName = () => {
//   return this.name;
// };
// function children() {
//   parent.call(this); //第二次调用
//   this.type = "child";
// }
// children.prototype = new parent(); //第一次调用parent
// // 挂构造函数
// children.prototype.constructor = children;
// console.log(new children().getName()); //没问题
// const s1 = new children();
// const s2 = new children();
// s1.arr.push(5);
// console.log(s1.arr, s2.arr); //不共享引用地址
// // 造成内存开销，两次parent调用

// 原型式
/**通过Object.create()实现普通对象的继承，但是`Object.create `方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能 */
// let parent = {
//   name: "hh",
//   arr: [1, 2, 3, 4],
//   getName: () => {
//     return this.name;
//   },
// };
// const cloneFunc = (origin) => {
//   let newObj = Object.create(origin);
//   clone.type = "xxx";
//   clone.getFriend = () => {
//     return this.type;
//   };
//   return newObj;
// };
// const children = cloneFunc(parent);
// console.log(children.arr);
// console.log(children.getName());
// console.log(children.getFriend());

// 寄生组合 借助Object.create继承，优化以上几种继承的bug
const cloneFunc = (parent, children) => {
  children.prototype = Object.create(parent.prototype);
  children.prototype.constructor = children;
};
function parent() {
  this.name = "hh";
  this.arr = [1, 2, 3, 4];
}
parent.prototype.getName = () => {
  return this.name;
};
function children() {
  parent.call(this); //第二次调用
  this.type = "child";
}
cloneFunc(parent, children);
children.prototype.getFriends = () => {
  return this.type;
};
const s1 = new children();
console.log(s1.type);
console.log(s1.name);
console.log(s1.getFriends());
