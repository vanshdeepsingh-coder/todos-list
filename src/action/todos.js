export function addTodo(data){
    return {
        type:"ADD-TODO",
        payload:data
    }
}

export function deleteTodo(id){
    return {
        type:"DELETE-TODO",
        payload:id
    }
}