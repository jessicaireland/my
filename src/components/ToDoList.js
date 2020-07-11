import React from "react";
import ToDoMain from "./ToDoMain";
import Header from "./Header";
import SideBar from "./SideBar";
import ToDoDetail from "./ToDoDetail";
import {withRouter, Switch, Route} from "react-router-dom";

const TODO_KEY = "mytodo_app"
class ToDoList extends React.Component{
    state = {
      user: [
        { 
          name: "Sally Lou",
         avatarImage: require("/Users/jessicaireland/workspace/my/my/src/images/myAvatar.png"),
        }
     ],
        toDoList: [
          {
            id: 1, 
              title: "item 1",
              description: "Call Dr",
              completed: false
            },
            {
              id: 2,
              title: "item 2",
              description: "List of girl names",
              completed: false
            },
            {
              id: 3,
              title: "item 3",
              description: "List of boy names",
              completed: false
            },
            {
              id: 4,
              title: "item 4",
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
      handleDelete = id => {
        const filterId = this.state.toDoList.filter((toDoList) => toDoList.id !== id);
        this.setState({toDoList:filterId});
      }
      
      render() {
          return(
           <>
           <Switch>
             <Route path="/todolist/:todoId">
               <ToDoDetail toDoList={this.state.toDoList} />
             </Route>
             <Route path="/todolist">
              <Header />
          <div style={styles.mainStyle}>
          <main>
            {this.state.user.map((user, index)=>(
              <SideBar user={user} key={index}  />
              ))} 
              </main>
                 <div style={styles.mainList}>
                  <h3>Starting Tasks</h3>
                  <ul className="todo-ul">
                    {this.state.toDoList.map((item, index) =>(
                  <ToDoMain item={item} key={index.id}  
                    onDelete={this.handleDelete}/>
                      ))} 
                       
                  </ul> 
                  <div>
                    <input style={styles.addInput}
                    type="text" 
                    value={this.state.newTask} 
                    onChange={this.handleInputChange}></input>
                  <button 
                    onClick={this.handleAddNewTask}  
                    type="button" 
                  className="btn-add"  >Add To List</button></div>
              </div>
              
              </div>
              </Route>
              </Switch>
           </> 
          );
      }    
    }

    const styles = {
      mainStyle:{
        display: 'flex',
        flexDirection: 'row',
      },

      mainList:{
        borderLeft: 'solid 1px rgb(18, 207, 18)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
      },

      todoUl:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
      },

      addInput:{
        padding: 10,
        margin: '2em',
      },

      addButton:{
        backgroundColor: '173, 238, 173',
        color: 'black',
        border: '1px solid rgb(18, 207, 18)',
        padding: '1em',
        margin: '3em',
      },

      
    };




export default withRouter(ToDoList)