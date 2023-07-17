class Parent extends React.Component {
  state = {
    money: 10000,
  };
  // 回调函数
  //1.  父组件提供一个回调函数（用于接收数据）
  transCallback = (childrenTransData) => {
    this.setState({
      money: this.state.money - childrenTransData,
    });
  };
  render() {
    const { money } = this.state;
    return (
      <div>
        <h1>我是父组件：{money}</h1>
        {/* 2.将该函数作为属性的值，传递给子组件 */}
        <Child money={money} transCallback={this.transCallback} />
      </div>
    );
  }
}
//3.  子组件通过 props 调用回调函数
const Child = (props) => {
  const handleClick = () => {
    // 子组件调用父组件传递过来的回调函数,
    //4.  将子组件的数据作为参数传递给回调函数
    props.transCallback(100);
  };
  return (
    <div>
      <h3>我是子组件 -- {props.money}</h3>
      <button onClick={handleClick}>买手机</button>
    </div>
  );
};
