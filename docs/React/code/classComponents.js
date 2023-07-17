/**
 * 使用ES6的class创建组件，必须继承自React.Component，使得其可以正常使用父类的实例和方法，必须提供render(),类名必须大写
 */
import React from "react";
import ReactDOM from "react-dom";
class Hello extends React.Component {
  state = {
    a: 1,
    b: [1, 2, 3],
  };
    handleClick = () => {
        // 事件处理程序中指向undefined
        // 组件实例调用时候指向组件
        console.log(this.state.b);
     }
  render() {
    return <div onClick=this.handleClick >{this.state.a}</div>;
  }
}
ReactDOM.render(<Hello />, root);
