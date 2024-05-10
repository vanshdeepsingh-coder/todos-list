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

export function deleteTodo(id){

    return async(dispatch,getState)=>{
        await fetch(`http://localhost:3001/todos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
         })

         dispatch({
            type:"DELETE-TODO",
            payload:id
        })
    }
}

export function editTodo(data){

    return async(dispatch,getState)=>{

        const response=await fetch(`http://localhost:3001/todos/${data.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        const result=await response.json()

        dispatch({
            type:"EDIT-TODO",
            payload:result
        })
    }
}
