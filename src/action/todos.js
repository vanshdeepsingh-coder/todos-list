function setInitialState(result){
    return {
        type:"INITIAL-STATE",
        payload:result
    }
}

function setAddTodo(addedTodo){
    return {
        type:"ADD-TODO",
        payload:addedTodo
    }
}

function setDeleteTodo(id){
    return {
        type:"DELETE-TODO",
        payload:id
    }
}

function setEditTodo(editedTodo){
    return {
        type:"EDIT-TODO",
        payload:editedTodo
    }
}

function convertToString(todo){
 
    return JSON.stringify(todo)
}

async function callToAPI(method,body,API_URL,dispatch,actionToPerform,id={}){

    let type={
        method:method,
        headers:{
            'Content-Type':'application/json'
        },
        body:convertToString(body)
    }

    let result=[];

    if(method==='GET'){
        const response=await fetch(API_URL);
        result=await response.json()
    }
    else{
        const response=await fetch(API_URL,type);
        result=await response.json()
    }

    if(method==='DELETE'){
        result=id
    }

    dispatch(actionToPerform(result))
}

export function getInitialState(){
    return (dispatch,getState)=>{
        const method='GET';
        const body={};
        const API_URL='http://localhost:3001/todos';

        callToAPI(method,body,API_URL,dispatch,setInitialState)
    }
}

export function addTodo(todo){

    return (dispatch,getState)=>{
        const method='POST';
        const body=todo;
        const API_URL='http://localhost:3001/todos';

        callToAPI(method,body,API_URL,dispatch,setAddTodo)
    }
}

export function deleteTodo(id){

    return (dispatch,getState)=>{
        const method='DELETE';
        const body={};
        const API_URL=`http://localhost:3001/todos/${id}`;

        callToAPI(method,body,API_URL,dispatch,setDeleteTodo,id)
    }
}

export function editTodo(todo){

    return (dispatch,getState)=>{
        const method='PUT';
        const body=todo;
        const API_URL=`http://localhost:3001/todos/${todo.id}`;

        callToAPI(method,body,API_URL,dispatch,setEditTodo)
    }
}
