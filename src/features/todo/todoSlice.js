import { createSlice, nanoid } from "@reduxjs/toolkit";
// here nanoid generates unique id

const initialState={
    todos:[{id:1, text:"Learn React"},{id:2, text:"Learn Redux"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // below  given addTodo and deleteTodo are properties where we passed a function with state and action as parameters
        //state gives access to the current state and action gives access to the action fucntion
        addTodo: (state, action)=>{
            const  todo= {
                id: nanoid(),
                text: action.payload
            }
            // updating state
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            // here we are filtering the todos array and returning the todos which are not equal to the action.payload
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions
// here we're exporting the actions and reducers but we need to import these in store to make it aware of these actions and reducers
export default todoSlice.reducer