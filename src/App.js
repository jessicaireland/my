import React from 'react';
import './App.css';
import {Route, Switch, Link, withRouter} from "react-router-dom";

import ToDoList from "./components/ToDoList";
import Clock from "./components/Dashboard";
import Contact from "./components/Contact";

;


class App extends React.Component{

    state = {}
       
      
      
  render() {
    return(
      <>
      <Switch>
      <Route exact path="/" >
        <Clock />
      <Link style={styles.linkStyle} to="/todolist" >Home Page</Link>
      </Route>
      <Route path="/todolist" component={ToDoList}>
        <ToDoList /> 
        <Contact />    
      </Route>
      </Switch>
      </>
    );
  
}
}

const styles ={
  linkStyle:{
    backgroundColor: "rgb(24, 44, 87)",
    color: 'white',
    padding: '1em 1.5em',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
};




export default withRouter(App);

