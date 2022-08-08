import React from "react";
import Title from '../title/Title';
import './carrusell.css';
import proyectsData from '../../data/proyectsData.js'
import ProyectCard from '../proyectCard/ProyectCard';
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ProyectsCarrusell = () => {

  
  
    const settings = {
      dots: true,
      initialSlide:0,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    

    return (
      <section id="proyects" className="container-proyects" >
        <Title
          className='heading'
          title='Proyectos que he realizado :'
          span='Conoce mi trabajo' 
        /> 
        <Slider  className="container" {...settings}> 
          {proyectsData.map(proyect => (  
                  
            
            <Link key={proyect.id} to={`/proyectos/${proyect.title}`}>
              <ProyectCard               
                title={proyect.title}
                description={proyect.description}
                img={proyect.img_URL}              
                />
            </Link>
            
          ))}
                          
        </Slider>
      </section>
    );
  
}

export default ProyectsCarrusell