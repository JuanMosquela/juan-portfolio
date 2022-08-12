import Title from "../title/Title"
import './about.css';

import {IoLogoJavascript} from 'react-icons/io'
import {DiHtml5, DiCss3, DiGit} from 'react-icons/di'
import {FaReact, FaBootstrap, FaSass} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {SiMaterialui, SiFirebase} from 'react-icons/si'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import academic from '../../img/academic.svg'



const About = () => {

  const { theme } = useContext(ThemeContext)

  const icons = [
    <DiHtml5 className="html" />,
    <DiCss3 />, 
    <IoLogoJavascript />, 
    <FaReact />, 
    <FaBootstrap />,
    <FaSass />,
    <DiGit />, 
    <AiFillGithub />, 
    <SiMaterialui />,
    <SiFirebase />
  ]

  

  return (
      <section id="about">
          <div className="about-container">
            <div className="picture-profile">
            <img src={academic} alt="" />
            </div>
            <div className="about-content">
              <Title title='Conoceme :' span='un poco sobre mi' />
              <p>Soy un apasionado desarrollador freelance que ha realizado proyectos para pequeños emprendedores, aunque tambien tuve la oportunidad de trabajar en conjunto con otros desarrolladores. Siempre me caracterice por ser autodidacta y estar contantemente en aprendizaje. Me entusiasmo el estilo de vida y la gran capacidad de crecimiento que veo en el mundo IT. Actualmente busco mi primer experiencia empresarial para poder demostrar y aportar todos mis conocimientos.</p>
              <Title title='Mis skills :' />              
              <div className="animation-wrapper">
              <div className="icons-container">
                {
                  icons?.map((icon, index) => (
                    
                    <i key={index}>{icon}</i>                    
                  ))
                }
              </div>
              </div>
            </div>
          </div>
      </section>
  )
}
export default About