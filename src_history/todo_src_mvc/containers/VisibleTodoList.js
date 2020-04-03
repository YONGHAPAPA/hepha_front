import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = state => {
    //var temp = getVisibleTodos(state);
    //console.log(temp);

    return {
        filteredTodos: getVisibleTodos(state)
    };
};

const mapDispatchToProps = dispatch => {
    var objActions = bindActionCreators(TodoActions, dispatch);
    console.log(objActions);

    return {
        //actions: bindActionCreators(TodoActions, dispatch)
        actions: objActions
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
