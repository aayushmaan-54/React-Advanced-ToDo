import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { key, uuidv4, InputTodo, Default, FilterTodo, SearchTodo } from '../exports';
import { EditMode } from './EditMode';

export function AddTodo() {
  const [todosArr, setTodosArr] = useState([]);
  const inputTodoRef = useRef('');

  useEffect(() => {
    if (localStorage.getItem(key)) { 
      const storedTodo = JSON.parse(localStorage.getItem(key));
      setTodosArr(storedTodo);
    }
  }, []);

  const todoAddHandler = useCallback(() => {
    const inputValue = inputTodoRef.current.value.trim();
    if (inputValue) {
      setTodosArr((prevTodosArr) => {
        const newTodosArr = prevTodosArr
          ? [
              ...prevTodosArr,
              { title: inputValue, completed: false, id: uuidv4(), editMode: false },
            ]
          : [{ title: inputValue, completed: false, id: uuidv4(), editMode: false }];
        localStorage.setItem(key, JSON.stringify(newTodosArr));
        return newTodosArr;
      });
      inputTodoRef.current.value = '';
    }
  }, [inputTodoRef, setTodosArr, key]);

  const taskCountString = useMemo(() => {
    if (!todosArr) {
      return "No Tasks";
    } else if (todosArr.length === 0) {
      return "No Tasks";
    } else if (todosArr.length === 1) {
      return "1 Task";
    } else {
      return `${todosArr.length} Tasks`;
    }
  }, [todosArr]);
  
  const completedTodos = useMemo(() => (todosArr ? todosArr.filter((todo) => todo.completed) : []), [todosArr]);
  const incompleteTodos = useMemo(() => (todosArr ? todosArr.filter((todo) => !todo.completed) : []), [todosArr]);

  return (
    <>
      <SearchTodo setTodosArr={setTodosArr} todosArr={todosArr} />
      <div className='flex items-center justify-center sm:gap-2 gap-1 '>
          <div className="text-white mb-4 bg-gradient-to-tr from-sky-500 to-violet-600 w-fit sm:px-4 py-1 rounded font-bold text-[0.7rem] px-3">
            <span>{taskCountString}</span>
          </div>
          <div className="text-white mb-4 bg-gradient-to-tr from-sky-500 to-violet-600 w-fit sm:px-4 py-1 rounded font-bold text-[0.7rem] px-3">
            <span>Completed: {completedTodos.length}</span>
          </div>
          <div className="text-white mb-4 bg-gradient-to-tr from-sky-500 to-violet-600 w-fit sm:px-4 py-1 rounded font-bold text-[0.7rem] px-3">
            <span>Incomplete: {incompleteTodos.length}</span>
          </div>
        </div>
      <div className="overflow-y-scroll scrollbar-thumb-[#9358F7] scrollbar-thin scrollbar-track-slate-700 h-3/6">
      {todosArr && todosArr.map((todo, index) => todo.editMode ? (
          <EditMode key={index} todo={todo} todosArr={todosArr} setTodosArr={setTodosArr} />
        ) : (
          <Default key={index} todo={todo} todosArr={todosArr} setTodosArr={setTodosArr} />
        ))}
      </div>
      <InputTodo todoAddHandler={todoAddHandler} inputTodoRef={inputTodoRef} />
      <FilterTodo setTodosArr={setTodosArr} todosArr={todosArr} />
    </>
  );
}