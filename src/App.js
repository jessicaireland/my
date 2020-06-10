import React from 'react';
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ToDoMain from "./components/ToDoMain";
// import Clock from "./components/Dashboard";

const TODO_KEY = "mytodo_app"
class App extends React.Component{

    state = {
        user: [
           { 
             name: "Sally Lou",
            avatarImage: require("./images/myAvatar.png"),
           }
        ],
        toDoList: [
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
       newTask: "",  
      
      };

      componentDidMount() {
        this.handleAddNewTask();
        const todoString = localStorage.getItem(TODO_KEY)
        if (todoString){
          this.setState({toDoList: JSON.parse(todoString) })
        }
      }

      componentDidUpdate(prevProps, prevState) {
        if(prevState.toDoList !== this.state.toDoList){
        localStorage.setItem(TODO_KEY, JSON.stringify(this.state.toDoList) )
      }
    }
      
    
      handleInputChange = (event) => {
        this.setState({newTask: event.target.value});
      };
      handleAddNewTask = () => {
        let newTaskObj = {
          description: this.state.newTask
        }
        this.setState({
          toDoList: [...this.state.toDoList, newTaskObj],
          newTask: ""
        });
      };
      deleteTodo = (index, event) => {
        const toDoList = Object.assign([], this.state.toDoList);
        toDoList.splice(index, 1);
        this.setState({toDoList:toDoList});
      }
    
  render() {
    return(
      <>
      <Header />
      <div className="main-style">
      <main className="main-page">
        {this.state.user.map((user, index)=>(
       <SideBar user={user} key={index}  />
      ))}
      
             
      </main>
      <div className="main-list">
        <h3>Starting Tasks</h3>
          <ul className="todo-ul">
            {this.state.toDoList.map((title, index) =>(
              <ToDoMain title={title} key={index}  
              deleteEvent={this.deleteTodo.bind(this.description)}/>
              ))}
              
         </ul>
             
         <div>
            <input className="add-input"
              type="text" 
              value={this.state.newTask} 
              onChange={this.handleInputChange}></input>
            <button 
            onClick={this.handleAddNewTask}  
            type="button" 
            className="btn-add"  >Add To List</button></div>
         </div>
         </div>
             
      </>
    );
  }
}






export default App;

