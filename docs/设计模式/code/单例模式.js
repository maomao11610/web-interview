// 函数形式--透明版本全部使用new操作符来构造实例
let createSingletonPattern = (() => {
  let instance;
  return function (name) {
    if (instance) {
      return this.instance;
    }
    this.name = name;
    return (instance = this);
  };
})();
createSingletonPattern.prototype.getName = function () {
  console.log(this.name);
};
let person1 = new createSingletonPattern("person1");
let person2 = new createSingletonPattern("person2");
console.log(person1 === person2); //true
// 类形式
class createSingletonPatternClass {
  constructor() {
    if (!createSingletonPatternClass.instance) {
      this.logs = [];
      createSingletonPatternClass.instance = this;
    }
    return createSingletonPatternClass.instance;
  }
  getLog = function () {
    console.log(this.logs.length);
  };
}
const person3 = new createSingletonPatternClass();
const person4 = new createSingletonPatternClass();
console.log(person3 === person4); //true
