import { Todo, TodoActionTypes, TodoAction } from "./types";
import { Reducer } from "react";

const reducer: Reducer<Todo[], TodoAction> = (state = [], action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, action.todo];
    case TodoActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export { reducer as todosReducer };
