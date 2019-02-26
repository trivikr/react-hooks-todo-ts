import { setVisibilityFilter } from "../actions";
import { VisibilityFilterType, VisibilityFilterActionType } from "../types";

describe("todo actions", () => {
  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(setVisibilityFilter(VisibilityFilterType.SHOW_ALL)).toEqual({
      type: VisibilityFilterActionType.SET_VISIBILITY_FILTER,
      filter: VisibilityFilterType.SHOW_ALL
    });
  });
});
