console.log(1); //同步任务
setTimeout(() => {
  console.log("2"); //异步宏任务
}, 2);
new Promise((resolve, reject) => {
  console.log("new Promise"); //同步
  resolve();
}).then(() => {
  console.log("promise-then"); //异步微任务  当前宏任务的微任务
});
console.log(3); //同步
/**
 * 1:同步立马执行
 * 2：setTimeout宏任务放起来
 * 3.new Promise同步直接执行
 * 4:then微任务挂起来，放入微任务队列
 * 5:3同步立马执行
 * 6.至此一轮宏任务已完成， 去异步任务队列的微任务队列，发现then立即执行
 * 7.这一轮宏任务执行完全完毕，包含它附带的微任务也完成，进入下一轮宏任务
 * 8.发现还剩setTimeout宏任务，执行2
 * ---综上:1--->new Promise-->3--->promise-then---->2
 */

// 异步任务分为微任务和宏任务，微任务在当前宏任务执行完毕后立马执行
1.promise.then
2.process.nextTick
3.mutationObservers
// 宏任务：当前宏任务极其包含的微任务是否执行完毕，执行完毕执行下一次宏任务
1.script外层代码
2.定时器
3.浏览器UI渲染
4.Node的IO等
5.postMessage
