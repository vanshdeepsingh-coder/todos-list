const initialState=[]
export default function todoOperation(state=initialState,action){
    switch(action.type){
        case 'ADD-TODO':
            return null
        case 'DELETE-TODO':
            return null
        default:
            return state;
    }
}