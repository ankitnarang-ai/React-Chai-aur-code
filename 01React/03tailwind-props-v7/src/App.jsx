import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Component/card'

const data = {
  name: "First Card",
  discription: "This is the first card",
}
const data2 = {
  name: "Second Card",
  discription: "This is the Second card",
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card name = {data.name} discription = {data.discription}/>
     <Card name = {data2.name} discription={data2.discription}/>
    </>
  )
}

export default App
