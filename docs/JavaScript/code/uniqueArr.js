// 1.Array.from+set
Array.from(new Set(arr));
// 2.两层循环+splice
const uniqueArrFromSplice = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
        len--;
      }
    }
  }
  return arr;
};
console.log(uniqueArrFromSplice([1, 3, 2, 3, 4, 5, 6, 7]));
// 3.数组遍历+数组的inedexof 没找到返回-1||inculdes方法，返回boolean[可识别NaN]
const uniqueArrFromIndexOf = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
    if (arr.indexOf(item) === -1) {
      newArr.push(item);
    }
  });
  return arr;
};
// 4. filter+indexof[indexOf不找NaN]
const uniqueArrFromFilter = (arr) => {
  return arr.filter((item) => {
    return arr.indexOf(item) === index;
  });
};
// 5.map
const uniqueArrFromMap = (arr) => {
  let newArr = [];
  let map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      newArr.push(item);
      map.set(item, true);
    }
  });
  return newArr;
};
// 6.对象的key
const uniqueArrFromObject = (arr) => {
  let newArr = [];
  let obj = {};
  arr.forEach((item) => {
    if (!obj[item]) {
      newArr.push(item);
      obj[item] = true;
    }
  });
  return newArr;
};
