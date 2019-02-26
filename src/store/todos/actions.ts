import { TodoActionType } from "./types";

let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: TodoActionType.ADD_TODO,
  todo: {
    id: nextTodoId++,
    completed: false,
    text
  }
});

export const toggleTodo = (id: number) => ({
  type: TodoActionType.TOGGLE_TODO,
  id
});
