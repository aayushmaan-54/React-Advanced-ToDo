import { key, Cancel, Save, Bin } from '../exports';
import { useState } from 'react';

export function EditMode({ todo, todosArr, setTodosArr }) {
    const [text, setText] = useState(todo.title);

    const saveEditedTodo = (id) => {
      const updatedTodos = todosArr.map((t) => {
        if (t.id === id) {
          return { ...t, title: text, editMode: false };
        }
        return t;
      });
      setTodosArr(updatedTodos);
      localStorage.setItem(key, JSON.stringify(updatedTodos));
    };

  const cancelEditing = (id) => {
    setTodosArr((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, editMode: false } : todo
      )
    );
    setText('');
  };

  const deleteTodo = (id) => {
    const updatedArr = todosArr.filter((ele) => ele.id !== id);
    setTodosArr(updatedArr);
    localStorage.setItem(key, JSON.stringify(updatedArr));
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 py-2 px-4">
        <input
          placeholder="Enter New ToDo..."
          className="block w-full rounded-sm border border-gray-600 bg-gray-700 p-2 text-sm text-white placeholder-gray-400 outline-none focus:border-blue-500 min-h-2 focus:ring-blue-500"
          id="default-search"
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => saveEditedTodo(todo.id)}>
          <Save />
        </button>
        <button onClick={() => cancelEditing(todo.id)}>
          <Cancel />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <Bin />
        </button>
      </div>
    </>
  );
}