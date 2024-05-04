import "../App.css"
import todoData from "./Input"
import { addTodo } from "../action/todos"
import { deleteTodo } from "../action/todos"
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
