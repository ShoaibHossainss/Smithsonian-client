import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,newUser] = useState(null)
    const [loader,setLoader] = useState(true);
     
    const logOut = () =>{
        setLoader(true);
        return (auth)
      }


    const authInfo = {user}
    return (
       
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;