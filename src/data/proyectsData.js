import memo from '../img/memo.png';
import physical from '../img/physical.png';
import cart from '../img/cart.png';
import commerce from '../img/e-commerce.png';
import lawyer from '../img/lawyer.png';
import aixa from '../img/aixa.png'
import trainer from '../img/fit-trainer.png';
import html from '../img/html.png'
import css from '../img/css.png'
import git from '../img/git.png'
import javascript from '../img/javascript.png'
import react from '../img/react.png'
import node from '../img/node.png'
import redux from '../img/redux.png'
import mu5 from '../img/mu5.png'
import sass from '../img/sass.png'
import typescript from '../img/typescript.png'
import next from '../img/next.png'
import bootstrap from '../img/bootstrap.png'


export const academicInfo = [
    {
        title: 'desarrollo web',
        duration:'Febrero 2022 - Abril 2022',
        description: ['Dominio de HTML y CSS', 'Diseño Web responsive', 'Frameworks/pre-procesadores como Bootstrap & SASS','Controlador de versiones: Git & Github', 'Publicacion de respositorios y deploy de los mismos en Github'],
        certificate: 'https://www.coderhouse.com/certificados/6251d63b47841f0019657963'
        

    },
    
    {
        title: 'javascript',
        duration:'Mayo 2022 - Junio 2022',
        description: ['Dominio del DOM', 'Programacion Asincronica', 'Programacion orientada a objetos','Programacion funcional', 'Peticiones de datos via Fetch y Ajax'],
        certificate: 'https://www.coderhouse.com/certificados/6288d30ff13872001951b243'
       
        
    },
    {
        title: 'react',
        duration:'Junio 2022 - Julio 2022',
        description: ['Renderizado condicional', 'Manejo y control del estado de la aplicacion', 'Context api, UseReducer, Hooks personalizados', 'Creacion de SPA a traves de React Router', 'Librerias como Material UI y Formik', 'Integracion con base de datos como Firebase'],
        certificate: 'https://www.coderhouse.com/certificados/62e1b706e2776700198e730f'
       
        
    }
]



const proyectsData = [
    {
        id:1,
        title: 'Rick & Morty: Memo',
        description: 'Juego de memoria creado con JavaScript, HTML y CSS, consumiendo una api externa. El juego consiste en buscar los pares de cada personaje sin perder todas tus vidas en el proceso. El juego esta programado para que cada vez que el usuario incie una nueva partida los personajes cambien de lugar aleatoriamente',
        img_URL: memo,
        technologies: [javascript, css , html, git],
        link:{
            github: 'https://github.com/JuanMosquela/Rick-MortyMemo',
            deploy:'https://juanmosquela.github.io/Rick-MortyMemo/'
        }
    },
    {
        id:2,
        title: 'Physical Point',
        description: 'Diseño y desarrollo de pagina web hecha con HTML, CSS & SCSS y Javascript. Proyecto final del curso de Desarrollo Web de Coderhouse en el que se maqueto diferentes secciones de una pagina con tematica a eleccion ',
        img_URL: physical,
        technologies: [javascript, css , html, git, sass],
        link:{
            github: 'https://github.com/JuanMosquela/PhysicalPoint.github.io',
            deploy:'https://juanmosquela.github.io/PhysicalPoint.github.io/'
        }

    },
    {
        id:6,
        title: 'Aixa Frazoni',
        description: 'Proyecto de Coderhouse para una clienta real como beneficio por haber ingresado en el top 10 de sus cursos. En este proyecto trabaje a la par de dos diseñadores UX/UI y en conjunto con otro desarrollador, donde nos apalancamos de Git para el control de versiones',
        img_URL: aixa,
        technologies: [ react, javascript, css , html, git  ],
        link:{
            github: 'https://github.com/JuanMosquela/proyecto-aixa',
            deploy:'https://proyecto-aixa.vercel.app/'
        }
    },
    {
        id:3,
        title: 'Carrito de Compra',
        description: 'Logica de carrito con Javascript, peticion de datos y almacenamiento en LocalStorage. En este proyecto se simula el proceso de compra de un e-commerce, cuenta con peticiones asincronas, cuenta con funciones de modificacion, borrado y agregado de productos',
        img_URL: cart,
        technologies: [javascript, css , html, git, bootstrap ],
        link:{
            github: 'https://github.com/JuanMosquela/ShoppingCart',
            deploy:'https://juanmosquela.github.io/ShoppingCart/'
        } 
    },
    {
        id:4,
        title:'Fit-Commerce',
        description: 'Juego de memoria creado con JavaScript, HTML y CSS, consumiendo una api externa.',
        img_URL: commerce,
        technologies: [ react, mu5,  javascript, css , html, git],
        link:{
            github: 'https://github.com/JuanMosquela/e-commerce-fit',
            deploy:'https://e-commerce-fit.vercel.app/'
        }
    },
    {
        id:5,
        title: 'Chinito Fit',
        description: 'Diseño y desarrollo de pagina web hecha con HTML, CSS & SCSS y Javascript.',
        img_URL: trainer,
        technologies: [ javascript, html, sass, git ],
        link:{
            github: 'https://github.com/JuanMosquela/Chinito.github.io',
            deploy:'https://juanmosquela.github.io/Chinito.github.io/'
        } 
    },
    
]



export default proyectsData