import React from "react";
import { Link } from "react-router-dom";




function SideBar (props) {
    return(
      
     <ul style={styles.navBarSide}>

       <img src={props.user.avatarImage} style={styles.avatar} alt=""/>
       <h3 style={styles.nameStyle}>{props.user.name}</h3>
       
        <li style={styles.linkStyleNav}><Link to="/">Dashboard</Link></li>
        <li style={styles.linkStyleNav} ><Link to="/todolist">Lists</Link></li>
        
       
    
     </ul>
    
    );
}

const styles ={

  avatar: {
  maxHeight: 45,
  maxWidth: 45,
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItem: 'center',
  margin: 'auto',
  },

  nameStyle:{
    color: 'rgb(18, 207, 18)',
    textAlign: 'center',
  },

  navBarSide: {
    listStyleType: 'none',
    padding: 2,
    marginLeft: 2,
  },

  linkStyleNav:{
    // backgroundColor: "rgb(24, 44, 87)",
    color: 'white',
    padding: 3,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
};

export default SideBar;