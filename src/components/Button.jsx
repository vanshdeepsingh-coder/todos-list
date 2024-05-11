import "../App.css"
import todoData from "./Input"
import { addTodo } from "../action/todos"
import { deleteTodo } from "../action/todos"
import { editTodo } from "../action/todos"
import { useDispatch } from "react-redux"

function handleAddClick(dispatch,todoData){
    dispatch(addTodo(todoData))
}

function handleDeleteClick(dispatch){
    const id=prompt("Please enter the id number to delete the data")
    dispatch(deleteTodo(id))
}

function handleEditClick(dispatch){
    const id=prompt("Enter the id number")
    const name=prompt("Enter the name")
    const age=prompt("Enter the age")
    const task=prompt("Enter the task")

    const data={id:id,name:name,age:age,task:task}
    dispatch(editTodo(data))
}
 
 export function AddButton(){
    const dispatch=useDispatch();
    return (
        <button className="button button-add" 
        onClick={()=>handleAddClick(dispatch,todoData)}>Add</button>
    )
}

export function DeleteButton(){
    const dispatch=useDispatch();

    return (
        <button className="button button-delete" 
        onClick={()=>{handleDeleteClick(dispatch)}}>Delete</button>
    )
}

export function EditButton(){
    const dispatch=useDispatch();

    return (
        <button className="button button-edit" 
        onClick={()=>{handleEditClick(dispatch)}}>edit</button>
    )
}
