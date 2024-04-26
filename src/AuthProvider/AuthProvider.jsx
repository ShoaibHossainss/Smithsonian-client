import { signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,newUser] = useState(null)
    const [loader,setLoader] = useState(true);
     
    const logOut = () =>{
        setLoader(true);
        return signOut(auth)
      }


    const authInfo = {user,logOut}
    return (
       
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;