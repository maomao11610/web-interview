// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); //输出五个5的问题解决探讨
//   }, 1000);
//   // 5个5
// }

// // 闭包改01234
// for (var i = 0; i < 5; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }
// // setTimeout第三参数
// for (var i = 0; i < 5; i++) {
//   setTimeout(
//     (j) => {
//       console.log(j);
//     },
//     1000,
//     i //前面回调函数的参数值
//   );
// }
// // 利用js基本类型数据作为回调参数为值传递的原则
// const output = (res) => {
//   setTimeout(() => {
//     console.log(res);
//   }, 1000);
// };
// for (var i = 0; i < 5; i++) {
//   output(i); //传入的i做了一层复制
// }

// // 利用let块级作用域，实际代码运行会报错，最后一个i运行的时候其作用域并不存在，i作用域只存在于循环内部
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); //输出五个5的问题解决探讨
//   }, 1000);
//   // 5,5,5,5
// }

// // // 改定时器、不好
// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       // 这里增加定时器，超时设置为 5 秒
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }

//  使用ES6的promise每一次都产生一个异步，改变执行顺序
// const tasks = []; //存放异步的promise
// const promiseOutput = (i) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(i);
//       resolve();
//     }, 1000 * i); //每隔一秒输出 1 2 3 4 5
//   });
// //   生成异步操作
// for (var i = 0; i < 5; i++) {
//   tasks.push(promiseOutput(i));
// }
// // 异步操作完输出最后的i
// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// });

// // async解决promise的写法
// const sleep = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// };
// (async () => {
//   for (var i = 0; i < 5; i++) {
//     if (i > 0) {
//       await sleep(1000);
//     }
//     console.log(i);
//   }
//   await sleep(1000);
//   console.log(i);
// })();

var obj = {
  sayThis: () => {
    console.log(this);
  },
};

obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
var globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
