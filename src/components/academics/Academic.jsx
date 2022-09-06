import { Box, Button, ButtonGroup, CircularProgress } from "@mui/material"
import { useContext, useState } from "react"
import Title from "../title/Title"
import { academicInfo } from "../../data/proyectsData"
import learning from '../../img/learning.svg'
import './academic.css'
import { ThemeContext } from "../../context/ThemeProvider"
import {MdKeyboardArrowRight} from 'react-icons/md'


const Academic = () => {

     

    const [info, setInfo] = useState('')
    
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
        <Title title='Certificados' span='Cursos realizados' />
        <Box 
            
            
            sx={{
                display:'flex',           
                alignItems:'center',                
                flexWrap:'wrap',
                p:'2rem'
                
                
                
                
            }}
            >
            
            <ButtonGroup
            className="container-buttons"
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',  
                    flex:'1rem',    
                    
                    gap:'1rem'
                }}  
                 
                >
                <button 
                    onClick={() => handleClick('desarrollo web')} 
                    style={{ 
                        backgroundColor: theme ? '#000' : '#ccc',  
                        fontSize:'1.4rem', color: theme ? '#FFF' : '#000'
                         }}>Desarrollo Web <MdKeyboardArrowRight className="arrow" /> </button>                
                <button 
                    onClick={() => handleClick('javascript')} 
                    style={{ 
                        backgroundColor: theme ? '#000' : '#ccc',  
                        fontSize:'1.4rem', color: theme ? '#FFF' : '#000'
                         }}>Javascript <MdKeyboardArrowRight className="arrow" /></button>
                <button 
                    onClick={() => handleClick('react')} 
                    style={{ 
                        backgroundColor: theme ? '#000' : '#ccc',  
                        fontSize:'1.4rem', color: theme ? '#FFF' : '#000'
                         }}>React <MdKeyboardArrowRight className="arrow" /></button>
                <button 
                    onClick={() => handleClick('node')} 
                    style={{ 
                        backgroundColor: theme ? '#000' : '#ccc',  
                        fontSize:'1.4rem', color: theme ? '#FFF' : '#000'
                         }}>Node <MdKeyboardArrowRight className="arrow" /></button>
            </ButtonGroup>            
            
            <Box flex={1} >               
                
                    {info.length > 0 ? info.map((el, index) => (
                        <div key={el.index} className="academic-content">
                            <h3>{el.title}</h3>
                            
                            <ul>
                                {el.description.map(e => (
                                    <li style={{ color: theme ? '#FFF' : '#000' }} >{e}</li>
                                ))}
                            </ul>
                            <a href={el.certificate} target='blank' style={{ color: theme ? '#FFF' : '#000', border: theme ? '2px solid #FFF' : '2px solid #000'}} >Ver certificado</a>                          
                            
                        </div>                       
                        
                    )) : (
                    <div className="incomplete">
                        <img src={learning} alt="" />
                        <h3>Actualmente estudiando 
                            <Box sx={{ display:'flex' }}>
                              <CircularProgress />
                            </Box>
                        </h3>
                    </div>)
                }
                    
                
            </Box>
        </Box>
    </section>
  )
}
export default Academic