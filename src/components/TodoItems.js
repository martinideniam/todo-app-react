import TodoItem from './TodoItem'

const TodoItems = ({todoList, setTodoList}) => {
  return (
    <div className='todoItems'>
      <h1 className='items-title'>To Do List</h1>
      {todoList.map((item) => <TodoItem item={item} key={item.key} todoList={todoList} setTodoList={setTodoList}/>)}
    </div>
  );
}

export default TodoItems;
