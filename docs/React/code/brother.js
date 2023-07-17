// sameParent
import React, { Component } from "react";
import ReactDOM from "react-dom";
// 导入两个子组件
import Jack from "./Jack";
import Rose from "./Rose";
class App extends Component {
  // 1. 状态提升到父组件
  state = {
    msg: "",
  };

  changeMsg = (msg) => {
    this.setState({
      msg,
    });
  };

  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        {/* 兄弟组件 1 */}
        <Jack say={this.changeMsg}></Jack>
        {/* 兄弟组件 2 */}
        <Rose msg={this.state.msg}></Rose>
      </div>
    );
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById("root"));
// brother1
import React, { Component } from "react";

export default class Jack extends Component {
  say = () => {
    // 修改数据
    this.props.say("you jump i look");
  };
  render() {
    return (
      <div>
        <h3>我是Jack组件</h3>
        <button onClick={this.say}>说</button>
      </div>
    );
  }
}
// brother2
import React, { Component } from 'react'

export default class Rose extends Component {
  render() {
    return (
      <div>
        {/* 展示数据 */}
        <h3>我是Rose组件-{this.props.msg}</h3>
      </div>
    )
  }

}