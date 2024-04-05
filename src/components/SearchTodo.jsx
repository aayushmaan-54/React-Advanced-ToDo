import { useEffect, useState } from 'react';
import { Search, key } from '../exports';

export function SearchTodo({setTodosArr, todosArr}) {

    const [search, setSearch] = useState("");

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

    return(
        <div className="py-3" >
            <form className="w-full px-4">
                <label className="sr-only mb-2 text-sm font-medium text-white" htmlFor="default-search">Search</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                        <Search />
                    </div>
                    <input placeholder="Search..." className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 ps-10 text-lg text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500" id="default-search" type="search" value={search}
                    onChange={(e) => setSearch(e.target.value)}  />
                </div>
            </form>
        </div>
    )
}