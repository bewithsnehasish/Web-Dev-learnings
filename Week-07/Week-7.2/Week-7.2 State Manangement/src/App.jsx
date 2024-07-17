import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/selector";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is Odd" : "It is a Even number"}</div>;
}

// //Function made using the state component but the buttons also re-renders so to avoid it we can do this

// function Buttons() {
//   //useRecoilState brings the component as the staate component
// const [count, setCount] = useRecoilState(countAtom);
//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase Count
//       </button>

//       <button
//         type="button"
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease Count
//       </button>
//     </div>
//   );
// }

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-renders");

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        type="button"
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
