import { createContext, useState } from "react";


export const UserContext = createContext()

function UserContextProvider(props){
    const [name, setName] = useState('https://api.github.com/users/octocat')

    function handleUserChange(newName){
        console.log(newName)
        setName('https://api.github.com/users/' + newName )
    }

    const value = {name, handleUserChange}


    return(
    <UserContext.Provider value={value}>
        {props.children}

    </UserContext.Provider>)
}

export default UserContextProvider