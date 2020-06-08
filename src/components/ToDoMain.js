import React from "react";

function ToDoMain(props){
    return(
        <li>
          <p><input type="checkbox"/>  {props.title.description}
           <i class="far fa-trash-alt" onClick={props.deleteEvent}></i> </p>
        </li>
    )
}


    
  
  

export default ToDoMain;