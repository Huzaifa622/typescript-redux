import './App.css'
import React, { useState } from 'react'
import { StateType, incrementByValue , increment, decrement } from './redux'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const [val, setVal] = useState<number>(0)
  const count = useSelector((state:StateType)=>state.count )
  const dispatch = useDispatch()
  const incrementByValueHandler = () =>{
     dispatch(incrementByValue(val))
  }
  return (
    <div>
      <h1>redux</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <input type='number' value={val} onChange={e=>setVal(Number(e.target.value))}/>
      <button disabled={val<1} onClick={incrementByValueHandler}>add</button>
    </div>
  )
}

export default App