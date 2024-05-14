import "../App.css"
import todoData from "./Input"
import { addTodo } from "../action/todos"
import { deleteTodo } from "../action/todos"
import { editTodo } from "../action/todos"
import { useDispatch } from "react-redux"

function handleClick(dispatch,type){
    // console.log(todoData)
    if(type==='add'){
        dispatch(addTodo(todoData))
    }
    else if(type==='delete'){
        const id=prompt("Please enter the id number to delete the data")
        dispatch(deleteTodo(id))
    }
    else if(type==='edit'){
        const id=prompt("Enter the id number")
        const name=prompt("Enter the name")
        const age=prompt("Enter the age")
        const task=prompt("Enter the task")
    
        const data={id:id,name:name,age:age,task:task}
        dispatch(editTodo(data))
    }
}

export function Button(props){
    const dispatch=useDispatch();

    return (
        <button className={`button ${props.class}`} onClick={()=>handleClick(dispatch,props.type)}>{props.value}</button>
    )
}
