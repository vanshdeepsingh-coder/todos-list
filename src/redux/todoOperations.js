const initialState=[100,"Vanshdeep Singh",21,"React"]

export default function todoOperations(state=initialState,action){
    switch(action.type){
        case 'ADD-TODO':
            const id=action.payload.id;
            const name=action.payload.name;
            const age=action.payload.age;
            const task=action.payload.task;

            return [...state,[id],[name],[age],[task]];

        case 'DELETE-TODO':
            return state
        default:
            return state;
    } 
}