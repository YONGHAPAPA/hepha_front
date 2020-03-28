import React from "react";
import { Filters } from "../actions";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <div>
        <FilterLink filter={Filters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={Filters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={Filters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </div>
);

export default Footer;
