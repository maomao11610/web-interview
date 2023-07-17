class Parent extends React.Component {
  state = {
    money: 10000,
  };
  render() {
    const { money } = this.state;
    return (
      <div>
        <h1>我是父组件：{money}</h1>
        {/* 将数据传递给子组件 */}
        <Child money={money} />
      </div>
    );
  }
}
function Child(props) {
  return (
    <div>
      {/* 接收父组件中传递过来的数据 */}
      <h3>我是子组件 -- {props.money}</h3>
    </div>
  );
}
