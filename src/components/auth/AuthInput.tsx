interface AuthInputProps {
    label: string
    value: any
    toggleValue: (newValue: any) => void
    type?: 'text' | 'email' | 'password'
    required?: boolean

}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`mt-5`}>
            <label className={`text-gray-400 ml-2 font-light`}>
                { props.label }:
            </label>
            <input 
                type={ props.type ?? 'text'} 
                value={ props.value } 
                onChange={ e => props.toggleValue?.(e.target.value) }
                required={ props.required }
                className={` 
                    px-4 py-3 rounded-full bg-gray-100 w-full
                    border focus:border-blue-300 focus:outline-none
                    focus:bg-gray-200 focus:text-indigo-400 
                    text-gray-400
                `}
            />
        </div>
    )
}
