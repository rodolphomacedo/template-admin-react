import  route  from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
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
        token: token, 
        provider: userFirebase.providerData[0].providerId,
        photoUrl: userFirebase.photoURL
    }
}

function manageCookie(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-cod3r-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-cod3r-auth')
    }
}

export function AuthProvider(props) {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<UserModel>(null)

    async function setupSession(userFirebase) {
        const user = await userNormalized(userFirebase)
        if (userFirebase?.email) {
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        setupSession(resp.user)
        route.push('/')
    }

    useEffect(() => {
        const cancel = firebase.auth().onIdTokenChanged(setupSession)
        return () => cancel()
    },  [])

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