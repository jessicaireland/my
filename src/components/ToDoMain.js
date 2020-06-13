import React from "react";

function ToDoMain(props){
    return(
        <li>
          <p className="li-todo"><input type="checkbox"/>  {props.item.description}
           <i class="far fa-trash-alt" onClick={() => props.onDelete(props.item.id)}></i> </p>
        </li>
    )
}


    
  
  

export default ToDoMain;