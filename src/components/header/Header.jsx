import './header.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import {FaMoon, FaSun} from 'react-icons/fa'
import {AiFillHome, AiOutlineMail} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'




const Header = () => {  

  const { theme, handleTheme } = useContext(ThemeContext)

 
  return (
    <header className="header-container" style={{backgroundColor: theme ? '#000' : '#FFF'}}> 

        <div className="logo" style={{color: theme ? '#FFF' : '#000'}}>mosquella</div>       
        
        
        <nav className="navbar" >           
            <ul >
              <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/'><li>home</li></NavLink>
              <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/proyectos'><li>proyectos</li></NavLink>
              <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/contacto'><li  >contacto</li></NavLink>               
                
            </ul>            
        </nav>
        <div 
            className="theme-icons"
            onClick={() => handleTheme(!theme)}
            style={{ color: theme ? '#FFF' : '#000' }}>
            {theme ? <FaSun /> : <FaMoon /> }
                  
        </div>
        
        

    </header>
  )
}
export default Header