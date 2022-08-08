import { Link } from 'react-router-dom'
import './hero.css';
import JuanMosquellaCV from '../../img/cv.pdf';
import { useTypewriter} from 'react-simple-typewriter'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

const Hero = () => {

  const {theme} = useContext( ThemeContext )

  const {text} = useTypewriter({
    words: ['Desarrollador Front-end', 'Freelance autodidacta', 'Amante de Marvel!'],
    loop: 0,    
    
  })



  return (
    <section className='hero-container'>
        <div className="content">
            <span>Hola, soy:</span>
            <h1>Juan Manuel Mosquella</h1>
            <span style={{ display:'block', fontSize:'3rem', marginBottom:'3rem', height:'50px' }}>
              {text}              
                
            </span>
            <a href={JuanMosquellaCV} download="Juan Mosquella-CV.pdf">Descargar CV</a>
            <Link to='/contacto'>Contactame</Link>
        </div>
        <div className="clip-bg-container">

          <div className="clip-bg" style={{ backgroundColor: theme ? '#FFF' : '#000' }}>
        </div>

        </div>

    </section>
  )
}
export default Hero