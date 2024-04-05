import { useReducer } from "react";
import { key } from "../exports";

const initialState = {
  hideCompleted: false,
  showCompleted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_HIDE_COMPLETED":
      return {
        ...state,
        hideCompleted: !state.hideCompleted,
      };
    case "TOGGLE_SHOW_COMPLETED":
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    default:
      return state;
  }
}

export function FilterTodo({ todosArr, setTodosArr }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleHideCompleted() {
    dispatch({ type: "TOGGLE_HIDE_COMPLETED" });
    const updatedTodos = state.hideCompleted
      ? JSON.parse(localStorage.getItem(key)) || []
      : todosArr?.filter((todo) => !todo.completed) || [];
    setTodosArr(updatedTodos);
  }

  function handleShowCompleted() {
    dispatch({ type: "TOGGLE_SHOW_COMPLETED" });
    const updatedTodos = state.showCompleted
      ? JSON.parse(localStorage.getItem(key)) || []
      : todosArr?.filter((todo) => todo.completed) || [];
    setTodosArr(updatedTodos);
  }

  return (
    <>
      <div className="text-white mx-4 my-3 flex items-center justify-center gap-[5%] md:gap-10">
        <label htmlFor="hide">
          <input
            type="checkbox"
            name="completedTasks"
            id="hide"
            className="accent-[#0da5e9]"
            checked={state.hideCompleted}
            onChange={handleHideCompleted}
          />
          <span className="pl-1 text-sm">Hide Completed</span>
        </label>
        <label htmlFor="show">
          <input
            type="checkbox"
            name="completedTasks"
            id="show"
            className="accent-[#0da5e9]"
            checked={state.showCompleted}
            onChange={handleShowCompleted}
          />
          <span className="pl-1 text-sm">Show Completed</span>
        </label>
      </div>
    </>
  );
}