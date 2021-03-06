import { createContext,useState } from "react";

const UserContext= createContext();

function UserProvider({children}){
    const [user, setUser]=useState(null);

    const onLogin = (userInfo)=>{
        setUser(userInfo)
    }
    return(
        <UserContext.Provider value={{user,setUser, onLogin}}>
    
            {children}
        </UserContext.Provider>)

}





export {UserContext, UserProvider}