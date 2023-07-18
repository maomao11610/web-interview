// 虚拟代理
// 本体
var myImage = (function () {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

// 代理
var proxyImage = (function () {
  var img = new Image();
  img.onload = function () {
    myImage.setSrc(this.src); // 图片加载完设置真实图片src
  };
  return {
    setSrc: function (src) {
      myImage.setSrc("./loading.gif"); // 预先设置图片src为loading图
      img.src = src;
    },
  };
})();

// 外部调用
proxyImage.setSrc("./product.png"); // 有loading图的图片预加载效果

// 缓存代理---递归回调
