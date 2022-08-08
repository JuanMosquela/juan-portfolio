import { useState } from "react"
import { createContext } from "react"


export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)

    const handleTheme = (state) => {

        setTheme(state)
    }



  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider