// IMAGENES SERVICIOS
import servicio1 from "./img/services/landing-page.png";
import servicio2 from "./img/services/computer.png";
import servicio3 from "./img/services/website.png";
import servicio4 from "./img/services/mejoramiento.png";
import servicio5 from "./img/services/cross-platform.png";
import servicio6 from "./img/services/administracion.png";

//IMAGENES PROYECTOS
import clima from "./img/projects/clima-vanilla.jpg";
import cripto from "./img/projects/cripto1.jpg";
import reduxCrud from "./img/projects/crud-redux.jpg";
import taskMern from "./img/projects/task-mern.jpg";
import imagenSearch from "./img/projects/imagen-search.jpg";
import malayaFood from "./img/projects/malaya-food.jpg";

// CURRICULUM
import cv from './img/CV.pdf'

//LENGUAJES SVG
import htmlSvg from './img/languajes/html5.svg';
import cssSvg from './img/languajes/css.svg';
import jsSvg from './img/languajes/js.svg';
import bootstrapSvg from './img/languajes/bootstrap.svg';
import reactSvg from './img/languajes/react.svg';
import nodeSvg from './img/languajes/node.png';
import firebaseSvg from './img/languajes/firebase.svg';
import mongoSvg from './img/languajes/mongodb.svg';
import gitSvg from './img/languajes/git.svg';


export const hero = {
  titulo: "Hola, Soy Desarrollador",
  perfil: "Front End",
  desc: "Me llamo Freddy Gutierrez y aqui encontraras mis mejores proyectos.",
};

export const servicios = [
  {
    titulo: "Landing Pages",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio1,
  },
  {
    titulo: "Aplicaciones Web",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio2,
  },
  {
    titulo: "Maquetaciones",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio3,
  },
  {
    titulo: "Optimización Web",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio4,
  },
  {
    titulo: "Responsive Desing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio5,
  },
  {
    titulo: "Administración Web",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imagen: servicio6,
  },
];

export const proyectos = [
  {
    imagen: reduxCrud,
    nombre: "Crud Con Redux",
    desc: "Crud de productos con Bootstrap, React & Redux, con el fin de practicar un poco redux, no tengo donde alojar el server",
    visitar: "https://github.com/FreddyGames69/REDUX-CRUD",
    codigo: "https://github.com/FreddyGames69/REDUX-CRUD",
  },
  {
    imagen: taskMern,
    nombre: "Administrador de Proyectos",
    desc: "Aplicación Full Stack Para administrar proyectos con MongoDb, Express, React & Node",
    visitar: "https://task-freddy.netlify.app/",
    codigo: "https://github.com/FreddyGames69/TaskMern",
  },
  {
    imagen: malayaFood,
    nombre: "Landing Page Restaurante",
    desc: "Una simple landing page realizada con Html, Css y Javascript para practicar maquetacion.",
    visitar: "https://malayafood.netlify.app/",
    codigo: "https://github.com/FreddyGames69/MalayaFood",
  },
  {
    imagen: cripto,
    nombre: "Cotizador de Criptomonedas",
    desc: "Este proyecto te permite cotizar el precio de las mejores 10 Criptomonedas, Hecho con react",
    visitar: "https://freddy-coin.netlify.app/",
    codigo: "https://github.com/FreddyGames69/criptomonedas-react",
  },
  {
    imagen: clima,
    nombre: "Aplicacion de Clima",
    desc: "Pequeña aplicacion con Vanilla javascript y Async Await para practicar js Puro",
    visitar: "https://freddy-clima.netlify.app/",
    codigo: "https://github.com/FreddyGames69/material-clima",
  },
  {
    imagen: imagenSearch,
    nombre: "Buscador de Imagenes",
    desc: "Buscador de Imagenes gratuitas realizado con React js & Pixabay API",
    visitar: "https://freddy-images2.netlify.app/",
    codigo: "https://github.com/FreddyGames69/imagen-search-react",
  },
];

export const habilidades = [
  {
    nombre: "Html5",
    imagen: htmlSvg,
    tazas: 5,
  },
  {
    nombre: "Css3",
    imagen: cssSvg,
    tazas: 4,
  },
  {
    nombre: "Javascript",
    imagen: jsSvg,
    tazas: 4,
  },
  {
    nombre: "Boostrap",
    imagen: bootstrapSvg,
    tazas: 4,
  },
  {
    nombre: "ReactJs",
    imagen: reactSvg,
    tazas: 4,
  },
  {
    nombre: "NodeJs",
    imagen: nodeSvg,
    tazas: 3,
  },
  {
    nombre: "Firebase",
    imagen: firebaseSvg,
    tazas: 3,
  },
  {
    nombre: "MongoDB",
    imagen: mongoSvg,
    tazas: 3,
  },
  {
    nombre: "Git & Github",
    imagen: gitSvg,
    tazas: 4,
  },
];

export const me = {
  nombre: "Freddy Gutierrez",
  perfil: "Front End",
  desc: "Tengo 20 años, soy apasionado por el aprendizaje y la programación, Siempre estoy dispuesto a aprender nuevas tecnologias, me encantaria empezar a agarrar experiencia, ayudar y crecer con un equipo de trabajo. ",
  cv: cv,
};

export const contacto = {
  direccion: "Z6 Mixco, Guatemala",
  telefono: "+502 5500-5478",
  email: "freddy12gutierrez@gmail.com",
  facebook: "https://www.facebook.com/PrettoGames98",
  linkedin: "https://www.linkedin.com/in/freddy-gutierrez-15129a19a/",
  whatsapp: "https://wa.link/taghjy",
  github: "https://github.com/FreddyGames69",
  galeria: "https://freddy-gallery.netlify.app",
};
