import React from "react";
import {withRouter} from "react-router-dom"

function ToDoMain(props){
    return(
        // <li>
        //   <p className="li-todo"><input type="checkbox"  
        //   onClick={() => props.history.push("/todolist/" + props.item.id)}/>
        //    {props.item.description} 
        //    <i className="far fa-trash-alt" onClick= {()=> props.onDelete(props.item.id)}></i> </p>
        // </li>
        <li className="li-todo"> <input type="checkbox"/>
           <div onClick={() =>props.history.push("/todolist/" + props.item.description)}>
            {props.item.description}</div>
            <i className="far fa-trash-alt" onClick= {()=> props.onDelete(props.item.id)}></i>
        </li>
    )
}


    
  
  

export default withRouter(ToDoMain);