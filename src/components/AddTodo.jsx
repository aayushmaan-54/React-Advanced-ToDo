import { useState, useEffect } from 'react';
import { FilterTodo, EditTodo, key, uuidv4, DefaultMode } from './exports';
import { IoIosAddCircleOutline } from "react-icons/io";


export function AddTodo({ inputTodo, setInputTodo }) {
    const [todosArr, setTodosArr] = useState([]);

    useEffect(()=>{
      if(localStorage.getItem(key)){
          const storedTodo = JSON.parse(localStorage.getItem(key));
          setTodosArr(storedTodo);
      }
    },[])
  

    const addTodo = () => {
      if (inputTodo.trim()) {
        setTodosArr((prevTodosArr) => {
          const newTodosArr = [
            ...prevTodosArr,
            { title: inputTodo, completed: false, id: uuidv4(), editMode: false },
          ];
          localStorage.setItem(key, JSON.stringify(newTodosArr));
          return newTodosArr;
        });
        setInputTodo('');
      }
    };

    
    return (
      <>
        <button onClick={addTodo}><IoIosAddCircleOutline /></button> <br /> <br />
        <hr />
        {todosArr.map((todo) => (
          todo.editMode ? (
            <div key={todo.id}>
              <EditTodo 
                key={uuidv4()} 
                todo={todo} 
                setTodosArr={setTodosArr} 
                todosArr={todosArr} 
              />
            </div>
          ) : (
            <div key={todo.id}>
              <DefaultMode 
                key={uuidv4()} 
                todo={todo} 
                setTodosArr={setTodosArr} 
                todosArr={todosArr} 
              />
            </div>
          )
        ))}
        <FilterTodo todosArr={todosArr} setTodosArr={setTodosArr} todosArray={todosArr} />
      </>
    );
  }

  /*
  {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks`
          : null}
  */