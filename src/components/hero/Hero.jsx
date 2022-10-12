import { Link } from 'react-router-dom'
import './hero.css';
import JuanMosquellaCV from '../../juan-mosquella-cv.pdf';
import { useTypewriter} from 'react-simple-typewriter'
import coding from '../../img/coding.svg'

const Hero = () => {  

  const {text} = useTypewriter({
    words: ['Desarrollador Web', 'Front-end Developer', 'Amante de Marvel!'],
    loop: 0,   
    
  })
  
  return (
    <section className='hero-container' >
        <div className="content" data-aos='fade-up' data-aos-delay='500'>
            <span>Hola, soy:</span>
            <h1>Juan Manuel Mosquella</h1>
            <span className='text'>
              {text}              
                
            </span>
            <div className="button-group">
              <a href={JuanMosquellaCV} download="mosquellaCV.pdf">Descargar CV</a>
              <Link to='/contacto'>Contactame</Link>
            </div>
        </div>
        <img src={coding} alt="" />       

    </section>
  )
}
export default Hero