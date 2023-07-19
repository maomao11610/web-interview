// 1.原型链继承
/**
 * 每个构造函数都有一个原型对象
 * 每个原型对象都有一个指针指向构造函数
 * 每个实例对象也有一个指针指向原型对象
 * 缺：实例会共享指针【引用数据类型的更改会都改】
 */
children.prototype = new parent();

// 2.构造函数继承
/**
 * 父级原型链上的属性继承不到
 */
function children() {
  parent.call(this);
}

// 3.组合继承=原型链+构造函数继承都要
function children() {
  parent.call(this);
}
children.prototype = new parent();
children.prototype.constructor = children;

// 4.原型式  浅拷贝还是引用类型数据问题
const cloneFunc = (origin) => {
  let newObj = Object.create(origin);
  clone.type = "xxx";
  clone.getFriend = () => {
    return this.type;
  };
  return newObj;
};

// 5.寄生组合
const operateFunc = (parent, children) => {
  children.prototype = Object.create(parent.prototype);
  children.prototype.constructor = children;
};
function children() {
  parent.call(this);
}
operateFunc(parent, children);
