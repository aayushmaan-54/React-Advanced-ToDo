import { useEffect, useState } from 'react';
import { key } from './exports';
import { IoSearchCircle } from "react-icons/io5";

export function FilterTodo({ todosArr, setTodosArr }) {
    const [search, setSearch] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    function searchTodo() {
        if (search.trim().length === 0) {
            const storedTodo = JSON.parse(localStorage.getItem(key));
            setTodosArr(storedTodo);
          } else {
            const updatedTodo = todosArr.filter((ele) =>
              ele.title.toLowerCase().includes(search.toLowerCase())
            );
            setTodosArr(updatedTodo);
          }
    }


    useEffect(() => {
        if (search.trim().length === 0) {
            const storedTodo = JSON.parse(localStorage.getItem(key));
            setTodosArr(storedTodo);
          } else {
            const updatedTodo = todosArr.filter((ele) =>
              ele.title.toLowerCase().includes(search.toLowerCase())
            );
            setTodosArr(updatedTodo);
          }
    }, [search])


    function hideTodos() {
      setIsChecked(!isChecked);
      const updatedTodos = isChecked
        ? JSON.parse(localStorage.getItem(key)) || []
        : todosArr.filter((todo) => !todo.completed)
      setTodosArr(updatedTodos);
    }


    function showTodos() {
      setIsChecked2(!isChecked2); 
      const updatedTodo = isChecked2
        ?  JSON.parse(localStorage.getItem(key)) || []
        : todosArr.filter((ele) => ele.completed);
      setTodosArr(updatedTodo);
    }


    return(
        <>
            <br /> <hr /> <br />
            <input 
                type="text" 
                placeholder='Search ToDo...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='inputText'
            />

            <button onClick={searchTodo}><IoSearchCircle /></button> {" "}
            
            <input 
                type="checkbox" 
                id="hide" 
                value={isChecked}
                onChange={hideTodos}
            />
            <label htmlFor="hide" >Hide Completed</label> {" "}

            <input 
                type="checkbox" 
                id="hide2" 
                value={isChecked2}
                onChange={showTodos}
            />
            <label htmlFor="hide2" >Show Completed</label>
        </>
    )
}

