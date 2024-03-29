import { key } from './exports';
import { MdModeEdit } from "react-icons/md";
import { HiMiniTrash } from "react-icons/hi2";


export function DefaultMode({todo, setTodosArr, todosArr}) {

    function CheckboxHandler(id) {
        const updatedTodos = todosArr.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodosArr(updatedTodos);
        localStorage.setItem(key, JSON.stringify(updatedTodos));
    }

      
    function deleteTodo(id) {
        const updatedArr = todosArr.filter((ele) => ele.id !== id);
        setTodosArr(updatedArr);
        localStorage.setItem(key, JSON.stringify(updatedArr));
        console.log(todosArr);
    }


    function editTodoToggle(id) {
        setTodosArr((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, editMode: !todo.editMode } : todo
          )
        );
    }

    
    return (
        <>
            <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => CheckboxHandler(todo.id)}
            />

            <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
            <button onClick={() => editTodoToggle(todo.id)}><MdModeEdit /></button>
            <button onClick={() => deleteTodo(todo.id)}><HiMiniTrash /></button>
        </>
    )
}