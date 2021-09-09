import  route  from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebaseConfig/config'
import UserModel from '../../model/UserModel'

interface AuthContextProps {
    user?: UserModel
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalize(userFirebase: firebase.User): Promise<UserModel> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token, 
        provider: userFirebase.providerData[0].providerId,
        imageURL: userFirebase.photoURL
    }
}

export function AuthProvider(props) {

    const [user, setUser] = useState<UserModel>(null)
    
    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        ) 
        
        if (resp.user?.email) {
            const user = await userNormalize(resp.user)
            setUser(user)
            route.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContext
