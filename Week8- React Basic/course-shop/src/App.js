import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App(root) {

  // const [text, setText] = useState()
  // const [name, setName] = useState()

  // function changeHandler(event) {
  //   setText(event.target.value)
  //   // console.log(text)
  // }

  // useEffect ----->>>>>>>

  // Variation-1: Runs on Every Render
  // useEffect(() => {
  //   console.log("UI Rendered")
  // })

  // Variation-2: Runs on First Render
  // useEffect(() => {
  //   console.log("UI Rendered")
  // }, [])

  // Variation-3: first Render + whenever dependencies changes
  // useEffect(() => {
  //   console.log("UI Rendered")
  // }, [name])

  // Variation-4: to handle unmounting of a component
  // useEffect(() => {
  //   // add event listener
  //   console.log("Listener Added")

  //   // remove event listener
  //   return () => {
  //     console.log("Listener Removed")
  //   }

  // }, [text])

  // Window Resizing---->>>>>
  const [windowSize, setWindowSize] = useState({
    width : window.innerWidth,
    height : window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => (
      setWindowSize({
        width : window.innerWidth,
        height : window.innerHeight
      })
    )

    // Add the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  return (
    <div className="App">

      {/* <form>

        <label>Input </label>

        <input onChange={changeHandler} type="text" placeholder="Type Here" />

      </form> */}

      <h2>
        Window Size : {`Widht is: ${windowSize.width} & height is: ${windowSize.height}`}
      </h2>

    </div>
  );
}

export default App;