import React from "react";
import { connect } from "react-redux";
import { setFilter, VisibleFilters } from "../actions";

const mapStateToProps = state => ({
    filter: state.visibleFilter
});

const mapDispatchToProps = {
    setFilter: setFilter
};

const FilterLink = ({ filter, setFilter }) => (
    <div>
        <button
            disabled={filter === VisibleFilters.SHOW_ALL}
            onClick={() => setFilter(VisibleFilters.SHOW_ALL)}
        >
            All
        </button>
        <button
            disabled={filter === VisibleFilters.SHOW_ACTIVE}
            onClick={() => setFilter(VisibleFilters.SHOW_ACTIVE)}
        >
            Active
        </button>
        <button
            disabled={filter === VisibleFilters.SHOW_COMPLETED}
            onClick={() => setFilter(VisibleFilters.SHOW_COMPLETED)}
        >
            Completed
        </button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);
