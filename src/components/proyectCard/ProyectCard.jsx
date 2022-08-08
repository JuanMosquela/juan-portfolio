import './proyectCard.css';


const ProyectCard = ({ img }) => {
  return (
    <div className="proyect-card">
        <figure>
            <img src={img} alt="" />
        </figure>       
        
    </div>
  )
}
export default ProyectCard