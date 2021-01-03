import TodoItems from './components/TodoItems'
import TodoInput from './components/TodoInput'
import {useState} from 'react'
import './styles/style.scss'

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <main>
        <TodoInput inputTodo={inputTodo} setInputTodo={setInputTodo} todoList={todoList} setTodoList={setTodoList}/>
        <TodoItems todoList={todoList} setTodoList={setTodoList}/>
      </main>
    </div>
  );
}

export default App;
