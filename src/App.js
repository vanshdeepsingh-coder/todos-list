import './App.css';
import {AddButton,DeleteButton,EditButton} from './components/Button.jsx'
import { NameInput,AgeInput,TaskInput,ID } from './components/Input.jsx';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getInitialState } from './action/todos.js';
import { useEffect } from 'react';

function App() {
  let todoData=useSelector((state)=>state.todoOperations);
  const dispatch=useDispatch();
  // console.log(todoData)
 useEffect(()=>{
  dispatch(getInitialState())
 },[])
  return (
   <div className="root">
    <h1> Todo's List</h1>
      <div className="todoBox">
        <ID/>
        <NameInput/>
        <AgeInput/>
        <TaskInput/>

        {todoData.map((data)=>{
          const dataArray=[data.id,data.name,data.age,data.task];
          return (
            dataArray.map((todos)=>{
              return (
                <span className="todo-data">{todos}</span>
              )
            })
            
          )
        })}

      </div>

      <div className="parent-button">
        <AddButton/>
        <EditButton/>
        <DeleteButton/>
      </div>
     
   </div>
  );
}

export default App;
