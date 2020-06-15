import React from 'react';
import './App.css';
import {Route, Switch, Link, withRouter} from "react-router-dom";

import ToDoList from "./components/ToDoList";
import Clock from "./components/Dashboard";

;


class App extends React.Component{

    state = {}
       
      
      
  render() {
    return(
      <>
      <Switch>
      <Route exact path="/" >
        <Clock />
      <Link to="/todolist" >Home Page</Link>
      </Route>
      <Route path="/todolist" component={ToDoList}>
        <ToDoList />      
      </Route>
      </Switch>
      </>
    );
  
}
}





export default withRouter(App);

