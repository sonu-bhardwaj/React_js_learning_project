import React from "react";
import UserContext from "./userContext";
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
return(
    <UserContext.Provider value={{user, setUser}}> {/*insted of value pass object it will help to pass multiple props*/}
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider;