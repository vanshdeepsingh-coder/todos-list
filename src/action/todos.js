export function addTodo(todo){

    return async (dispatch,getState)=>{
        const response=await fetch('http://localhost:3001/todos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(todo)
        });

        const newTodo=await response.json();

        dispatch({
            type:"ADD-TODO",
            payload:newTodo
        })
    }
}

export async function deleteTodo(id){
    const response=await fetch('http://localhost:3001/todos',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
    })
    return {
        type:"DELETE-TODO",
        payload:id
    }
}

export function editTodo(data){
    return {
        type:"EDIT-TODO",
        payload:data
    }
}
