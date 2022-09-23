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

    const [isHovered, setIsHovered] = useState(false)
    
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
                <div className="button-hover" style={{ flexDirection:'column', textAlign:'center' }}>
                    <div key={course.title} className="border-button" >
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            data-aos='fade-up' data-aos-delay='200' data-aos-duration='700'
                            className="academic-button" 
                            onClick={() => handleClick(course.title)} 
                            style={{ 
                                backgroundColor: theme ? '#232533' : '#e4e4e4',                        
                                color: theme ? '#FFF' : '#333'
                                }}>
                                {course.title} 
                        </button>   
                         
                   </div>  
                   <MdKeyboardArrowDown className="arrow" />  
                </div>        
                    

                ))}
                
            </div>            
            
            <div className="academic-wrapper" >               
                
                    {info?.length > 0 ? info?.map((el, index) => (
                        <div key={index} className="academic-content">
                            <h3>{el.title}</h3>
                            
                            <ul>
                                {el.description.map((e,index) => (
                                    <li key={index} style={{ color: theme ? '#FFF' : '#000' }} >{e}</li>
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