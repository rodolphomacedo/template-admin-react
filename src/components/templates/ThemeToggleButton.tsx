import {iconSun, iconMoon} from '../Icons/index'

interface ThemeToggleButtonProps {
    theme: string
    toggleTheme: () => void
}

export default function ThemeToggleButton(props: ThemeToggleButtonProps) {
    return props.theme === 'dark' ? (
        <div onClick={ props.toggleTheme } className={`
            hidden sm:flex items-center justify-start cursor-pointer p-1 rounded-full
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8

        `}>
            <div className={` 
                flex justify-center items-center
                bg-white rounded-full h-6 w-6`}>
                { iconSun(5) }
            </div>
            <div className={`hidden lg:flex items-start ml-3 text-gray-700`}>
                <span className={`text-sm`}>Claro</span> 
            </div>
        </div>
    ) : (
        <div onClick={ props.toggleTheme } className={`
            hidden sm:flex items-center justify-end cursor-pointer p-1 rounded-full
            bg-gradient-to-r from-gray-500 to-gray-800 
            w-14 lg:w-24 h-8
        `}>
        <div className={`hidden lg:flex items-center text-gray-200 mr-2`}>
            <span className={`text-sm`}>Escuro</span> 
        </div>
        <div className={` 
            flex justify-center items-center text-yellow-300
            bg-gray-900 rounded-full h-6 w-6`}>
            { iconMoon(4) }
        </div>
    </div>
    )
}