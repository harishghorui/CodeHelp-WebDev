import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen flex justify-center" style={{backgroundColor: color}}>

      <div className="fixed bottom-12 flex flex-wrap border rounded-full px-10 py-3 bg-white w-[80%] ">

        <div className="w-full flex flex-wrap gap-5 justify-around ">

          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"red"}} 
          onClick={() => setColor("red") }>
            Red
          </button>

          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"green"}} 
          onClick={() => setColor("green") }>
            Green
          </button>

          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"blue"}} 
          onClick={() => setColor("blue") }> 
            Blue
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"olive"}} 
          onClick={() => setColor("olive") }> 
            Olive
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"gray"}} 
          onClick={() => setColor("gray") }> 
            Gray
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"yellow"}} 
          onClick={() => setColor("yellow") }> 
            Yellow
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"pink"}} 
          onClick={() => setColor("pink") }> 
            Pink
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"purple"}} 
          onClick={() => setColor("purple") }> 
            Purple
          </button>
          
          <button className="border rounded-full py-2 px-5 text-black" style={{backgroundColor:"lavender"}} 
          onClick={() => setColor("lavender") }> 
            Lavender
          </button>
          
          <button className="border rounded-full py-2 px-5 text-black" style={{backgroundColor:"white"}} 
          onClick={() => setColor("white") }> 
            White
          </button>
          
          <button className="border rounded-full py-2 px-5 text-white" style={{backgroundColor:"black"}} 
          onClick={() => setColor("black") }> 
            Black
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
