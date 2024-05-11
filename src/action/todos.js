function setInitialState(result){
    return {
        type:"INITIAL-STATE",
        payload:result
    }
}

function setAddTodo(addedTodo){
    return {
        type:"ADD-TODO",
        payload:addedTodo
    }
}

function setDeleteTodo(id){
    return {
        type:"DELETE-TODO",
        payload:id
    }
}

function setEditTodo(editedTodo){
    return {
        type:"EDIT-TODO",
        payload:editedTodo
    }
}

function convertToString(todo){
    return JSON.stringify(todo)
}

export function getInitialState(){
    return async(dispatch,getState)=>{
        const response=await fetch('http://localhost:3001/todos')
        const result=await response.json();
        
        dispatch(setInitialState(result))
    }
}

export function addTodo(todo){

    return async (dispatch,getState)=>{
        const response=await fetch('http://localhost:3001/todos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:convertToString(todo)
        });

        const addedTodo=await response.json();
        dispatch(setAddTodo(addedTodo))
    }
}

export function deleteTodo(id){

    return async(dispatch,getState)=>{
        await fetch(`http://localhost:3001/todos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
         })

         dispatch(setDeleteTodo(id))
    }
}

export function editTodo(todo){

    return async(dispatch,getState)=>{

        const response=await fetch(`http://localhost:3001/todos/${todo.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:convertToString(todo)
        })

        const editedTodo=await response.json()
        dispatch(setEditTodo(editedTodo))
    }
}
