import { useState,useMemo } from 'react'

const [counter, setCounter] = useState(0)
function App() {
  const [inputValue, setInputValue] = useState(1)

  let count = useMemo(() =>{
    let finalCount = 0;
    for(let i = 1 ; i <= inputValue; i++){
      finalCount += i;
    }
    return finalCount;
  },[inputValue])

  return <div>
    <input type="text" onChange={function(e){
      setInputValue(e.target.value)
    }} placeholder="Find the sum from 1 to n"/>
    <br/>
    <p>Sum from 1 to {inputValue} is {count}</p>
    <button onClick={()=>{
      setCounter(counter + 1)
    }}>Counter ({counter})</button>
  </div>
}

export default App
