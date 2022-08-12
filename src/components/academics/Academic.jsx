import { Box, Button, ButtonGroup } from "@mui/material"
import { useContext, useState } from "react"
import Title from "../title/Title"
import { academicInfo } from "../../data/proyectsData"
import { useEffect } from "react"
import learning from '../../img/learning.svg'
import './academic.css'
import { ThemeContext } from "../../context/ThemeProvider"

const Academic = () => {

     

    const [info, setInfo] = useState([])
    
    const {theme} = useContext(ThemeContext)

    
    

    const handleClick = (academic) => {
        const foundAcademic = academicInfo.filter(el => {
            return el.title === academic
        }) 
        
        if(foundAcademic){
            setInfo(foundAcademic)
        }             

    }

    

    


  return (
    <section className="academic">
        <Title title='Cerftificados :' span='cursos realizados' />
        <div className="academic-wrapper">
            <Box className="container-buttons"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                    m: 1,
                    },
                }}
            >
            <ButtonGroup  variant="outlined" aria-label="outlined button group">
                <Button onClick={() => handleClick('desarrollo web')} sx={{ fontSize:'1.4rem', color: theme ? '#FFF' : '#000' }}>Desarrollo Web</Button>                
                <Button onClick={() => handleClick('javascript')} sx={{ fontSize:'1.4rem', color: theme ? '#FFF' : '#000' }}>Javascript</Button>
                <Button onClick={() => handleClick('react')} sx={{ fontSize:'1.4rem', color: theme ? '#FFF' : '#000' }}>React</Button>
                <Button onClick={() => handleClick('node')} sx={{ fontSize:'1.4rem', color: theme ? '#FFF' : '#000' }}>Node</Button>
            </ButtonGroup>            
            </Box>
            <div className="academic-container">
                
                    {info.length > 0 ? info.map(el => (
                        <div className="academic-content">
                            <h3>{el.title}</h3>
                            <span>{el.duration}</span>
                            <ul>
                                {el.description.map(e => (
                                    <li>{e}</li>
                                ))}
                            </ul>
                            <a href={el.certificate} target='blank' >Ver certificado</a>                          
                            
                        </div>                       
                        
                    )) : (
                    <div className="incomplete">
                        <img src={learning} alt="" />
                        <h3>Actualmente estudiando...</h3>
                    </div>)
                }
                    
                
            </div>
        </div>
    </section>
  )
}
export default Academic