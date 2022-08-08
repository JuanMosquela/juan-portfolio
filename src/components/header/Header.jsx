import './header.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import {FaMoon, FaSun} from 'react-icons/fa'



const Header = () => {  

  const { theme, handleTheme } = useContext(ThemeContext)

 
  return (
    <header className="header-container" style={{backgroundColor: theme ? '#000' : '#FFF'}}>        
        
        
        <nav className="navbar">           
            <ul>
                <NavLink className='nav-link' to='/'><li style={{color: theme ? '#FFF' : '#000'}}>Home</li></NavLink>
                <NavLink className='nav-link' to='/proyectos'><li style={{color: theme ? '#FFF' : '#000'}}>Proyectos</li></NavLink>
                <NavLink className='nav-link' to='/contacto'><li style={{color: theme ? '#FFF' : '#000'}}>Contacto</li></NavLink>
            </ul>
        </nav>
        <div 
          className="theme-icons"
          onClick={() => handleTheme(!theme)}>
          {theme ? <FaSun /> : <FaMoon /> }
          
        </div>

    </header>
  )
}
export default Header