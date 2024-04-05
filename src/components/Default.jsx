import { Bin, Edit, key } from '../exports';

export function Default({ todo, todosArr, setTodosArr }) {

    const handleCheckboxChange = (todoId) => {
        setTodosArr((prevTodosArr) => {
          const updatedTodosArr = prevTodosArr.map((t) =>
            t.id === todoId ? { ...t, completed: !t.completed } : t
          );
          localStorage.setItem(key, JSON.stringify(updatedTodosArr));
          return updatedTodosArr;
        });
      };

  const handleEditMode = (todoId) => {
    setTodosArr((prevTodosArr) =>
      prevTodosArr.map((t) =>
        t.id === todoId ? { ...t, editMode: true } : t
      )
    );
  };

  const deleteTodo = (id) => {
    const updatedArr = todosArr.filter((ele) => ele.id !== id);
    setTodosArr(updatedArr);
    localStorage.setItem(key, JSON.stringify(updatedArr));
  };

  return (
    <div key={todo.id} className="text-white border-b-2 border-[#95A3B5] w-[90%] mx-auto">
      <div className="flex items-center py-2">
        <input
          checked={todo.completed}
          id={`todo-${todo.id}`}
          type="checkbox"
          className="accent-indigo-600 ml-4 mr-2"
          onChange={() => handleCheckboxChange(todo.id)}
        />
        <label htmlFor={`todo-${todo.id}`} className="">
          {todo.title}
        </label>
        <button onClick={() => handleEditMode(todo.id)} className='mx-3'>
          <Edit />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <Bin />
        </button>
      </div>
    </div>
  );
}