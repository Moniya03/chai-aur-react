import {useState} from 'react'
import './App.css'

function App(){
    const[Counter,setCounter] = useState(0);


const addValue = ()=>{
    setCounter(Counter+1)
    console.log("Added:", Counter+1);
}

const removeValue = () => {
    setCounter(Counter-1)
    console.log("Removed:", Counter-1);
}

return(
    <>
    <h1>React Course</h1>
    <h2>Counter value: {Counter}</h2>
    <button onClick={addValue}>Add Value</button>
    {""}
    <button onClick={removeValue}>Remove Value</button>

    </>
)
}
export default App