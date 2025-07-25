import AddTodo from './components/AddTodo'
import Counter from './components/Counter'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
      <Counter />
    </div>
  )
}

export default App