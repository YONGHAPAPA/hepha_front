import React from "react";
import PropType from "prop-types";

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: "4px"
        }}
    >
        {children}
    </button>
);

Link.propTypes = {
    active: PropType.bool.isRequired,
    children: PropType.node.isRequired,
    onClick: PropType.func.isRequired
};

export default Link;
