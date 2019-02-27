import { todosReducer } from "./todos/reducer";
import { visibilityFilterReducer } from "./visibilityFilter/reducer";
import { StoreType, getDefaultStoreType } from "./StoreType";

export default function(
  state: StoreType = getDefaultStoreType(),
  action: any = {}
) {
  return {
    visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    todos: todosReducer(state.todos, action)
  };
}
