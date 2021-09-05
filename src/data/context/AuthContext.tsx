import  route  from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import UserModel from '../../model/UserModel'

interface AuthContextProps {
    user?: UserModel,
    loginGoogle?: () => Promise<void>
}

const authContext = createContext<AuthContextProps>({})

async function userNormalize(userFirebase: firebase.User): Promisse<UserModel> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token, 
        provider: userFirebase.providerData[0].providerId,
        imageURL: userFirebase.im
    }
}

export function AuthProvider(props) {

    const [user, setUser] = useState<UserModel>(null)
    
    async function loginGoogle() {
        console.log('Login Google...')
        route.push('/')
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