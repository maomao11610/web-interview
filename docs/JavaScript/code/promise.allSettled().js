const myPromiseAllSettled = (promiseList) => {
  return new Promise((resolve, reject) => {
    let result = [],
      count = 0;
    promiseList.forEach((promiseItem) => {
      Promise.resolve(promiseItem)
        .then((res) => {
          result.push({
            status: "fulfilled",
            res,
          });
        })
        .catch((err) => {
          result.push({
            status: "rejected",
            err,
          });
        })
        .finally(() => {
          if (++count === promiseList.length) {
            resolve(result);
          }
        });
    });
  });
};
