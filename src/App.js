import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { CircleLeft, CircleRigth } from "./components/circle/Circle";




function App() {

  const { theme } = useContext(ThemeContext)

  


  return (
    
    <div className="App" style={{ backgroundColor: theme ? "var(--blue-dark-color)" : '#FFF', color: theme ? '#FFF' : '#000' }}>
      <Header  />
      <CircleLeft />
      <CircleRigth />
      <div>
        <Outlet />
        
      </div>          
      
    </div>
  );
}

export default App;