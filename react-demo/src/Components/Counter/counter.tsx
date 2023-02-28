import React from 'react'
import "./counter.css"
import { useState } from 'react'


const Counter: React.FC = ()  => {
  
  const [count, setCount] = useState(1);

  function increment(){
      setCount( count + 1); 
  }
  return (
    <div className='counterid'>
      <p>{count}</p>
        <button onClick = {increment}> Click Me </button>
    
    </div>
  )
}

export default Counter;