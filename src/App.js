import './App.css';
import {AddButton,DeleteButton} from './components/Button.jsx'
import { NameInput,AgeInput,AddressInput,ID } from './components/Input.jsx';
import React from 'react';

function App() {
  return (
   <div className="root">
    <h1> Todo's List</h1>
      <div className="todoBox">
        <ID/>
        <NameInput/>
        <AgeInput/>
        <AddressInput/>

        <h2 style={{display:"flex",justifyContent:"center"}}>Hello</h2>
        <h2 style={{display:"flex",justifyContent:"center"}}>World</h2>
        <h2 style={{display:"flex",justifyContent:"center"}}>how</h2>
        <h2 style={{display:"flex",justifyContent:"center"}}>are</h2>
      </div>

      <div className="parent-button">
        <AddButton/>
        <DeleteButton/>
      </div>
     
   </div>
  );
}

export default App;
