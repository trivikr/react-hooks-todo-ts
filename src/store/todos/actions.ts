import { TodoActionTypes } from "./types";

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: TodoActionTypes.ADD_TODO,
  todo: {
    id: nextTodoId++,
    completed: false,
    text
  }
});

export const toggleTodo = (id: number) => ({
  type: TodoActionTypes.TOGGLE_TODO,
  id
});
