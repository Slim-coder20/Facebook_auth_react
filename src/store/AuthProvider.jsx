import { onAuthStateChanged  } from "firebase/auth"; 
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
  const authValue = {
    user, 
    loading, 
  }
  return (
  <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  ); 
  
}; 

export default AuthProvider; 
