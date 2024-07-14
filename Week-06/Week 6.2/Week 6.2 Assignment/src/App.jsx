import { memo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function logSomenthing() {
    console.log("child clicked")
  }

  return (
    <>
    <ButtonComponent inputFunction={logSomenthing} />   
      <button type="button" onClick={()=>{
        setCount(count+1)
      }}> Click me {count }</button>
  </>
  )
}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("Child render")

  return <div>
    <button type="button" onClick={inputFunction}>Button Clicked</button>
  </div>
})

export default App
