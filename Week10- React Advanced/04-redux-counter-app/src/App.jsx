import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/CounterSlice'

function App() {

  // to access/use the reducers-->> 'useDispatch()' hook
  const dispatch = useDispatch()

  // to fetch values of slices 'useSelector()' hook
  const count = useSelector(state => state.counter.value)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <div>{count}</div>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default App