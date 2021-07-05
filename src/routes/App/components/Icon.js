import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme, useThemeUpdate } from './Theme';

export default function FuncIcon() {
    const theme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = (dark) => {
        return { style: dark ? {color: '#FFA500'} : {color: null} }
    }
    const themeIcon = (dark) => {
        return { icon: dark ? faSun : faMoon }
    }

    return (
        <FontAwesomeIcon 
            icon={themeIcon(theme)?.icon} 
            style={themeStyles(theme)?.style}
            onClick={toggleTheme} 
        />
    )
}

