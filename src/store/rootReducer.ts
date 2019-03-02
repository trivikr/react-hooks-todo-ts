import { todosReducer } from "./todos/reducer";
import { visibilityFilterReducer } from "./visibilityFilter/reducer";
import { StoreType, getDefaultStoreType } from "./StoreType";
import { Reducer, ReducerAction } from "react";

const rootReducer: Reducer<StoreType, ReducerAction<any>> = (
  state: StoreType = getDefaultStoreType(),
  action: any = {}
) => ({
  visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
  todos: todosReducer(state.todos, action)
});

export default rootReducer;
