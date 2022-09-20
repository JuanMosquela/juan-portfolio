import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import './title.css'

const Title = ({ title, span }) => {

  const { theme } = useContext(ThemeContext)


  return (
    <div data-aos='fade-up' className="heading" style={{color: theme ? '#FFF' : '#333'}}>
        <span>{span}</span>
        <h2>{title}</h2> 
    </div>   
  )
}
export default Title