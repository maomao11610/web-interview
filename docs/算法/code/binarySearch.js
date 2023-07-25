// const binarySearch = (target) => {
//   let low = 0;
//   let high = this.length - 1;
//   while (low < high) {
//     const mid = Math.floor((low + high) / 2); //中间元素下标
//     const element = this[mid]; //中间元素
//     if (element < target) {
//       low = mid + 1;
//     } else if (element > target) {
//       high = mid - 1;
//     } else {
//       return mid; //直到找到目标位置
//     }
//   }
//   return -1;
// };

// const binarySearch1 = (target, arr) => {
//   let low = 0;
//   let high = arr[arr.length - 1];
//   let res = 0;
//   while (low <= high) {
//     const mid = Math.floor(arr.length / 2);
//     const midValue = arr[mid];
//     if (target < midValue) {
//       high = mid - 1;
//     } else if (target > midValue) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };
// console.log(binarySearch1(5, [1, 5, 7, 8, 9]));

// const changeToUpStrArray = (str) => {
//   let result = str.split("_");
//   // map返回原数组元素每一项调用后的组成的新数组
//   result = result.map((item) => {
//     return item[0] && item[0].toUpperCase() + item.substr(1);
//   });
//   return result.join("");
// };
// console.log(changeToUpStrArray("_abc_def_01_"));
// const changeToUpStrReg = (str) => {
//   if (str.charAt(str.length - 1) === "_") {
//     str = str.substr(0, str.length - 1);
//   }
//   return str.replace(/_(\w)/g, ($0, $1) => {
//     return $1.toUpperCase();
//   });
// };
// console.log(changeToUpStrReg("_abc_def_01_"));

// flat数组  不传参默认拍平一层,要返回新数组对源数组没影响
const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  "string",
  { name: "xxx" },
];
const flatArr = (arr) => {
  let newArrResult = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // 递归
      //   newArrResult = flatArr(item);
      //   扩展运算
      newArrResult.push(...arguments.callee(item));
    } else {
      newArrResult.push(item);
    }
  });
  return newArrResult;
};
console.log(flatArr(arr));

// 用reduce实现
const flatArrReduce = (arr) => {
  let newArrResult = [];
  newArrResult = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArrReduce(cur) : cur);
  }, []);
  return newArrResult;
};
console.log(flatArrReduce(arr));

//带参数的
const flatArrFromPlies = (arr, plies = 1) => {
  let newArrResult = [];
  newArrResult =
    plies > 0
      ? arr.reduce((pre, cur) => {
          pre.concat(
            Array.isArray(cur) ? flatArrFromPlies(cur, plies - 1) : cur
          );
        }, [])
      : arr.slice();
  return newArrResult;
};

// 跳过空位
Array.prototype.fakeFlat = function (num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [].concat(this);
  return num > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
        []
      )
    : arr.slice();
};
const arr1 = [1, [3, 4], , ,];
arr1.fakeFlat();
