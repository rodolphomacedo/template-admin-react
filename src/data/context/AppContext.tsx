import { createContext, useState } from "react";

type ThemeType = 'dark' | ''

interface AppContextProps {
    theme?: ThemeType
    toggleTheme?: () => void 
}

const AppContext = createContext<AppContextProps>({})


export function AppProvider(props) {

    const [theme, setTheme] = useState<ThemeType>('')

    function toggleTheme(){
        setTheme(theme === '' ? 'dark' : '')
    }

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