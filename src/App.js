import './App.css';
import {AddButton,DeleteButton} from './components/Button.jsx'
import { NameInput,AgeInput,TaskInput,ID } from './components/Input.jsx';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const todoData=useSelector((state)=>state.todoOperations);

  return (
   <div className="root">
    <h1> Todo's List</h1>
      <div className="todoBox">
        <ID/>
        <NameInput/>
        <AgeInput/>
        <TaskInput/>

        {todoData.map((data)=>{
          return (
            <div>
              <span>{data}</span>
            </div>
          )
        })}

      </div>

      <div className="parent-button">
        <AddButton/>
        <DeleteButton/>
      </div>
     
   </div>
  );
}

export default App;
