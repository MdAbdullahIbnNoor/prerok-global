import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../configs/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    const authInfo = {
        user,
        registerUser,
        loginUser,
        googleLogin,
        facebookLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;