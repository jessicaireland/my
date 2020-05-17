import React from 'react';
// import logo from './logo.svg';
import './App.css';

// const images = {
  // logo: require("./images/37616615-pregnant-woman-symbol-stylized-vector-sketch.jpg"),
 
// }

const user = {
  name: "Sally Lou",
  avatarImage: require("./images/myAvatar.png"),
}

const toDoLists = [{
  id: 1, 
  title: "Make Doctors Appointment",
  description: "call Dr",
  completed: false
},
{
  id: 2,
  title: "Make List of Girl Names",
  description: "List of girl names",
  completed: false
},
{
  id: 3,
  title: "Make List of Boy Names",
  description: "List of boy names",
  completed: false
},
{
  id: 4,
  title: "Make List of Baby Things Needed",
  description: "what are the things needed for baby",
  completed: false
}];

function App() { 
  return (
    <>
    
    <div className="header">
   <h1>Do Dates</h1>
   {/* <img src={images.logo} className="header-logo" alt=""/> */}
   </div>
   <main className="main-page">
     <ul className="nav-bar-side">
       <img src={user.avatarImage} className="avatar-1" alt=""/>
       <h3>{user.name}</h3>
       
       <li>Lists</li>
       <li>Calendar</li>
       <li>Planner</li>
       <li>Reminders</li>
       <li>Contacts</li>
     </ul>
  
    <div className="main-list">
      <h3>Starting Tasks</h3>
      <ul>
        {toDoLists.map((toDoLists) =>
        <li>
          <p>{toDoLists.title}</p>
        </li>)}
      </ul>
      <button type="button" className="btn-add">Add To List</button>
      <h3>Girl Names</h3>
      <ul>
        <li>Julie</li>
        <li>Kaya</li>
        <li>Lilly</li>
      </ul>
      <button type="button" className="btn-add">Add To List</button>
      <h3>Boy Names</h3>
      <ul>
        <li>Toby</li>
        <li>Alphie</li>
        <li>Kyle</li>
      </ul>
      <button type="button" className="btn-add">Add To list</button>

    </div>
   </main>


   </>
  );
}

export default App;
