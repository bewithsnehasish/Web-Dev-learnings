import { useState } from "react";

function App() {
  const [exchangeData, setexchangeData] = useState({});
  const [bankData, setbankData] = useState({});
  console.log("Hi this is re-rendering");

  setTimeout(() => {
    setbankData({ income: 100 });
  }, 3000);

  setTimeout(() => {
    setexchangeData({
      returns: 100,
    });
  }, 1000);

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return <>hi there , your income tax returns are {incomeTax}</>;
}

export default App;
