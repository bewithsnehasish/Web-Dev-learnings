import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        type="button"
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        type="button"
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        type="button"
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        type="button"
        onClick={function () {
          setSelectedId(4);
        }}
      >
        4
      </button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({}); // Initialize as null to handle the loading state

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => {
        // Assuming response.data.todo is an object
        setTodo(response.data.todo);
      });
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>; // Show loading state if todo is not yet fetched
  }

  return (
    <div>
      <p>{todo.id}</p>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
