import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-4 bg-white px-5 py-3 rounded-3xl shadow-lg">

          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("black")}
            className="bg-black text-white px-4 py-2 rounded-full shadow"
          >
            Black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
