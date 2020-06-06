import React from 'react';
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ToDoMain from "./components/ToDoMain";



class App extends React.Component{

    state = {
        user: [
           { 
             name: "Sally Lou",
            avatarImage: require("./images/myAvatar.png"),
           }
        ],
        toDoLists: [
          {
            id: 1, 
              title: "Make Doctors Appointment",
              description: "Call Dr",
              completed: false
            },
            {
              id: 2,
              title: "Make List of Girl Names",
              description: "List of girl names",
              completed: false
            },
            {
              id: 3,
              title: "Make List of Boy Names",
              description: "List of boy names",
              completed: false
            },
            {
              id: 4,
              title: "Make List of Baby Things Needed",
              description: "what are the things needed for baby",
              completed: false
            },   
           
        ],
       newTask: ""   
      };
      handleInputChange = (event) => {
        this.setState({newTask: event.target.value});
      }
      handleAddNewTask = () => {
        let newTaskObj = {
          name: this.state.newTask
        }
        this.setState({
          toDoLists: [...this.state.toDoLists, newTaskObj],
          newTask: ""
        });
      };
    
  render() {
    return(
      <>
      <Header />
      <main className="main-page">
      <SideBar  user={this.state.user}/>  
      </main>
      <div className="main-list">
        <h3>Starting Tasks</h3>
          <ul>
            {this.state.toDoLists.map((item, index) =>(
         
            <ToDoMain item={item} key={index}  />
            ))}
         </ul>
         <div>
            <input type="text" 
              value={this.state.newTask} 
              onChange={this.handleInputChange}></input>
            <button onClick={this.handleAddNewTask}  type="button" className="btn-add"  >Add To List</button></div>
         </div>
             
      </>
    );
  }
}






export default App;

