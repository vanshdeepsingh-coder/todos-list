let initialState=[];

export default function todoOperations(state=initialState,action){
    switch(action.type){
        case 'INITIAL-STATE':
            return [...action.payload]
        case 'ADD-TODO':
            const newPayload={...action.payload}
            const addedData=[...state,newPayload];
            return addedData
        case 'DELETE-TODO':
            const deletedData=state.filter((todos)=>todos.id!=action.payload)
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
            return newTodoList
        default:
            return state
    } 
}