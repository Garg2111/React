import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"hello",
    age:22
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black mg-4'>Tailwind Test</h1>
      <Card username="ANSHGARG" btnText='click me'/>
      <Card username="CHANDA"/>

    </>
  )
}

export default App
