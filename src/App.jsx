import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState("");
  const myStr = "";
  const HandlString = (str) => {
    str = setStr("this is how we use useStaste");
    return (
      <h1>{str}</h1>
    )

  }

  return (
    <div className="App border border-s-slate-300 flex flex-col items-center gap-3 p-2">
      <h1 className='flex bg-gray p-2' >My Counter App</h1>
      <button onClick={HandlString}>
        click to know why i made this
      </button>
      <div>{str}</div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => {setCount(count+1)}}>
          +
        </button>
        <button onClick={() => {setCount(count-1)}}>
          -
        </button>
      </div>

    </div>
  )
}

export default App
