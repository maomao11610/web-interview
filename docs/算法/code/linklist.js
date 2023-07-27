class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = new Node();
  }
  find(findNodeVal) {
    // 从head开始找，如果没找到就把当前指针后移，找到就返回节点，没找到就直到最后返回nll
    let currentNode = this.head;
    while (currentNode && currentNode.val !== findNodeVal) {
      currentNode = currentNode.next; //没找到
    }
    return currentNode;
  }
  // 查找下一个节点是否要待删除的节点，即找到待删除节点的上一个节点
  findPre(nextVal) {
    let currentNode = this.head;
    while (currentNode && currentNode.next.val !== nextVal) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insert(newVal, originNode) {
    /**
     * newVal:要插入节点的数据 originNode链条上的节点，插入到这个节点后面
     * 核心：插入的节点是什么，在哪里插入
     * 1.找位置
     * 2.找到后，需要创建新的节点,newNode.next = currentNode.next,currentNode.next = newNode;
     */
    const newNode = new Node(newVal);
    const currentNode = this.find(originNode);
    newNode.next = currentNode.next; //新节点的next指向原来节点指向的next
    currentNode.next = newNode;
  }
  remove(removeItemVal) {
    //   同插入,找的是前一个节点，先找后删除，,把要删除节点指向null,删除就是把currentNode.next指向要删除节点的下一个next
    //例子2 上一个节点指向待删除节点，待删除节点指向空
    const removePre = this.findPre(removeItemVal);
    if (removePre.next) {
      removePre.next = removePre.next.next;
    }
  }
}

/**
 * 判断链表是否有环
 * 思路：快慢指针，遍历指针，指针相遇代表有环，遍历出来还没相遇即没环
 */
const linkListHasCircle = (head) => {
  let p = head;
  let q = head;
  while (p && q && p.next && q.next) {
    p = p.next;
    q = q.next.next;
    if (p === q) {
      return true;
    }
  }
  return false;
};
/**
 * 返回链表第一个入环的节点，没环返回null pos表示从尾部链接到节点的位置为-1代表没环
 */
const getCircleStartVal = (head) => {
  let p = head;
  let q = head;
  while (p && q && p.next && q.next) {
    p = p.next;
    q = q.next.next;
    if (p === q) {
      p = head;
      while (p !== q) {
        p = p.next;
        q = q.next;
      }
      return p;
    }
  }
  return null;
};
/***
 * 反转链表：快慢指针遍历，直到快指针指到最后，翻转两个指针  每次移动都将前一个指针指向后一个，遍历完成的pre就是尾节点
 */
const reverseLinkList = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
/**
 * 回文链表：将链表劈成两半，翻转前半部分，翻转后与后半部分比对，相同就是回文链表
 */
const isHuiwenLink = (head) => {
  if (!head && !head.next) return true; //空链表
  let mid = head;
  let pre = null;
  let reverse = null; //保存翻转后的节点
  while (head && head.next) {
    pre = mid;
    // 遍历链表
    mid = mid.next;
    head = head.next.next;
    pre.next = reverse;
    reverse = pre;
  }
  if (head) mid = mid.next;
  while (mid) {
    if (reverse.val !== mid.val) {
      return false;
    }
    reverse = reverse.next;
    mid = mid.next;
  }
  return true;
};

/**删除非尾节点的值 */
const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**删除链表倒数第K个值  双指针 */
const deleteEndKValue = (head, k) => {
  let fast = head;
  let low = head;
  let n = 0;
  while (fast) {
    fast = fast.next;
    if (n >= k) {
      low = low.next;
    }
    n++;
  }
  return low;
};

/**
 * 有序链表去重   重复肯定是紧邻元素
 */
const uniqueSortLinkList = (head) => {
  let p = head;
  while (p && p.next) {
    if ((p.val = p.next.val)) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
};

/**
 * 相交链表
 *两个链表，先进行同时向右挪动，此时进行一一对应比较，如果有相同返回结果，如果没有，哪个指针走到末尾，就让让原本指向该链表的指针指向另一个链表的头部，两个指针都指向了对方链表
 *此时，相交的那个值会导致两者走过的路程相等，也就是有相交的话，在第二次就会出现两指针指向同一个节点
 */

var getIntersectionNode = function (headA, headB) {
  let p = headA;
  let q = headB;
  while (p != q) {
    if (p === null) {
      p = headB;
    } else {
      p = p.next;
    }
    if (q === null) {
      q = headA;
    } else {
      q = q.next;
    }
  }
  return p;
};
