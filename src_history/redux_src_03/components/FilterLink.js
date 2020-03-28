import React from "react";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";

const mapStateToProps = state => ({
    active: state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: filter => {
        dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: filter
        });
    }
});

const FilterLink = ({ active, onClick }) => (
    <div>
        <div>
            <button
                onClick={() => onClick(VisibilityFilters.SHOW_ALL)}
            >
                All
            </button>
            <button
                onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)}
            >
                Active
            </button>
            <button
                onClick={() =>
                    onClick(VisibilityFilters.SHOW_COMPLETED)
                }
            >
                Completed
            </button>
        </div>
    </div>
);

//export default FilterLink;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);
