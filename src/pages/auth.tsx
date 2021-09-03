import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    return (
        <div>
            <h1>Autenticação</h1>
    
            <AuthInput 
                label="E-mail"
                type="email"
                value={ email }
                toggleValue={setEmail}
                required
            />

            <AuthInput 
                label="Senha"
                type="password"
                value={ password }
                toggleValue={setPassword}
                required
            />
        </div>
    )
}