import React from "react";
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

function ToDoMain(props){
    return(
        
       
        <StyledLi> 
            <input type = "checkbox"></input>
           <div onClick={() =>props.history.push("/todolist/" + props.item.description)}>
            {props.item.description}</div>
            <i className="far fa-trash-alt" onClick= {()=> props.deleteItem(props.id)}></i>
        </StyledLi>
    )
    
}


    
  
  

export default withRouter(ToDoMain);

const StyledLi = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
`


// onClick= {()=> props.onDelete(props.item.id)}></i>