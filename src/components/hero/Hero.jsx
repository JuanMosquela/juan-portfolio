import { Link } from 'react-router-dom'
import './hero.css';
import JuanMosquellaCV from '../../img/Mosquella-cv.pdf';
import { useTypewriter} from 'react-simple-typewriter'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import coding from '../../img/coding.svg'

const Hero = () => {

  const {theme} = useContext( ThemeContext )

  const {text} = useTypewriter({
    words: ['Desarrollador Web', 'Front-end Developer', 'Amante de Marvel!'],
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
            <a href={JuanMosquellaCV} download="Mosquella-CV.pdf">Descargar CV</a>
            <Link to='/contacto'>Contactame</Link>
        </div>
        <img src={coding} alt="" />
        

        

    </section>
  )
}
export default Hero