import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeProvider"
import proyectsData from "../../data/proyectsData"
import './proyectDetail.css'

const ProyectDetail = () => {

    const {theme} = useContext(ThemeContext)

    const [proyect, setProyect] = useState({})

    const { title } = useParams()

    console.log(title)

    useEffect(() => {

        const proyectFound = proyectsData.find(proyect => {
            return proyect.title === title
        })

        console.log(proyectFound)
        

        if(proyectFound){
            setProyect(proyectFound)
        }
      
    }, [title])
    
    


  return (
    <div>
        <section className="proyect-detail-container">
            <img src={proyect.img_URL} alt="" />
            <div className="proyect-info">
                <h3>{proyect.title}</h3>
                <div className="category-container">
                    {
                        proyect.technologies?.map(tec => (
                            <span style={{ 
                                border: theme ? '2px solid #FFF' : '2px solid #333',
                                color: theme ? '#FFF' : '#333' }}
                                key={tec}>{tec}
                            </span>
                        ))
                    }
                </div>
                <p>{proyect.description}</p>
                <a  target='blank' href={proyect.link?.github}>Github</a>
                <a target='blank' href={proyect.link?.deploy}>Deploy</a>
            </div>
            
        </section>

    </div>
  )
}
export default ProyectDetail