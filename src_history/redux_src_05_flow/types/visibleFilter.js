// @flow

export type VisibleFilter =
    | "SHOW_ALL"
    | "SHOW_ACTIVE"
    | "SHOW_COMPETED";

export type VisibleFilterState = {
    +visibleFilter: VisibleFilter
};

export type VisibilityFilterAction = {
    type: "SET_VISIBLE_FILTER",
    +filter: VisibleFilter
};
