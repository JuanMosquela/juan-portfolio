import React, { useContext } from "react";
import Title from "../title/Title";
import "./carrusell.css";
import { proyectsData } from "../../data/data.js";
import ProyectCard from "../proyectCard/ProyectCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from "../../context/ThemeProvider";

const ProyectsCarrusell = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    dots: true,
    initialSlide: 0,
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
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="proyects"
      className="container-proyects"
      style={{ backgroundColor: theme ? "var(--blue-dark-color)" : "#FFF" }}
    >
      <Title className="heading" title="Portfolio" span="conoce mi trabajo" />
      <Slider className="container" {...settings}>
        {proyectsData.map((proyect) => (
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
};

export default ProyectsCarrusell;
