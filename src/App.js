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
        toDoList: [
          {
            id: 1, 
              description: "Call Dr",
              completed: false
            },
            {
              id: 2,
              description: "List of girl names",
              completed: false
            },
            {
              id: 3,
              description: "List of boy names",
              completed: false
            },
            {
              id: 4,
              description: "what are the things needed for baby",
              completed: false
            },   
           
        ],
       newTask: "",   
      };

      
    
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
      handleDelete = id => {

        const filterId = this.state.toDoList.filter((toDoList) => toDoList.id !== id);
        this.setState({toDoList:filterId});
        
        // this.setState((state) => {
        //   const filterList = state.toDoList.id.filter(item => item.id !== this.id);
        //   this.setState ({toDoList: filterList})
        // });
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
            {this.state.toDoList.map((item, index) =>(
              <ToDoMain item={item} key={index}  
              onDelete={this.handleDelete}/>
              ))}
              
         </ul>
             
         <div>
            <input className="add-input"
              type="text" 
              value={this.state.newTask} 
              onChange={this.handleInputChange}></input>
            <button onClick={this.handleAddNewTask}  type="button" className="btn-add"  >Add To List</button></div>
         </div>
         </div>
             
      </>
    );
  }
}






export default App;

