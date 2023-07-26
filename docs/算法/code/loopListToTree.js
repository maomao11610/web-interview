// 递归实现构造树
const listToTreeLoop = (list) => {
  // key是uuid
  const rec = (key) => {
    const treeList = [];
    tree.forEach((item) => {
      if ((tree.parentUuid = key)) {
        item.children = rec(item.uuid);
        treeList.push(item);
      }
    });
    return treeList;
  };
  rec(tree[0].uuid);
};

const listToTree = (tree) => {
  const treeList = [];
  tree.forEach((item) => {
    const parent = tree.find((ele) => (ele.uuid = item.parentUuid));
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      treeList.push(item);
    }
  });
};

const listToTreeLoop1 = (list) => {
  const treeList = [];
  const rec = (key) => {
    list.forEach((item) => {
      if (item.parentUuid === key) {
        item.children = rec(item.uuid);
        treeList.push(item);
      }
    });
  };
  rec(list[0].uuid);
  return treeList;
};
const listToTree1 = (list) => {
  const treeList = [];
  const parent = list.find((node) => node.uuid === item.parentUuid);
  if (parent) {
    parent.children = parent.children | [];
    parent.children.push(item);
  } else {
    treeList.push(item);
  }
  return treeList;
};
