import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilterType } from "../store/visibilityFilter/types";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilterType.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilterType.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilterType.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
);

export default Footer;
