export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum TodoActionTypes {
  ADD_TODO = "@@todo/ADD_TODO",
  TOGGLE_TODO = "@@todo/TOGGLE_TODO"
}

export type TodoAction =
  | { type: TodoActionTypes.ADD_TODO; todo: Todo }
  | { type: TodoActionTypes.TOGGLE_TODO; id: number };
