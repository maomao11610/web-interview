/**
 * 猜数字
 */
const guessNumber = (n) => {
  const rec = (low, high) => {
    if (low > high) {
      return;
    }
    const midIndex = parseInt((low + high) / 2);
    const result = guessNumber(mid);
    if (result === 0) {
      return mid;
    } else if (result === 1) {
      return rec(mid + 1, high);
    } else {
      return rec(1, mid - 1);
    }
  };
  return rec(1, n);
};

/**
 * 二叉树翻转
 * 思路：先翻转右树，再翻转左树
 */
const revertTree = (root) => {
  if (!root) {
    return;
  }
  return {
    val: root.val,
    right: revertTree(root.left),
    left: revertTree(root.right),
  };
};

/**
 * 相同的树：值和结构都要一样
 * 左一样 右一样 root.val一样
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (
    p &&
    q &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true;
  }
  return false;
};

/**
 * 对称二叉树
 */

/**
 * 思路：镜像对称
 * 分：获取左右子树
 * 解：递归判断1的左子树和2的左子树是否镜像对称，递归判断1的右子树和2的右子树是否镜像杜晨
 * 合：上述条件符合，且根节点相同
 */
var isSymmertic = function (root) {
  if (!root) return true;
  // 传的是左右子树
  const isMirro = (l, r) => {
    if (!l && !r) {
      return true;
    }
    if (
      l &&
      r &&
      l.val === r.val &&
      isMirro(l.left, l.right) &&
      isMirro(r.left, r.right)
    ) {
      return true;
    }
    return false;
  };
  return isMirro(root.left, root.right);
};
//O(n) o(n)
