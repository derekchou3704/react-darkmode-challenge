import React, { useState, useEffect } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdate = React.createContext()

const Theme = ({ children }) => {
    const [dark, setDark] = useState(false)

    const onThemeChage = () => {
        dark 
        ? setDark(false)
        : setDark(true)
    }

    useEffect(() => {
        const $darkModeBtn = document.querySelector('#mode')
        const $root = document.querySelector('#root')
    
        $darkModeBtn.addEventListener('click', () => {
          $root.classList.toggle('dark-mode')
        }, { capture: true })
        
      }, [])

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdate.Provider value={onThemeChage}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}

export default Theme