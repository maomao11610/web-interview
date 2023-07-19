const myAjax = (options) => {
  // 创建xhr对象
  const xhr = new XMLHttpRequest();
  // 初始化options
  options = options || {};
  options.type = (options.type || "GET").toUpperCase();
  options.dataType = options.dataType || "json";
  const data = options.data;
  if (options.type === "GET") {
    xhr.open("GET", options.url + "?" + data, true); //第三个参数，是否要异步
    xhr.send(null);
  } else if (options.type === "POST") {
    xhr.open("POST", options.url, true);
    xhr.send(data);
  }
  // 接收服务端响应
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      // 响应完毕
      let status = xhr.status;
      if (status >= 200 && status < 300) {
        // 以2开头表示成功
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.fail && options.fail(status);
      }
    }
  };
};

// 用
myAjax({
  type: "post",
  dataType: "json",
  data: {},
  url: "https://xxxx",
  success: function (text, xml) {
    //请求成功后的回调函数
    console.log(text);
  },
  fail: function (status) {
    ////请求失败后的回调函数
    console.log(status);
  },
});
