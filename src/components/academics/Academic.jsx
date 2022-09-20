import { Box, Button, ButtonGroup, CircularProgress } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import Title from "../title/Title"
import { academicInfo } from "../../data/proyectsData"
import learning from '../../img/learning.svg'
import './academic.css'
import { ThemeContext } from "../../context/ThemeProvider"
import {MdKeyboardArrowDown} from 'react-icons/md'


const courses = [
    {title: 'desarrollo web'},
    {title:'javascript'},
    {title:'react'},
    {title:'node'}
]


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
            
            >
            
            <div
              className="container-buttons">
                {courses.map(course => (
                   <div className="border-button" style={{
                    backgroundcolor:''
                   }}>
                     <button
                        className="academic-button" 
                        onClick={() => handleClick(course.title)} 
                        style={{ 
                            backgroundColor: theme ? '#232533' : '#e4e4e4',                        
                            color: theme ? '#FFF' : '#000'
                            }}>
                                {course.title} <MdKeyboardArrowDown className="arrow" /> 
                        </button>    
                   </div>            
                    

                ))}
                
            </div>            
            
            <div className="academic-wrapper" >               
                
                    {info?.length > 0 ? info?.map((el, index) => (
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
                              <CircularProgress style={{color: '#4d4bd2'}} />
                            </Box>
                        </h3>
                    </div>)
                }
                    
                
            </div>
        </Box>
    </section>
  )
}
export default Academic