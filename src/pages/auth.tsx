import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Auth() {
    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    function submit(){
        if (mode === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div className={` 
            flex flex-columns h-screen 
            justify-center items-center
        `}>
            <div className={`w-1/2`}>
                <h1 className={`
                    text-xl font-bold mb-5 
                `}>
                    {mode === 'login' ? 'Entre com sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
        
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
                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-600 
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    { mode === 'login' ? 'Entrar' : 'Cadastrar' }
                </button>

                <hr className=" my-6 border-gray-100 w-full"/>
                
                <button onClick={submit} className={`
                    w-full bg-red-500 hover:bg-red-600
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google
                </button>
            </div>
        </div>
    )
}