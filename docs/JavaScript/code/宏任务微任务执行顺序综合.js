async function async1() {
  console.log("async1 start"); //3.同步被调用
  await async2();
  console.log("async1 end"); //被阻塞为微任务
}
async function async2() {
  console.log("async2"); //4.被调用
}
console.log("script start"); //1.同步
setTimeout(function () {
  console.log("settimeout"); //异步宏任务//8
});
async1();
new Promise(function (resolve) {
  console.log("promise1"); //5.同步直接执行
  resolve();
}).then(function () {
  console.log("promise2"); //加入微任务 7.第一次外壳宏任务的微任务
});
console.log("script end"); //6
/**
 * 1.script start
 * 2.async1 start
 * 3.async2
 * 4.promise1
 * 5.script end
 * 6.async1 end
 * 7.promise2
 * 8.settimeout
 */
// await会把任务加到异步任务的微任务队列里，会阻塞后面代码的执行
