/**
 * 1.函数名必须大写，必须有返回值，返回值为null代表不渲染
 */
import ReactDOM from "react-dom";
const Hello = () => {
  return <div>Hello</div>;
};
// 渲染
ReactDOM.render(Hello, document.getElementById("root"));
// v18.0后有改变
import { createRoot } from "react-dom/client";
import { Component } from "react";
// 测试渲染组件
const tpl = (
  <div className="box">
    <App></App>
    <App />
    <hr />
    <List />
    <hr />
    <App2 />
  </div>
);
createRoot(document.getElementById("root")).render(tpl);
