const binarySearch = (target) => {
  let low = 0;
  let high = this.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2); //中间元素下标
    const element = this[mid]; //中间元素
    if (element < target) {
      low = mid + 1;
    } else if (element > target) {
      high = mid - 1;
    } else {
      return mid; //直到找到目标位置
    }
  }
  return -1;
};

const binarySearch1 = (target, arr) => {
  let low = 0;
  let high = arr[arr.length - 1];
  let res = 0;
  while (low <= high) {
    const mid = Math.floor(arr.length / 2);
    const midValue = arr[mid];
    if (target < midValue) {
      high = mid - 1;
    } else if (target > midValue) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(binarySearch1(5, [1, 5, 7, 8, 9]));
