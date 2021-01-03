import { v4 as uuidv4 } from 'uuid';

const TodoInput = (props) => {
    const preventDefaultB = (e) => {
        e.preventDefault();
    }

    const treatInput = (e) => {
        props.setInputTodo(e.target.value);
    }

    const passTodo = () => {
        props.setTodoList([...props.todoList, {text: props.inputTodo, key: uuidv4()}])
    }

    return (
        <form onSubmit={preventDefaultB} className='todo-form'>
            <div className="input-button">
                <input value={props.inputTodo} onInput={treatInput} type="text" name="todo-input" id="todo-input"/>
                <button onClick={passTodo} className="add">+</button>
            </div>
        </form>
    )
}

export default TodoInput;