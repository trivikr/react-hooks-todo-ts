export enum VisibilityFilterType {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE"
}

export enum VisibilityFilterActionType {
  SET_VISIBILITY_FILTER = "@@visibilityFilter/SET_VISIBILITY_FILTER"
}

export type VisibilityFilterAction = {
  type: VisibilityFilterActionType.SET_VISIBILITY_FILTER;
  filter: VisibilityFilterType;
};
