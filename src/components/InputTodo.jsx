import { SendBtn, Add } from '../exports';

export function InputTodo({ todoAddHandler, inputTodoRef }) {


    return(
        <>
            <form className="w-full px-4" onSubmit={(e) => {e.preventDefault()}}>
                <label className="sr-only mb-2 text-sm font-medium text-white" htmlFor="insertTodo">Input for Entering ToDos</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                        <Add />
                    </div>
                    <input placeholder="Add ToDo..." className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 ps-10 text-lg text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500" id="insertTodo" type="text" ref={inputTodoRef} />
                    <button className="absolute bottom-1/2 end-2.5 translate-y-1/2 rounded-lg bg-gradient-to-tr from-sky-500 to-violet-600 py-2 px-3 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-800" onClick={todoAddHandler}>
                        <SendBtn />
                        <span className="sr-only">Add Todo Button</span>
                    </button>
                </div>
            </form>
        </>
    )
}