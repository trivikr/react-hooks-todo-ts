import { Reducer } from "react";
import { TodoType, TodoAction, TodoActionType } from "./types";

const reducer: Reducer<TodoType[], TodoAction> = (state = [], action) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return [...state, action.todo];
    case TodoActionType.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export { reducer as todosReducer };
