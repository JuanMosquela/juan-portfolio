import memo from "../img/memo.png";
import fitecommerce from "../img/fit-ecommerce.jpg";
import todoApp from "../img/todo-app.png";
import promptopia from "../img/promptopia.png";
import flexibble from "../img/flexibble.png";

import html from "../img/html.png";
import css from "../img/css.png";
import git from "../img/git.png";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import node from "../img/node.png";
import next from "../img/next.png";

import redux from "../img/redux.png";
import mu5 from "../img/mu5.png";
import sass from "../img/sass.png";
import typescript from "../img/typescript.png";
import bootstrap from "../img/bootstrap.png";
import tailwind from "../img/tailwind-css.png";
import mongo from "../img/mongo.png";
import postgre from "../img/postgre.png";
import express from "../img/express.png";
import graphql from "../img/graphql.png";

export const academicInfo = [
  {
    title: "desarrollo web",
    duration: "Febrero 2022 - Abril 2022",
    description: [
      "Dominio de HTML y CSS",
      "Diseño Web responsive",
      "Frameworks/pre-procesadores como Bootstrap & SASS",
      "Controlador de versiones: Git & Github",
      "Publicacion de respositorios y deploy de los mismos en Github",
    ],
    certificate:
      "https://www.coderhouse.com/certificados/6251d63b47841f0019657963",
  },

  {
    title: "javascript",
    duration: "Mayo 2022 - Junio 2022",
    description: [
      "Dominio del DOM",
      "Programacion Asincronica",
      "Programacion orientada a objetos",
      "Programacion funcional",
      "Peticiones de datos via Fetch y Ajax",
    ],
    certificate:
      "https://www.coderhouse.com/certificados/6288d30ff13872001951b243",
  },
  {
    title: "react",
    duration: "Junio 2022 - Julio 2022",
    description: [
      "Renderizado condicional",
      "Manejo y control del estado de la aplicacion",
      "Context api, UseReducer, Hooks personalizados",
      "Creacion de SPA a traves de React Router",
      "Librerias como Material UI y Formik",
      "Integracion con base de datos como Firebase",
    ],
    certificate:
      "https://www.coderhouse.com/certificados/62e1b706e2776700198e730f",
  },
  {
    title: "node",
    duration: "Julio 2022 - Abril 2023",
    description: [
      "Servidores Web",
      "Express avanzado",
      "Websockets",
      "SQL y MongoDB",
      "Motores de platillas",
      "Envio de mensajes y seguridad",
      "Arquitectura del servidor: capas y persistencia",
      "GraphQL",
    ],
    certificate: null,
  },
];

const proyectsData = [
  {
    id: 1,
    title: "Promptopia",
    description:
      "Promptopia es una app que le permite a sus usuarios crear y compartir prompts que pueden ser utilizados con frecuencia en ChatGPT. ",
    img_URL: promptopia,
    technologies: [next, javascript, mongo, tailwind],
    link: {
      github: "https://github.com/JuanMosquela/Promptopia",
      deploy: "https://promptopia-liart.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Rick & Morty: Memo",
    description:
      "Juego de memoria creado con JavaScript, HTML y CSS, consumiendo una api externa. El juego consiste en buscar los pares de cada personaje sin perder todas tus vidas en el proceso. El juego esta programado para que cada vez que el usuario incie una nueva partida los personajes cambien de lugar aleatoriamente",
    img_URL: memo,
    technologies: [javascript, css, html, git],
    link: {
      github: "https://github.com/JuanMosquela/Rick-MortyMemo",
      deploy: "https://juanmosquela.github.io/Rick-MortyMemo/",
    },
  },
  {
    id: 3,
    title: "Fit-Ecommerce",
    description:
      "Proyecto fullstack en el cual los usuarios pueden autenticarse , realizar operaciones CRUD, filtrar y ordenar productos y finalmente comprarlos por medio de una integracion con Mercado Pago.",
    img_URL: fitecommerce,
    technologies: [react, node, express, tailwind, mu5, javascript],
    link: {
      github: "https://github.com/JuanMosquela/e-commerce-backend",
      deploy: "https://fit-commerce.onrender.com",
    },
  },

  {
    id: 4,
    title: "Flexibble",
    description:
      "Clon de Dribble en el cual los diferentes usuarios podran compartir sus projectos personales, tambien pueden editarlos y borrarlos.",
    img_URL: flexibble,
    technologies: [next, react, typescript, graphql],
    link: {
      github: "https://github.com/JuanMosquela/Flexibble",
      deploy: "https://flexibble-gules.vercel.app/",
    },
  },
];

const icons = [
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "Javascript",
    image: javascript,
  },
  {
    title: "React JS",
    image: react,
  },
  {
    title: "Next JS",
    image: next,
  },
  {
    title: "Redux",
    image: redux,
  },
  {
    title: "Tailwind",
    image: tailwind,
  },
  {
    title: "Typescript",
    image: typescript,
  },
  {
    title: "Git",
    image: git,
  },
  {
    title: "Sass",
    image: sass,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "Node JS",
    image: node,
  },
  {
    title: "Express",
    image: express,
  },
  {
    title: "Mongo DB",
    image: mongo,
  },
  {
    title: "PostgreSQL",
    image: postgre,
  },
];

export { proyectsData, icons };
