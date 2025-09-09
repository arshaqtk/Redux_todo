import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  { id: 1, text: "Learn Redux", completed: false },
  { id: 2, text: "Learn React", completed: true },
];
const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        Addtask:(state,action)=>{
            state.push({
                id:Date.now,
                text:action.payload,
                completed:false
            })

        },
        toggleTodo:(state,action)=>{
           const todo=state.find((s)=>s.id==action.payload)
       
           if(todo){
            todo.completed=!todo.completed
           }
        },
        deleteTodo:(state,action)=>{
                alert("ac")
            return state.filter((s)=>s.id!=action.payload)
        }
    }
})

export const{Addtask,toggleTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer