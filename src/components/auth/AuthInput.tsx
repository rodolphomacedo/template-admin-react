interface AuthInputProps {
    label: string
    value: any
    toggleValue: (newValue: any) => void
    type?: 'text' | 'email' | 'password'
    required?: boolean

}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div>
            <label>{ props.label }</label>
            <input 
                type={ props.type ?? 'text'} 
                value={ props.value } 
                onChange={ e => props.toggleValue?.(e.target.value) }
                required={ props.required }
            />
        </div>
    )
}
