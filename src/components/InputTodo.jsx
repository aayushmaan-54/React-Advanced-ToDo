import { useState } from "react";
import { AddTodo } from './exports';

export function InputTodo() {

    const [inputTodo, setInputTodo] = useState([]);
  
    return (
      <>
        <input
          type="text"
          placeholder="Enter ToDo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          className="inputText"
        />
        
        <AddTodo inputTodo={inputTodo} setInputTodo={setInputTodo} />
      </>
    );
  }