import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}

export default App;
