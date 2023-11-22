import { createContext, useState, useEffect} from "react";


export const UserContext = createContext(JSON.parse(localStorage.getItem("user")))


export const UserProvider=({children})=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user))
    })
   
       
    return(
        <UserContext.Provider value={
            {email:user.email, 
            name:user.name, 
            id:user.id,
            avatar:user.avatar,
            setEmail: (email)=>setUser({...user, email}),
            setName:(name)=>setUser({...user, name}),
            setId:(id)=>setUser({...user, id}),
            setAvatar:(avatar)=>setUser({...user, avatar})
            }}>
            {children}
        </UserContext.Provider>
    )
}


