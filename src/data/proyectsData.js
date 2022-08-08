import memo from '../img/memo.png';
import physical from '../img/physical.png';
import cart from '../img/cart.png';
import commerce from '../img/e-commerce.png';
import lawyer from '../img/lawyer.png';
import trainer from '../img/fit-trainer.png';



const proyectsData = [
    {
        id:1,
        title: 'Rick & Morty: Memo',
        description: 'Juego de memoria creado con JavaScript, HTML y CSS, consumiendo una api externa. El juego consiste en buscar los pares de cada personaje sin perder todas tus vidas en el proceso. El juego esta programado para que cada vez que el usuario incie una nueva partida los personajes cambien de lugar aleatoriamente',
        img_URL: memo,
        technologies: ['javascript','css', 'html' ],
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
        technologies: ['javascript','html', 'css', 'sass' ],
        link:{
            github: 'https://github.com/JuanMosquela/PhysicalPoint.github.io',
            deploy:'https://juanmosquela.github.io/PhysicalPoint.github.io/'
        }

    },
    {
        id:3,
        title: 'Carrito de Compra',
        description: 'Logica de carrito con Javascript, peticion de datos y almacenamiento en LocalStorage. En este proyecto se simula el proceso de compra de un e-commerce, cuenta con peticiones asincronas, cuenta con funciones de modificacion, borrado y agregado de productos',
        img_URL: cart,
        technologies: ['javascript', 'bootstrap','html'],
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
        technologies: ['React JS','Javascript','Material UI', 'Firebase', 'Formik', 'CSS', 'HTML' ],
        link:{
            github: 'https://github.com/JuanMosquela/fit-commerce-Mosquella',
            deploy:'https://fit-commerce-mosquella.vercel.app/'
        }
    },
    {
        id:5,
        title: 'Chinito Fit',
        description: 'Diseño y desarrollo de pagina web hecha con HTML, CSS & SCSS y Javascript.',
        img_URL: trainer,
        technologies: ['javascript','sass', 'html' ],
        link:{
            github: 'https://github.com/JuanMosquela/Chinito.github.io',
            deploy:'https://juanmosquela.github.io/Chinito.github.io/'
        } 
    },
    {
        id:6,
        title: 'Viviana Stoppiello Abogada',
        description: 'Logica de carrito con Javascript, peticion de datos y almacenamiento en LocalStorage ',
        img_URL: lawyer,
        technologies: ['Javascript', 'Bootstrap','CSS', 'HTML' ],
        link:{
            github: 'https://github.com/JuanMosquela/Landing-page-abogada',
            deploy:'https://juanmosquela.github.io/Landing-page-abogada/'
        }
    }
]

export default proyectsData