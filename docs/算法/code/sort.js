/**
 * 冒泡排序
 * 前后两个比较，大的放后面，直到最后最后一位即最大值
 * n-1轮完成排序
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([1, 4, 7, 2, 3]));

/**选择排序
 * 选出数组中最小值和第一位比较，换位置
 * 第二小放第二位
 * 完成交换后的元素不计入下一次排序
 * 依次同上找位置，执行n-轮，范围会越来越小
 */
const checkSort = (arr) => {
  let minIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return arr;
};
console.log(checkSort([1, 4, 7, 2, 3]));
/**
 * 插入排序
 * 思路：从第二位开始，比它大的就往后排，直到最后一个最大值
 *  和它相等或者比它小，循环就终止，适合数组内大部分是有序的数组排序，就是给当前值在有序序列里找对位置，放进去
 * 为什么要从第二个开始：新排序数组只有一个元素的话，不需要做任何事
 */
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let tmp = arr[i];
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tmp;
  }
  return arr;
};
console.log(insertSort([1, 4, 7, 2, 3]));

/**
 * 快速
 * 思路：任意选择一个元素为基准元素，比它小的放左边，比它大的放右边，递归来进行分区依次这样
 */
const quicklySort = (arr) => {
  const rec = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    let left = [];
    let right = [];
    let target = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > target) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    return [...rec(left), target, ...rec(right)];
  };
  return rec(arr);
};
console.log(quicklySort([1, 4, 7, 2, 3]));

/**
 * 归并排序:最稳定的排序
 * 思路：分，合 把数组劈叉，递归构建完成排序合并 o(n*lgN)
 */
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let midIndex = parseInt(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex);
    return mergeArr(mergeSort(left), mergeSort(right));
  }
};
const mergeArr = (left, right) => {
  let tmp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tmp.push(left.shift());
    } else {
      tmp.push(right.shift());
    }
  }
  return tmp.concat(left, right);
};
console.log(mergeSort([1, 4, 7, 2, 3]));
