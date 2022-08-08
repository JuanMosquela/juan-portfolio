import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"
import Title from "../title/Title"
import './form.css'

const Form = () => {

  const { theme} = useContext(ThemeContext)

  

  return (
    <section className="contact">
        
        <div className="contact-wrapper">
          
          <div className="contact-info">
            <Title className='title' title='Contactame:' span='¿Te gusto mi trabajo?' />
            <div className="contact-list">
              <h3>Email:</h3>
              <p>jmosquella11@gmail.com</p>
            </div>
            <div className="contact-list">
              <h3>Celular:</h3>
              <p>+54 11 4089-5192</p>
            </div>
            <div className="contact-list">
              <h3>LinkedIn:</h3>
              <a href="https://www.linkedin.com/in/juan-mosquella-0b2b2122b/" target='blank' style={{color: theme ? '#FFF' : '#000'}}>Juan Mosquella</a>
            </div>
            <div className="clip-bg-contact">
              
            </div>
          </div>
          <form className="form-container" action="">
            <div className="input-group">
              <label htmlFor="">Nombre:</label>
              <input type="text" style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} />
            </div>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input type="text" style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} />
            </div>
            <div className="input-group">
              <label htmlFor="">Mensaje:</label>
              <input type="text" style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} />
            </div>
            <button type="submit">Enviar</button>
        </form>
        </div>
        
    </section>
  )
}
export default Form