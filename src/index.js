import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Proyects from './pages/Proyects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProyectDetail from './components/proyectDetail/ProyectDetail';
import ThemeProvider from './context/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <ScrollToTop />
    <ThemeProvider>
      
      <Routes> 
        <Route path='/' element={<App />}>              
          <Route index element={<Home />} />
          <Route path='/proyectos' element={<Proyects />} />
          <Route path='/proyectos/:title' element={<ProyectDetail />} />
          <Route path='/contacto' element ={<Contact />} />              
        </Route>
      </Routes>  
    </ThemeProvider>       
  </BrowserRouter>
  
    
  
);