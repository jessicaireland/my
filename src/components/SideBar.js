import React from "react";
import { Link } from "react-router-dom";




function SideBar (props) {
    return(
      
     <ul className="nav-bar-side">

       <img src={props.user.avatarImage} className="avatar-1" alt=""/>
       <h3>{props.user.name}</h3>
       
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/todolist">Lists</Link></li>
        <li><Link to="">Pictures</Link></li>
       
    
     </ul>
    
    );
}

export default SideBar;