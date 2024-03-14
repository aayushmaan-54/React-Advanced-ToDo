import { useState } from 'react';
import { key } from './exports';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { HiMiniTrash } from "react-icons/hi2";



export function EditTodo({todo, setTodosArr, todosArr}) {
    const [text, setText] = useState(() => todo.title);

    function saveEditedTodo(id) {
        const updatedTodos = todosArr.map((todo) =>
            todo.id === id ? { ...todo, title: text, editMode: false } : todo);
        setTodosArr(updatedTodos);
        localStorage.setItem(key, JSON.stringify(updatedTodos));
    }


    function cancelEditting(id) {
        setTodosArr((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, editMode: false } : todo
          )
        );
        setText('');
    }


    function deleteTodo(id) {
        const updatedArr = todosArr.filter((ele) => ele.id !== id);
        setTodosArr(updatedArr);
        localStorage.setItem(key, JSON.stringify(updatedArr));
        console.log(todosArr);
    }


    return (
        <>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />

            <button onClick={() => saveEditedTodo(todo.id)}><FaCheckCircle /></button>
            <button onClick={() => cancelEditting(todo.id)}><IoIosCloseCircle /></button>
            <button onClick={() => deleteTodo(todo.id)}><HiMiniTrash /></button>
        </>
    )
}