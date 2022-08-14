import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import {FaMoon, FaSun} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'





const Header = () => {  

  const { theme, handleTheme } = useContext(ThemeContext)

  const [menu, setMenu] = useState(false)

 
  return (
    <header className="header-container" style={{backgroundColor: theme ? '#000' : '#FFF'}}> 

      <div className='header-wrapper'>
        <Link to='/'><div className="logo" style={{color: theme ? '#FFF' : '#000'}}>mosquella</div> </Link>    
        
        <nav className="navbar" >            
              <ul style={{ backgroundColor: theme ? '#000' : '#FFF' }} >
                <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/'>home</NavLink>
                <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/proyectos'>proyectos</NavLink>
                <NavLink className='nav-link' style={{color: theme ? '#FFF' : '#000'}} to='/contacto'>contacto</NavLink>              
                
              </ul>                     
        </nav>
        <div className="lat-navbar" style={{display: menu && 'block'}}>
          <ul>
                <NavLink className='nav-link' to='/'>home</NavLink>
                <NavLink className='nav-link' to='/proyectos'>proyectos</NavLink>
                <NavLink className='nav-link' to='/contacto'>contacto</NavLink>              
                  
          </ul> 

        </div>
        <div 
            className="theme-icons"
            onClick={() => handleTheme(!theme)}
            style={{ color: theme ? '#FFF' : '#000' }}>
            {theme ? <FaSun /> : <FaMoon /> }
                  
        </div>
        <div className="lat-menu" >
          { menu ? <AiOutlineClose onClick={() => setMenu(false)} /> :  <BiMenu onClick={() => setMenu(true)} />}

        </div>
      </div>
        
        

    </header>
  )
}
export default Header