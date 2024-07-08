import { useState } from 'react'
import React from 'react'

function App() {
  const [title, setTitle] = useState("harkirat1")

  function updateTitle() {
    setTitle("My name is " + Math.random())
  }

  return (
    <React.Fragment>
      <button type="button" onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </React.Fragment>
  )
}

function Header({ title }) {
  return <div>
    {title}
  </div>
}

export default App
