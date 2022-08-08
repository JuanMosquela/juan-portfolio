import './header.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import {FaMoon, FaSun} from 'react-icons/fa'
import {AiFillHome, AiOutlineMail} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'




const Header = () => {  

  const { theme, handleTheme } = useContext(ThemeContext)

 
  return (
    <header className="header-container" style={{backgroundColor: theme ? '#000' : '#FFF'}}>        
        
        
        <nav className="navbar" style={{backgroundColor: theme ? '#FFF' : '#000'}}>           
            <ul>
                <NavLink className='nav-link' to='/'><li><AiFillHome style={{color: theme ? '#000' : '#FFF'}} /></li></NavLink>
                <NavLink className='nav-link' to='/proyectos'><li><MdWork style={{color: theme ? '#000' : '#FFF'}} /></li></NavLink>
                <NavLink className='nav-link' to='/contacto'><li><MdWork style={{color: theme ? '#000' : '#FFF'}} /></li></NavLink>
                
                
            </ul>            
        </nav>
        <div 
                    className="theme-icons"
                    onClick={() => handleTheme(!theme)}
                    style={{ color: theme ? '#000' : '#FFF' }}>
                    {theme ? <FaSun /> : <FaMoon /> }
                  
                </div>
        
        

    </header>
  )
}
export default Header