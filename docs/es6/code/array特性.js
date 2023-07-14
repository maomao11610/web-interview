// Array.from(): 将类数组对象，可遍历的对象转为真正的数组
let arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// Array.of();将一组值转数组
Array.of(3, 11, 8); // [3,11,8]

// 实例对象新增的方法
copyWithin()
find()返回找到的第一个满足条件的元素、findIndex()返回找到的第一个满足条件的元素位置索引
fill()
entries()，keys()，values()
includes();返回是否包含 true|false
flat()，flatMap() 数组拍平，参数传拍几层