import { atomFamily } from "recoil";
import { TODOS } from "./todos";
import React from "react";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    //One way of mapping the Todos
    // return TODOS.find((x) => x.id === id);
    // Another way of mapping the todos
    let foundTodo = null;
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        foundTodo = TODOS[i];
      }
    }
    return foundTodo;
  },
});
