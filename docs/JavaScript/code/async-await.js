function func() {
  return Promise.resolve("resolve");
}
// 等价于
async function func() {
  return "resolve";
}

async function fn1() {
  console.log(1);
  await fn2();
  console.log(2); // 阻塞
}

async function fn2() {
  console.log("fn2");
}

fn1();
console.log(3);
/**
 * 1先执行，await加入微任务
 * 2fun2
 * 3
 * 2
 */
