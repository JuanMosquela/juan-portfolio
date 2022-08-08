import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'
import './title.css'

const Title = ({ title, span }) => {

  const { theme } = useContext(ThemeContext)


  return (
    <div className="heading" style={{color: theme ? '#FFF' : '#000'}}>
        <span>{span}</span>
        <h2>{title}</h2> 
    </div>   
  )
}
export default Title