import React from 'react';
// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <>
    
    <div className="header">
   <h1>Do Dates</h1>
   </div>
   <main className="main-page">
     <ul className="nav-bar-side">
       <li>Lists</li>
       <li>Calendar</li>
       <li>Planner</li>
       <li>Reminders</li>
       <li>Contacts</li>
     </ul>
  
    <div className="main-list">
      <h3>Tasks</h3>
      <ul>
        <li>Call Doctor</li>
        <li>Make List of Baby Names</li>
        <li>Make List of Baby Stuff Needed</li>
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
