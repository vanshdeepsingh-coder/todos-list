import './App.css';
import {Button} from './components/Button.jsx'
import {Input} from './components/Input.jsx';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getInitialState } from './action/todos.js';
import { useEffect } from 'react';

function App() {
  let todoData=useSelector((state)=>state.todoOperations);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getInitialState())
  },[])
  
  return (
   <div className="root">
    <h1> Todo's List</h1>
      <div className="todoBox">
        <Input type="id"/>
        <Input type="name"/>
        <Input type="age"/>
        <Input type="task"/>

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
        <Button value="add" type="add" class="button-add"/>
        <Button value="edit" type="edit" class="button-edit"/>
        <Button value="delete" type="delete" class="button-delete"/>

      </div>  
     
   </div>
  );
}

export default App;
