// then回调
getUrl("/posts.json")
  .then(
    (res) => {
      console.log("success---res");
    },
    (error) => {
      console.log(error);
    }
  )
  .then(function (post) {
    // ...
  });
// catch
getUrl("/posts.json").catch(function (error) {
  // getUrl发生error或then回调运行异常的error都会进来，一般用catch来替代then的第二参数
});
// all
const p1 = new Promise((resolve, reject) => {
  resolve("hello");
})
  .then((result) => result)
  .catch((e) => e);

const p2 = new Promise((resolve, reject) => {
  throw new Error("报错了");
})
  .then((result) => result)
  .catch((e) => e);

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
// ["hello", Error: 报错了]   如果传递给all的promise实例自己有catch造成reject的方法，那么就不会走到all的catch如果自己没有则会走到all的链式catch
