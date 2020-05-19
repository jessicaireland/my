import React from 'react';
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ToDoMain from "./components/ToDoMain";
import GirlNames from './components/GirlNames';


// import logo from './logo.svg';
// const images = {
  // logo: require("./images/37616615-pregnant-woman-symbol-stylized-vector-sketch.jpg"),
 
// }

const user = {
  name: "Sally Lou",
  avatarImage: require("./images/myAvatar.png"),
}

const toDoLists = [{
  id: 1, 
  item: "Make Doctors Appointment",
  description: "call Dr",
  completed: false
},
{
  id: 2,
  item: "Make List of Girl Names",
  description: "List of girl names",
  completed: false
},
{
  id: 3,
  item: "Make List of Boy Names",
  description: "List of boy names",
  completed: false
},
{
  id: 4,
  item: "Make List of Baby Things Needed",
  description: "what are the things needed for baby",
  completed: false
}];

const girlNames = [{
  id: 1,
  name: "Julie"
},
{
  id: 2,
  name: "Kaya"
},
{
  id: 3,
  name: "Lilly"
}]


function App() { 
  return (
    <> 
   <Header />

   <main className="main-page">

   <SideBar  user={user}/>  
  
    <div className="main-list">
      <h3>Starting Tasks</h3>
      <ul>
        {toDoLists.map((toDoLists, index) =>
        <ToDoMain toDoLists={toDoLists} key={index}/>
        )}
      </ul>
      <button type="button" className="btn-add">Add To List</button>
      <h3>Girl Names</h3>
      <ul>
        {girlNames.map((girlNames, index) =>
        <GirlNames girlNames={girlNames} key={index}/>
        )}
        
      </ul>
      <button type="button" className="btn-add">Add To List</button>
    

    </div>
   </main>


   </>
  );
}

export default App;
