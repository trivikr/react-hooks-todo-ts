export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export enum TodoActionType {
  ADD_TODO = "@@todo/ADD_TODO",
  TOGGLE_TODO = "@@todo/TOGGLE_TODO"
}

export type TodoAction =
  | { type: TodoActionType.ADD_TODO; todo: TodoType }
  | { type: TodoActionType.TOGGLE_TODO; id: number };
