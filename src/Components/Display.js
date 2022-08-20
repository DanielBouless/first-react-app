function Display({user}){
    return(
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt='Profile Pic'/>
            {user.location && <p>Location: {user.location}</p>}
            {<a href={user.html_url} target='blank'><p>Profile Page</p></a>}
        </div>
    )
}

export default Display