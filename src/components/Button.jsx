import "../App.css"
import todoData from "./Input"
import { addTodo } from "../action/todos"
import { deleteTodo } from "../action/todos"
import { editTodo } from "../action/todos"
import { useDispatch } from "react-redux"
 
 export function AddButton(){
    const dispatch=useDispatch();
    return (
        <button className="button button-add" onClick={()=>dispatch(addTodo(todoData))}>Add</button>
    )
}

export function DeleteButton(){
    const dispatch=useDispatch();

    return (
        <button className="button button-delete" onClick={()=>{
            const id=prompt("Please enter the id number to delete the data")
            dispatch(deleteTodo(id))
        }}>Delete</button>
    )
}

export function EditButton(){
    const dispatch=useDispatch();

    return (
        <button className="button button-edit" onClick={()=>{
            const id=prompt("Enter the id number")
            const name=prompt("Enter the name")
            const age=prompt("Enter the age")
            const task=prompt("Enter the task")

            const data={id:id,name:name,age:age,task:task}
            dispatch(editTodo(data))

        }}>edit</button>
    )
}
