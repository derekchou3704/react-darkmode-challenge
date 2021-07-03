import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './App';

const Icon = () => {
    const iconBtn = (dark) => {
        return {
            icon: dark ? faSun : faMoon ,
            style: dark ? '#FFA500' : null
        }
    } 

    return (
        <ThemeContext.Consumer>
            {dark => 
                <FontAwesomeIcon 
                    icon={iconBtn(dark)?.icon} 
                    style={iconBtn(dark)?.style} 
                />
            }
        </ThemeContext.Consumer>
    )
}

export default Icon