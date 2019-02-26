import {
  VisibilityFilterType,
  VisibilityFilterAction,
  VisibilityFilterActionType
} from "./types";
import { Reducer } from "react";

const reducer: Reducer<VisibilityFilterType, VisibilityFilterAction> = (
  state = VisibilityFilterType.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case VisibilityFilterActionType.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export { reducer as visibilityFilterReducer };
