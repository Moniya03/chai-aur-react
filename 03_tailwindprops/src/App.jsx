import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"shin",
    age:12
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl' > Tailwind Test</h1>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <Card username="moniya"/>
        <Card username="aaru"/>
</div>
    </>
  )
}

export default App
