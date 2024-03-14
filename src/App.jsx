import { InputTodo } from './components/exports';

export const key = "ToDo Array";

function App() {

  return (
    <>
      <h1 className='heading'>ToDo's 📃</h1>
      <InputTodo />
    </>
  )
}

export default App

/*
TODO: 
 * Can only check hide completed or show completed at a time
 * when searching and backspacing while hide completed is checked then hide completed not working, same goes with show ocmpleted
*/