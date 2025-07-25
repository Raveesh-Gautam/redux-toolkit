import AddTodo from './components/AddTodo'
import Counter from './components/Counter'
import Counter5 from './components/Counter5'
import NameChanger from './components/NameChanger'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h2 style={{ display:'flex' , justifyContent:'center', fontSize:'24px', color:'red'}}>Welcome and play Something Now</h2>
      <AddTodo />
      <Todos />
      <div style={{display:'flex'}}>
      <Counter />
      <Counter5 />
      <NameChanger />
      </div>
    </div>
  )
}

export default App