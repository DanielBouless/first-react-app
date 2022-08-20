import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToDo, removeToDo, clearToDo } from './features/toDoSlice'

function ToDo(){
    const [ userInput, setUserInput ] = useState('')
    const items = useSelector((state)=>state.todos.items) 
    const dispatch = useDispatch()
    const renderItems = items.map((item, index) => <li key={index} onClick={()=> dispatch(removeToDo(index))}>{item}</li>)
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addToDo(userInput))
    }
    return(
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type='text' onChange={(e)=> setUserInput(e.target.value)}/>
                <button type='submit'>Submit</button>
                <ul>
                    {renderItems}
                </ul>
                <button onClick={()=> dispatch(clearToDo())}>Clear List</button>
            </form>
        </div>
    )
}

export default ToDo