const TodoItem = ({item, setTodoList, todoList}) => {
    const deleteItem = () => {
        setTodoList(todoList.filter((i) => i.key !== item.key))
    }
    return (
        <div className="todo-item">
            <p className='todo-title'>{item.text}</p>
            <button onClick={deleteItem} className='todo-delete'>Delete</button>
        </div>
    )
}
 
export default TodoItem;