import { useState } from "react"
import { Button } from "./Button";
import "../App.css"

let todoData={
    id:"",
    name:"",
    age:"",
    task:""
}

// export function NameInput(){
//     return (
//         <input className="input" onChange={(e)=>todoData.name=e.target.value} 
//         placeholder="Enter your name"></input>
//     )
// }

// export function IDInput(){
//     return (
//         <input className="input" onChange={(e)=>todoData.id=e.target.value} 
//         placeholder="Enter your ID"></input>
//     )
// }

// export function AgeInput(){
//     return (
//         <input className="input" onChange={(e)=>todoData.age=parseInt(e.target.value)} 
//         placeholder="Enter your age" ></input>
//     )
// }

// export function TaskInput(){
//     return (
//         <input className="input" onChange={(e)=>todoData.task=e.target.value} 
//         placeholder="Enter your Task"></input>
//     )
// }

export function Input(props){
    const [todo, setTodo] = useState({ id: '', name: '', age: '', task: ''});

    function handleOnChange(event,type){
        const name=type;
        
        setTodo(prevState => ({
            ...prevState,
            [name]: event.target.value
        }));

        console.log(todo)

        // todoData.id=todo.id;
        // todoData.name=todo.name;
        // todoData.age=todo.age;
        // todoData.task=todo.task;
    }

    function handleValue(type){
        if(type==='id') return todo.id
        else if(type==='name') return todo.name
        else if(type==='age') return todo.age
        else if(type==='task') return todo.task
    }

    return (
        <input className="input" value={handleValue(props.type)} onChange={(event)=>handleOnChange(event,props.type)} 
        placeholder="Enter your age" ></input>
    )
}

export default todoData;
