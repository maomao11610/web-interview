// 3 使用Router组件包裹整个应用
const App = () => (
  <Router>
    <div>
      <h1>React路由基础</h1>
      {/* 4 指定路由入口 */}
      <Link to="/first">页面一</Link>
      {/* 5 指定路由出口 */}
      <Route path="/first" component={First} />
    </div>
  </Router>
);
