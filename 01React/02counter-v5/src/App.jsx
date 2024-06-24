import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () =>{
   if(count === 20) return ;

   setCount(count + 1)
  }
    
  const subValue = () => {
    if(count === 0) return;
    
    setCount(count - 1)
  }

  return (
    <>
      <h1>Assignment we limit the counter in between 0 - 20</h1>
      <h2>MY COUNTER</h2>
      <button onClick={addValue}>Add Value { count }</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value { count }</button>

    </>
  )
}

export default App
