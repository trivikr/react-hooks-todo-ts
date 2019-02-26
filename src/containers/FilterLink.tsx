import React, { useContext } from "react";
import { setVisibilityFilter } from "../store/visibilityFilter/actions";
import Link from "../components/Link";
import StoreContext from "../store/StoreContext";
import { VisibilityFilterType } from "../store/visibilityFilter/types";

const FilterLink: React.FC<{
  filter: VisibilityFilterType;
}> = ({ filter, children }) => {
  const [{ visibilityFilter }, dispatch] = useContext(StoreContext);
  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </Link>
  );
};

export default FilterLink;
