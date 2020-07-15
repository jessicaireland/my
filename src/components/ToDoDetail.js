import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";


class ToDoDetail extends Component {
    state = {
        notes: "",
        email: "",
        due: "",
        dueOptions: [ "Now", "Soon", "When I Get To It"],
        list: this.getToDoFromList(),
    };
    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.setState({list: this.getToDoFromList() });
        }
    }
    getToDoFromList () {
        const listId = parseInt(this.props.match.params.listId);
        return this.props.toDoList.find(item => item.id === listId) || {};
    };
    handleChange =(event) =>{
        const value = event.target.value
        const name = event.target.name
        this.setState({ [name]: value })
    };
    

    render () {
        return (
            <StyledDetailPage>
                <h3>List Details</h3>
        <DetailNotes>To Do: {this.state.list.description}
        <label>Notes</label>
        <textarea  cols="30" rows="10" 
                 value={this.state.notes} 
                 onChange={this.handleChange} 
                 type="text" 
                 placeholder="Notes"
                 name="notes"
        ></textarea>
        </DetailNotes>
        <TimeSelect name="due" value={this.state.due} onChange={this.handleChange}>
            <option value="" disabled> Pick Target Time
            </option>
            {this.state.dueOptions.map((due, index) => (
                <option value={due} key={index} >
                    {due}
                </option>
            ))}
        </TimeSelect>
        <EmailStyle>
            <label>Send Email Reminder</label>
            <input value={this.state.email} 
                onChange={this.handleChange}
                type="text"
                placeholder="Email" 
                name="email" />
            <SendButton>Send</SendButton>
        </EmailStyle>
             <LinkStyle>  
                <Link style={styles.linkstyle}to="/todolist">
                    Go Back To List
                </Link>
            </LinkStyle>    

            </StyledDetailPage>
        )
    }
}
export default withRouter(ToDoDetail);
 

const StyledDetailPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
`
const DetailNotes = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    color: rgb(18, 207, 18);
    border: 1px solid rgb(18, 207, 18);
`
const TimeSelect = styled.select`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    border: 1px solid rgb(18, 207, 18); 
`
const EmailStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    border: 1px solid rgb(18, 207, 18); 
`
const SendButton = styled.button`
    background-color: rgb(173, 238, 173);,
    color: black;
    border: 1px solid rgb(18, 207, 18);
    padding: 1em;
    margin: 3em;
      `

const LinkStyle = styled.div`
background-color: rgb(24, 44, 87);
color: white;
padding: 1em 1.5em;
textDecoration: none;
textTransform: uppercase;
`
const styles = {
    linkstyle:{
        color: "white",
    },
};