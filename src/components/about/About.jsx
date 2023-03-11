import Title from "../title/Title";
import "./about.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import academic from "../../img/academic.svg";
import html from "../../img/html.png";
import css from "../../img/css.png";
import git from "../../img/git.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import node from "../../img/node.png";
import redux from "../../img/redux.png";
import mu5 from "../../img/mu5.png";
import sass from "../../img/sass.png";
import typescript from "../../img/typescript.png";
import next from "../../img/next.png";
import bootstrap from "../../img/bootstrap.png";
import mongo from "../../img/mongo.png";
import tailwind from "../../img/tailwind-css.png";
import postgre from "../../img/postgre.png";
import { icons } from "../../data/data";

const About = () => {
  const { theme } = useContext(ThemeContext);

  // const icons = [
  //   {
  //     title: "HTML",
  //     image: html,
  //   },
  //   {
  //     title: "CSS",
  //     image: css,
  //   },
  //   {
  //     title: "Javascript",
  //     image: javascript,
  //   },
  //   {
  //     title: "React JS",
  //     image: react,
  //   },
  //   {
  //     title: "Redux",
  //     image: redux,
  //   },
  //   {
  //     title: "Tailwind",
  //     image: tailwind,
  //   },

  //   {
  //     title: "Typescript",
  //     image: typescript,
  //   },
  //   {
  //     title: "Git",
  //     image: git,
  //   },
  //   {
  //     title: "Sass",
  //     image: sass,
  //   },
  //   {
  //     title: "Bootstrap",
  //     image: bootstrap,
  //   },
  //   {
  //     title: "Node JS",
  //     image: node,
  //   },
  //   {
  //     title: "Mongo DB",
  //     image: mongo,
  //   },
  //   {
  //     title: "PostgreSQL",
  //     image: postgre,
  //   },
  // ];

  return (
    <section id="about">
      <div className="about-container">
        <div className="picture-profile">
          <img src={academic} alt="" />
        </div>
        <div className="about-content">
          <Title title="Conoceme" span="un poco sobre mi" />
          <p>
            Soy un desarrollador freelance que ha realizado proyectos para
            pequeños emprendedores, aunque tambien tuve la oportunidad de
            trabajar en conjunto con otros desarrolladores. Siempre me
            caracterice por ser autodidacta y estar en constante aprendizaje. Me
            entusiasmo el estilo de vida y la gran capacidad de crecimiento que
            veo en el mundo IT. Actualmente busco mi primer experiencia
            empresarial para poder demostrar y aportar todos mis conocimientos.
          </p>
        </div>
      </div>
      <div className="skills-container">
        <Title title="Mis habilidades" span="tecnologías que conozco" />
        <div className="animation-wrapper">
          <div className="icons-container">
            {icons?.map((tec, index) => (
              <div
                key={tec.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <figure
                  className="tec"
                  style={{
                    backgroundColor: theme ? "#232533" : "#e4e4e4",
                    marginBottom: "10px",
                  }}
                >
                  <img src={tec.image} key={index} alt={tec.name} />
                </figure>
                <h4>{tec.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
