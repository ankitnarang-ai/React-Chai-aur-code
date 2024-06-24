import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div style = {{backgroundColor: color, height:700}}>
        <div class="container">
          <button className="btn" onClick={() => setColor("Red")}>Red</button>
          <button className="btn" onClick={() => setColor("Green")}>Green</button>
          <button className="btn" onClick={() => setColor("Blue")}>Blue</button>
          <button className="btn" onClick={() => setColor("Pink")}>Pink</button>
        </div>
    </div>
      
    </>
  )
}

export default App
