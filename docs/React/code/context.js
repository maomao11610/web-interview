//1.Provider（提供数据） 和 Consumer（消费数据）组件
const { Provider, Consumer } = React.createContext();
// 2.provide作为公共父节点
<Provider :value="transData">
  <div className="App">
    <Child1 />
  </div>
</Provider>;
// 3.Consumer接收数据
<Consumer>
    {data => <span>data参数表示接收到的数据 -- {data}</span>}
</Consumer>


useEffect(() => {
  const handleResize = () => {}
  window.addEventListener('resize', handleResize)
  
  // 这个返回的函数，会在该组件卸载时来执行
  // 因此，可以去执行一些清理操作，比如，解绑 window 的事件、清理定时器 等
  return () => window.removeEventListener('resize', handleResize)
}, [])


// 1
// 触发时机：1 第一次渲染会执行 2 每次组件重新渲染都会再次执行
// componentDidMount + ComponentDidUpdate
useEffect(() => {});

// 2（使用频率最高）
// 触发时机：只在组件第一次渲染时执行
// componentDidMount
useEffect(() => {}, []);

// 3（使用频率最高）
// 触发时机：1 第一次渲染会执行 2 当 count 变化时会再次执行
// componentDidMount + componentDidUpdate（判断 count 有没有改变）
useEffect(() => {}, [ count ]);

// 4
useEffect(() => {
	// 返回值函数的执行时机：组件卸载时
	// 在返回的函数中，清理工作
	return () => {
		// 相当于 componentWillUnmount
	};
}, []);

useEffect(
	() => {
		// 返回值函数的执行时机：1 组件卸载时 2 count 变化时
		// 在返回的函数中，清理工作
		return () => {};
	},
	[ count ]
);


// 异步使用
// 错误演示：不要给 effect 添加 async
useEffect(async () => {
  const res = await axios.get('http://xxx')
  return () => {}
}, [])

// 正确使用
useEffect(() => {
  const loadData = async () => {
    const res = await axios.get('http://xxx')
  }
  loadData()
  
  return () => {}
}, [])














// useContext解决跨层级通信
import { useContext } from 'react'
const { color } = useContext(ColorContext)//创建context对象
const ColorContext = createContext()

const Child = () => {
  // 在普通的 JS 代码中：
  const { color } = useContext(ColorContext)//获取context对象

  return (
    <div>
      useContext 获取到的 color 值：{ color }
      {/* 在 JSX 中： */}
          <ColorContext.Consumer>
              {/**获取context共享的数据 */}
        {color => <span>共享的数据为：{color}</span>}
      </ColorContext.Consumer>
    </div>
  )
}