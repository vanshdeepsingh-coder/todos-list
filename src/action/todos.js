export function addTodo(data){
    return (dispatch,getState)=>{
        dispatch({
            type:"ADD-TODO",
            payload:data
        })
    }
}

export function deleteTodo(id){
    return {
        type:"DELETE-TODO",
        payload:id
    }
}