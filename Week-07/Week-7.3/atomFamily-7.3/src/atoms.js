import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import React from "react";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  // default: (id) => {
  //   //One way of mapping the Todos
  //   // return TODOS.find((x) => x.id === id);
  //   // Another way of mapping the todos
  //   let foundTodo = null;
  //   for (let i = 0; i < TODOS.length; i++) {
  //     if (TODOS[i].id === id) {
  //       foundTodo = TODOS[i];
  //     }
  //   }
  //   return foundTodo;
  // },
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`,
        );
        return res.data.todo;
      },
  }),
});
