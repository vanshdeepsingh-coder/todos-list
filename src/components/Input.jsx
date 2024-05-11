import React from "react"
import "../App.css"

let todoData={
    id:"",
    name:"",
    age:"",
    task:""
}

export function NameInput(){
    return (
        <input className="input" onChange={(e)=>todoData.name=e.target.value} 
        placeholder="Enter your name"></input>
    )
}

export function IDInput(){
    return (
        <input className="input" onChange={(e)=>todoData.id=e.target.value} 
        placeholder="Enter your ID"></input>
    )
}

export function AgeInput(){
    return (
        <input className="input" onChange={(e)=>todoData.age=parseInt(e.target.value)} 
        placeholder="Enter your age" ></input>
    )
}

export function TaskInput(){
    return (
        <input className="input" onChange={(e)=>todoData.task=e.target.value} 
        placeholder="Enter your Task"></input>
    )
}

export default todoData;
