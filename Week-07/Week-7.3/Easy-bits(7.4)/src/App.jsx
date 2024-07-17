import { useRecoilValue } from "recoil";
import "./App.css";
import { networkAtom } from "./atoms";

function App() {
  const networknotificationCount = useRecoilValue(networkAtom);
  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networknotificationCount >= 100 ? "99+" : networknotificationCount})
      </button>
      <button>Jobs()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>
    </>
  );
}

export default App;
