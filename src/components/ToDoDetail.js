import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";


class ToDoDetail extends Component {
    state = {
        
        list: this.getToDoFromList(),
    };
    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.setState({list: this.getToDoFromList() });
        }
    }
    getToDoFromList () {
        const listId = parseInt(this.props.match.params.listId);
        return this.props.toDoList.find(item => item.id === listId) || {};
    };
    render () {
        return (
            <div>
                <h3>{this.state.list.id}</h3>
        <div>Details: {this.state.list.description}</div>
                <Link className="toDoBackLink" to="/todolist">
                    Go Back To List
                </Link>
            </div>
        )
    }
}
export default withRouter(ToDoDetail);