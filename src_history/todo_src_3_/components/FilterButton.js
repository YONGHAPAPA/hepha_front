import React from "react";

const FilterButton = ({ active, onClick, children }) => (
    <button onClick={onClick} disabled={active}>
        {children}
    </button>
);

export default FilterButton;
