/* eslint-disable @next/next/no-img-element */
import userAuth from '../data/hook/UserAuth'
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { iconWarning } from "../components/Icons";

export default function Auth() {

    const { user, loginGoogle } = userAuth() 

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'signUp'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    function showError(msg, timeOut = 5) {
        // The timeout is given in seconds
        setError(msg)
        setTimeout(() => setError(null), timeOut * 1000)
    }

    function submit(){
        if (mode === 'login') {
            console.log('login')
            showError('Erro no Login...', 3)
        } else {
            console.log('cadastrar')
            showError('Erro no Cadastro...', 4)
        }
    }

    return (
        <div className={`
            flex flex-columns h-screen 
            justify-center items-center
        `}>
            <div className={` hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random" 
                    alt="Image the auth page."
                    className={`h-screen w-full object-cover`}
                />
            </div>

            <div className={`w-3/4 m-10 md:w-1/2 lg:w-1/3`}>
                <h1 className={`
                    md:text-xl lg:text-3xl font-bold mb-12 text-gray-400
                `}>
                    {mode === 'login' ? 'Entre com sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {error ? ( 
                    <div className={`
                        flex 
                        bg-red-300  text-white
                        px-5 py-3 my-2 border border-red-500 rounded-full
                    `}>
                        { iconWarning(7) }
                        <span className={`pl-4 text-lg `}>
                            { error }
                        </span>
                    </div>
                ) : false }

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
                
                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-600
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google
                </button>
                { mode === 'login' ? (
                    <p className={`text-gray-500 mt-12`}>
                        Novo por aqui? 
                        <a onClick={() => setMode('signUp') }
                            className={`
                                text-blue-300 hover:text-blue-400
                                font-semibold  cursor-pointer
                            `}
                        >  Cadastre-se gratuitamente.</a>
                    </p>
                ) : (
                    <p className={` text-gray-500 mt-12`}>
                    Já faz parte? 
                    <a onClick={() => setMode('login') }
                        className={`
                            text-blue-300 hover:text-blue-400
                            font-semibold  cursor-pointer
                        `}
                    > Entre por aqui.</a>
                </p>
                )}
            </div>
        </div>
    )
}