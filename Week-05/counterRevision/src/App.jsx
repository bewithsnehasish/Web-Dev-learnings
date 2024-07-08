import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0); // [1,2]
  const [todos, setTodos] = useState([{
    title: "Go to the Gym ❌",
    description: "Go to the gym from 3-4 ♌",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study Dsa for yourself because eventually it would help you only",
    completed: true
  }, {
    title: "Talk to your girl 👎",
    description: "No i dont have any girl ",
    completed: false
  }])

  return (
    <div>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} completed={todo.completed} />
      })}

    </div>
  )

  return (
    <>
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
    </>
  )
}

function CustomButton(props) {
  function onClickhandler() {
    props.setCount(props.count + 1)
  }
  return (
    <button type="button" onClick={onClickhandler}>
      Counter {props.count}
    </button>
  )
}

function Todo(params) {
  return <div>
    <h2>Title : {params.title}</h2>
    <h4>Description : {params.description}</h4>
    <h6>Completed : {params.completed}</h6>
  </div>
}

export default App
