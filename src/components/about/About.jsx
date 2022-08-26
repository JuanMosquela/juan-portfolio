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
import html from '../../img/html.png'
import css from '../../img/css.png'
import git from '../../img/git.png'
import javascript from '../../img/javascript.png'
import react from '../../img/react.png'
import node from '../../img/node.png'
import redux from '../../img/redux.png'
import mu5 from '../../img/mu5.png'
import sass from '../../img/sass.png'
import typescript from '../../img/typescript.png'
import next from '../../img/next.png'
import bootstrap from '../../img/bootstrap.png'





const About = () => {

  const { theme } = useContext(ThemeContext)

  const icons = [
    html,
    css,
    javascript,
    react,
    redux,
    next,
    typescript,
    git,
    sass,    
    bootstrap,
    mu5,
    node
    
  ]

  

  return (
      <section id="about">
          <div className="about-container">
            <div className="picture-profile">
              <img src={academic} alt="" />
            </div>
            <div className="about-content">
              <Title title='Conoceme :' span='un poco sobre mi' />
              <p>Soy un desarrollador freelance que ha realizado proyectos para pequeños emprendedores, aunque tambien tuve la oportunidad de trabajar en conjunto con otros desarrolladores. Siempre me caracterice por ser autodidacta y estar en constante aprendizaje. Me entusiasmo el estilo de vida y la gran capacidad de crecimiento que veo en el mundo IT. Actualmente busco mi primer experiencia empresarial para poder demostrar y aportar todos mis conocimientos.</p>
              
            </div>            
          </div>
          <div className="skills-container">
            <Title title='Mis habilidades :' />              
                <div className="animation-wrapper">
                <div className="icons-container">
                  {
                    icons?.map((icon, index) => (                      
                      <img src={icon} key={index} alt="" />                   
                    ))
                  }
                </div>
                </div>
          </div>
      </section>
  )
}
export default About