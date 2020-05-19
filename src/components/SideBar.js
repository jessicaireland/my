import React from "react";




function SideBar (props) {
    return(
      
     <ul className="nav-bar-side">

       <img src={props.user.avatarImage} className="avatar-1" alt=""/>
       <h3>{props.user.name}</h3>
       
        <li>Lists</li>
        <li>Calendar</li>
        <li>Planner</li>
        <li>Reminders</li>
        <li>Contacts</li>
    
     </ul>
    
    );
}

export default SideBar;