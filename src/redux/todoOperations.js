fetch('http://localhost:3001/todos').then((response)=>{
    return response.json();
}).then((res)=>{
    localStorage.setItem("todoData",JSON.stringify(res))
})

let initialState=[];

const todoData=localStorage.getItem("todoData")

if(todoData){
    initialState=JSON.parse(todoData);
}

function copyActionPayload(action){
   
    let newPayload={
    ...action.payload
    }
   
   return newPayload
}

export default function todoOperations(state=initialState,action){
    switch(action.type){
        case 'ADD-TODO':
            const newPayload=copyActionPayload(action)
            const addedData=[...state,newPayload];
            localStorage.setItem("todoData",JSON.stringify(addedData))
            return addedData
        case 'DELETE-TODO':
            const deletedData=state.filter((todos)=>todos.id!=action.payload)
            localStorage.setItem("todoData",JSON.stringify(deletedData));
            return deletedData;
        case 'EDIT-TODO':
            const newTodo=[...state]
            newTodo.map((data)=>{
                if(data.id==action.payload.id){
                    data.name=action.payload.name;
                    data.age=action.payload.age;
                    data.task=action.payload.task
                }
            })
            localStorage.setItem("todoData",JSON.stringify(newTodo));
            return newTodo
        default:
            return state
    } 
}