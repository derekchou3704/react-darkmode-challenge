import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
        setDark(prev => !prev)

        const $root = document.querySelector('#root')
        $root.classList.toggle('dark-mode')
    }

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}