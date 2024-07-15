import { useState } from "react";

// What is Prop Drilling
// Prop drilling doesn't mean that parent re-renders children
// It just means the syntactic uneasiness when writing the code
//
// But we can solve this issue by using the method call Context API

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function Buttons({ count, setCount }) {
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
