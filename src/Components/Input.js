import { useState } from 'react'

function Input(props){
    const [username, setUsername] = useState('')

    const handleChange = (e)=>{
        setUsername(e.target.value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        props.setUser(data)
        setUsername('')
    }

    const clear = ()=>{
        props.setUser(null)
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={handleChange} placeholder = 'username'/>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={clear}>Clear</button>
        </div>
        
    )
}

export default Input