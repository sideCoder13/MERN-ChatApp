import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{
    const initial = JSON.parse(localStorage.getItem("user")) || null;
    const [userAuth, setUserAuth] = useState(initial);

    //wrap all the needed stuff in "AuthContext"
    return <AuthContext.Provider value={{userAuth, setUserAuth}}>
        {children}
    </AuthContext.Provider>
}

// //use context
// export const useAuth = useContext(AuthContext)

//export useContext as a fn
export const useAuthContext = () => useContext(AuthContext)