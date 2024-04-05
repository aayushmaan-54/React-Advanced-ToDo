import { AddTodo } from "./exports";
export const key = "ToDo Array";

function App() {
  
  return (
    <>
      <h1 className="font-VarFont text-7xl text-center p-9 hover:cursor-pointer">
        <span className="varFirstPart1 text-[#0da5e9] hover:text-[#9358F7] underline underline-offset-4 decoration-[#0da5e9]">T</span>
        <span className="varFirstPart2 text-[#0da5e9] hover:text-[#9358F7] underline underline-offset-4 decoration-[#9358F7]">o</span>
        <span className="varSecondPart1 text-[#9358F7] hover:text-[#0da5e9] underline underline-offset-4 decoration-[#0da5e9]">D</span>
        <span className="varSecondPart2 text-[#9358F7] hover:text-[#0da5e9] underline underline-offset-4 decoration-[#9358F7]">o</span>
      </h1>
      <div className="bg-[#101729] w-[300px] h-[50vh] border-[#262F3F] border-2 rounded-md mx-auto shadow-[-21px_25px_105px_14px_#805ad5,23px_-18px_93px_0px_#4299e1] filter my-12 sm:w-2/4 md:w-[380px] xl:w-[500px]">
        <AddTodo />
      </div>
    </>
  )
}

export default App;


