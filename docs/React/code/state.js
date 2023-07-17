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
    console.log(this.state)//获取
    this.setState({
        b:[1,5,6,8]
    })//修改
   this.state.a='xx'//不支持
  render() {
    return <div >{this.state.a}</div>;
  }
}
ReactDOM.render(<Hello />, root);
