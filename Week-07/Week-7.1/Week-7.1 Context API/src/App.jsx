import { useContext, useState } from "react";
import { CountContext } from "./context";

// What is Prop Drilling
// Prop drilling doesn't mean that parent re-renders children
// It just means the syntactic uneasiness when writing the code
//
// But we can solve this issue by using the method call Context API
//
// Below is the solved example of solving the code using ContextAPI

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>

      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
    </div>
  );
}

export default App;
