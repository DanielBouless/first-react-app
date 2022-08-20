import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addToDo: (state, action)=>{
            return(
                {items: [...state.items, action.payload]}
            )
        },
        removeToDo: (state, action)=>{
            let array = [...state.items]
            let index = action.payload
            if(index !== -1){
                array.splice(index,1)
                return {items: array}
            }
        },
        clearToDo: ()=>{
            return{items: []}
        }
        }
    }
)

export const { addToDo, removeToDo, clearToDo} = toDoSlice.actions

export default toDoSlice.reducer