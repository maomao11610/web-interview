import ReactDOM from "react-dom";
const title = <h1 title="xxx"></h1>;
ReactDOM.render(title, document.getElementById("root"));
/***
 * 注:
 * 1.jsx必须有一个根节点，如果没有可使用<></>或者<React.Fragment></React.Fragment>
 * 2.属性名要驼峰 className for-->htmlFor
 * 3.jsx若有多行，最好要()包裹
 * 4.样式处理行内或者className
 */
