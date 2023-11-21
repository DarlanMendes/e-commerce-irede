import { createContext, useState} from "react";
let user

export const UserContext = createContext(user)


export const UserProvider=({children})=>{
    const[user,setUser] = useState(JSON.parse(localStorage.getItem("user")))
   
        
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}


