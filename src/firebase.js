// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWuQiRwa7aZ2JYfazUlQqc97YIlUNWVy0",
  authDomain: "facebook-react-1f44a.firebaseapp.com",
  projectId: "facebook-react-1f44a",
  storageBucket: "facebook-react-1f44a.firebasestorage.app",
  messagingSenderId: "591696489342",
  appId: "1:591696489342:web:1bebac2ea422b5633c612f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;