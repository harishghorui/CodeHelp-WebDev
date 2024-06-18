import { useState } from "react";

function App() {

  const [count, updateCount] = useState(0);

  const increment = () => {
    updateCount(count+1);
    console.log(count);
  }

  const decrement = () => {
    updateCount(count-1);
    console.log(count);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div>
        <button onClick={increment}>+</button>
        <span> {count} </span>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
