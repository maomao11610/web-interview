console.log(1); //同步任务
setTimeout(() => {
  console.log("2"); //异步宏任务
}, 2);
new Promise((resolve, reject) => {
  console.log("new Promise"); //同步
  resolve();
}).then(() => {
  console.log("promise-then"); //异步微任务
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
