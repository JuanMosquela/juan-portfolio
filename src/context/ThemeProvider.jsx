import { useState } from "react"
import { createContext } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
      try{
        const themeLocalStorage = localStorage.getItem('theme')
        return themeLocalStorage ? JSON.parse(themeLocalStorage) : true
      }
      catch{
        return true 
      }
    })

    const handleTheme = (state) => {
      setTheme(state)
      localStorage.setItem('theme', JSON.stringify(state))
    }


  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider