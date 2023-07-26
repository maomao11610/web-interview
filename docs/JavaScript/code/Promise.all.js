const myPromiseAll = (promiseList) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList)) {
      return new TypeError("不是数组");
    }
    let resolverCount = 0;
    let resolvedResult = [];
    for (let i = 0; i < promiseList.length; i++) {
      Promise.resolve(promiseList[i]).then(
        (res) => {
          resolverCount++;
          resolvedResult[i] = res;
          if (resolverCount === promiseList.length) {
            return resolve(resolvedResult);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
};
