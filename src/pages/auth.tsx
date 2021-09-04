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
            <div className={` hidden md:block md:w-1/2 lg:w-2/3`}>
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Image the auth page." 
                    className={`h-screen w-full object-cover`}
                />
            </div>

            <div className={`w-3/4 m-10 md:w-1/2 lg:w-1/3`}>
                <h1 className={`
                    md:text-xl lg:text-3xl font-bold mb-5 text-gray-400
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