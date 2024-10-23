import React, {useState, useContext, createContext} from 'react'

const ThemeContext = createContext();

const function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const toggleTheme=()=>{
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export function useTheme(){
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}