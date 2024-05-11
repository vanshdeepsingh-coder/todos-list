let initialState=[];

function convertToString(todo){
    return JSON.stringify(todo)
}

function convertToJSON(todo){
    return JSON.parse(todo)
}

function setTodoInLocalStorage(todos){
    localStorage.setItem("todoData",convertToString(todos))
}

function getTodoFromLocalStorage(){
    const todos=localStorage.getItem("todoData")
    return todos
}

async function fetchTodoData(){
    const response= await fetch('http://localhost:3001/todos');
    const result=await response.json();
    setTodoInLocalStorage(result)
}

fetchTodoData()

const todos=getTodoFromLocalStorage()

if(todos){
    initialState=convertToJSON(todos)
}

export default function todoOperations(state=initialState,action){
    switch(action.type){
        case 'INITIAL-STATE':
            return [...action.payload]
        case 'ADD-TODO':
            const newPayload={...action.payload}
            const addedData=[...state,newPayload];
            setTodoInLocalStorage(addedData)
            return addedData
        case 'DELETE-TODO':
            const deletedData=state.filter((todos)=>todos.id!=action.payload)
            setTodoInLocalStorage(deletedData)
            return deletedData;
        case 'EDIT-TODO':
            const newTodoList=[...state]
            newTodoList.map((data)=>{
                if(data.id==action.payload.id){
                    data.name=action.payload.name;
                    data.age=action.payload.age;
                    data.task=action.payload.task
                }
            })
            setTodoInLocalStorage(newTodoList)
            return newTodoList
        default:
            return state
    } 
}