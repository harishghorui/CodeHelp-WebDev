import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null) //default set to null

  // useCallback for optimisation
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "1234567890"

    if(character) str += "~!@#$%^&*()_+=-`{}[]"

    for(let i = 1; i <= length; i++) {
      let randNum = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(randNum);
    }
    setPassword(pass);


  }, [length, number, character, setPassword])
  
  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator])
  
  const handleCopyBtn = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className='bg-gray-500 rounded-lg py-5 '>
      <h1 className='text-white text-4xl'>
        Password Generator
      </h1>

      <div>
        <input type="text" value={password} placeholder='password' readOnly 
          ref={passwordRef}
        />

        <button onClick={handleCopyBtn}>Copy</button>
      </div>

      <div>
        <div>
          <input type="range" min={6} max={100} value={length} 
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length} </label>
        </div>
        
        <div>
          <div>
            <input type="checkbox" onChange={() => {
              setNumber((prev) => !prev)
            }} />
            <label>Number</label>
          </div>

          <div>
            <input type="checkbox" onChange={() => {
              setChar((prev) => !prev)
            }} />
            <label>Special Char</label>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
