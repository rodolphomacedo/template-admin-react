import { createContext, useEffect, useState } from "react";

// type ThemeType = 'dark' | ''

interface AppContextProps {
    theme?: string
    toggleTheme?: () => void 
}

const AppContext = createContext<AppContextProps>({})


export function AppProvider(props) {

    const [theme, setTheme] = useState('')

    function toggleTheme(){
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme')
        setTheme(themeSaved)
    }, [])

    return (   
        <AppContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

export const AppConsumer = AppContext.Consumer