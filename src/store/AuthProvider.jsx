import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth"; 
import { createContext } from "react"; 
import { auth } from "../firebase"; 
import { useState, useEffect } from "react"; 

// On créé le context // 
export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => { 
  const [user, setUser]= useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect( () => {
    onAuthStateChanged(auth, (currentUser) => 
      {setUser(currentUser); 
       setLoading(false);
  })
  },[]); 

  // Function : On créé la fonction logout // 
  const logOut = () => {
    setLoading(true);
    return signOut(auth); 
  }

  // On créé une function pour inscrire  notre user // 
  const createUser = (eamil, password) => {
    
    return createUserWithEmailAndPassword(auth, eamil, password ); 

  }

  // On créé une fonction pour connecter notre User après inscription // 
  const loginUser = (eamil, password) => {
    return signInWithEmailAndPassword(auth, eamil, password); 

  }

  const authValue = {
    user, 
    loading, 
    logOut,
    createUser,
    loginUser
  }
  return (
  <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  ); 
  
}; 

export default AuthProvider; 
