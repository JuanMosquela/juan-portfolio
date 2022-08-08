import { Link } from "react-router-dom"
import Title from "../components/title/Title"
import proyectsData from "../data/proyectsData"
import './proyects.css'

const Proyects = () => {
  return (
    <section className='container-proyects' >
        <Title title='Proyectos:' span='algunos de mis trabajos recientes' />
        <div className="proyects-wrapper">
            {proyectsData.map(proyect => (
                <Link key={proyect.id} to={`/proyectos/${proyect.title}`}>
                    <figure>
                      <img src={proyect.img_URL} alt="" />
                    </figure>
                </Link>
            ))}
            
        </div>

    </section>
  )
}
export default Proyects