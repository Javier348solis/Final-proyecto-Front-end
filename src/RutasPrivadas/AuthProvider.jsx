import { Children, createContext, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = ({Children}) => {
    const [auth, setAuth] = useState(false);
    const login = () => setAuth(true);
    const logout = () => setAuth(false);
    return(
        <AuthContext.Provider value={{auth, login, logout}}> 
         {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider