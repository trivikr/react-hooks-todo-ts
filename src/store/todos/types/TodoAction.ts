import { TodoActionType, TodoType } from ".";

export type TodoAction =
  | { type: TodoActionType.ADD_TODO; todo: TodoType }
  | { type: TodoActionType.TOGGLE_TODO; id: number };
