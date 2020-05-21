import React from "react";

function ToDoMain(props){
    return(
        <li>
          <p>{props.toDoLists.item}</p>
        </li>
    )
}

export default ToDoMain;