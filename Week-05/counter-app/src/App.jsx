import './App.css'
import { useState } from 'react';


function App() {
  const [todos,setTodos] = useState([{
    title:"Go to Gym",
    description: "Go to gym from 7 - 9",
    completed : false 
  },{
    title:"study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }]);


  return (
    <div>
      {todos.map(function(todo){
        return <Todo title={todo.title} description = {todo.description} completed = {todo.completed}></Todo>
      })}  
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h5>{props.completed}</h5>
  </div>

}

export default App
