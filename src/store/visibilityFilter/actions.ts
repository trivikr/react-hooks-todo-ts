import { VisibilityFilterType, VisibilityFilterActionType } from "./types";

export const setVisibilityFilter = (filter: VisibilityFilterType) => ({
  type: VisibilityFilterActionType.SET_VISIBILITY_FILTER,
  filter
});
