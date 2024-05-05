const initialState=[
    {
        id:100,
        name:"Vanshdeep Singh",
        age:21,
        task:"React"
    }
]

// function deepCopy(obj) {
//     if (typeof obj === 'object' && obj !== null) {
//       if (Array.isArray(obj)) {
//         return obj.map(deepCopy); // Deep copy each element in the array
//       } else {
//         return Object.keys(obj).reduce((newObj, key) => {
//           newObj[key] = deepCopy(obj[key]); // Deep copy each property
//           return newObj;
//         }, {});
//       }
//     } else {
//       return obj; // Primitive types are copied by value
//     }
//   }

function copyActionPayload(action){
   let newPayload={
    id:"",
    name:"",
    age:"",
    task:""
   }

   newPayload.id=action.payload.id;
   newPayload.name=action.payload.name;
   newPayload.age=action.payload.age;
   newPayload.task=action.payload.task
   
   return newPayload
}

export default function todoOperations(state=initialState,action){
    switch(action.type){
        case 'ADD-TODO':
            // const newState=state.slice();
            // newState.splice(newState.length+1,0,action.payload)
            const newPayload=copyActionPayload(action)
            return [...state,newPayload]

            // const newState = deepCopy(state);
            // newState.push(deepCopy(action.payload));
            // return newState;
            
            // return newState
        case 'DELETE-TODO':
            return state.filter((todos)=>todos.id!=action.payload);
        default:
            return state;
    } 
}