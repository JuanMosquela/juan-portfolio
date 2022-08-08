import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";




function App() {

  const { theme } = useContext(ThemeContext)

  


  return (
    
    <div className="App" style={{ backgroundColor: theme ? '#000' : '#FFF', color: theme ? '#FFF' : '#000' }}>
      <Header  />
      <div>
        <Outlet />
        
      </div>          
      
    </div>
  );
}

export default App;