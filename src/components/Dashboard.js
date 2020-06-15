import React, { Component } from "react";
import{withRouter} from "react-router-dom";

class Clock extends Component {
    constructor(props) {
        super(props);

    this.state = {
        date: new Date()
    };
    }

componentDidMount() {
    this.timerId = setInterval(
        () => this.tick(),
        1000
    )
}

componentWillUnmount() {
    clearInterval(this.timerId.Id);
}

    tick() {
        this.setState({
            date: new Date()
        });
    }
render(){
    return (
        <div className="Clock">
            <h1>Welcome Back!</h1>
            <h2>The time is {this.state.date.toLocaleTimeString()} </h2>
        </div>
    )
}
}

export default withRouter(Clock);