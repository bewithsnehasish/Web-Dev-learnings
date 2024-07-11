import { useState } from 'react'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to the gym",
    description: "go to the gum today"
  }, {
    id: 2,
    title: "go to the food",
    description: "go to the have food today"
  }, {
    id: 3, // Updated id to be unique
    title: "go to the class",
    description: "go to class today"
  }])

  function addTodo() {
    //This todo is pushed using the use of spread operator and setTodos
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])

    //This is another way to do  the work but without the spread operator here we use the functionality of the JavaScript and push it its the uglier way of doing the code but it can be worked with
    // const newTodos = [];
    // for (let i = 0; i < todos.length ; i++){
    //   newTodos.push(todos[i]);
    // }
    // setTodos.push({
    //   id:4,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // setTodos(newTodos);
  }

  return (
    <>
      <button type="button" onClick={addTodo}>Add a Todo</button>
      {/*One way of mapping the todo words with key,id,descriptiion*/}
      {todos.map(todo => < Todo key={todo.id} title={todo.title} description={todo.description} />)}
      {/*This is the another way of mapping the todo but as we are already familiar with it*/}
      {/*
        {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />;
        })}
      */}
    </>
  )
}

function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App

