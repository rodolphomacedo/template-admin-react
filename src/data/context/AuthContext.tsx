import  route  from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import UserModel from '../../model/UserModel'

interface AuthContextProps {
    user?: UserModel,
    loginGoogle?: () => Promise<void>
}

const authContext = createContext<AuthContextProps>({})

async function userNormalized(userFirebase: firebase.User): Promise<UserModel> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token, 
        provider: userFirebase.providerData[0].providerId,
        photoUrl: userFirebase.photoURL
    }
}

export function AuthProvider(props) {

    const [user, setUser] = useState<UserModel>(null)

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if(resp.user?.email){
            const userLogged = await userNormalized(resp.user)
            setUser(userLogged)
            route.push('/')
        }
    }

    return (
        <authContext.Provider value={{
            user,
            loginGoogle
        }}>
            { props.children }
        </authContext.Provider>
    )
}

export default authContext