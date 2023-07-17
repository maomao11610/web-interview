// 导入 thunk 中间件
import thunk from "redux-thunk";
// 将 thunk 添加到中间件列表中
// 知道：如果中间件中使用 logger 中间件，logger 中间件应该出现在 applyMiddleware 的最后一个参数
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// action/index
export const clearDoneAsync = () => {
  return (dispatch) => {
    // 处理异步的代码：1 秒后再清理已完成任务
    setTimeout(() => {
      dispatch(clearDone());
    }, 1000);
  };
};
import { clearDoneAsync } from "../store/actions/todos";
// APP.js
const TodoFooter = () => {
  return (
    // ...
    <button
      className="clear-completed"
      onClick={() => dispatch(clearDoneAsync())}
    >
      Clear completed
    </button>
  );
};

import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const onLogin = () => {
    // ...
    history.push("/home");
  };
  return <button onClick={onLogin}>登录</button>;
};
