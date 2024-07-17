import { selector } from "recoil";
import { countAtom } from "../atoms/count";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});

export const filteredTodos = selector({
  key: "filteredTodos",
  get: (props) => {
    const todos = props.get(todosAtom);
    const filter = props.get(filterAtom);

    return todos.filter(
      (x) => x.title.includes(filter) || x.description.includes("filter"),
    );
  },
});
