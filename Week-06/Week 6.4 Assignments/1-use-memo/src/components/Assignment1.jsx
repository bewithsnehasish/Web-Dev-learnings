import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function calculateFactorial(userInput) {
  let factorial = 1;
  for (let i = 1; i <= userInput; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

export function Assignment1() {
  const [input, setInput] = useState();
  // Your solution starts here
  // const expensiveValue = calculateFactorial(input);

  const expensiveValue = useMemo(() => {
    return calculateFactorial(input);
  }, [input]);

  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}

