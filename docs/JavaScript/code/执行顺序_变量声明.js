// 组1
// var foo = function () {
//   console.log("foo1");
// };
// foo();
// var foo = function () {
//   console.log("foo2");
// };
// foo();
// 正常1->2[var会提升变量的声明，但不会提升变量赋值操作]，组1则是先声明赋值完成后函数调用，无顺序问题，。由于js从按照顺序从上往下执行，所以当执行foo = function(){}的时候，才对foo进行赋值为一个函数

// function foo() {
//   console.log("foo1");
// }
// foo();

// function foo() {
//   console.log("foo2");
// }
// foo();
// // 均输出2，函数声明会在任何代码执行之前先被读取并添加到执行上下文，也就是函数声明提升。这里使用了函数声明定义了两个foo函数，由于函数声明提升，第二个foo会覆盖第一个foo,所以当调用第一个foo的时候，其实已经被第二个foo覆盖了，所以这两个打印的都是foo2。

// 总
var foo = function () {
  console.log("foo1");
};
foo();

var foo = function () {
  console.log("foo2");
};
foo();

function foo() {
  console.log("foo3");
}
foo();

function foo() {
  console.log("foo4");
}
foo();
通过函数表达式定义变量foo并赋值为一个匿名函数，该函数在被调用时打印"foo1"。
接着，通过函数表达式重新定义变量foo，赋值为另一个匿名函数，该函数在被调用时打印"foo2"。
使用函数声明定义了两个名为foo的函数。函数声明会在作用域中进行提升。后面的会覆盖前面的，由于声明从一开始就提升了，而又执行了两个赋值操作，所以此时foo是第二个赋值的函数。
然后调用foo()，输出"foo2"。
再调用foo()，也输出"foo2"。