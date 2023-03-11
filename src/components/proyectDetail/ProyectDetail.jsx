import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { proyectsData } from "../../data/data";
import "./proyectDetail.css";

const ProyectDetail = () => {
  const [proyect, setProyect] = useState({});

  const { title } = useParams();

  console.log(title);

  useEffect(() => {
    const proyectFound = proyectsData.find((proyect) => {
      return proyect.title === title;
    });

    console.log(proyectFound);

    if (proyectFound) {
      setProyect(proyectFound);
    }
  }, [title]);

  return (
    <div>
      <section className="proyect-detail-container">
        <img className="proyect-img" src={proyect.img_URL} alt="" />
        <div className="proyect-info">
          <h3>{proyect.title}</h3>
          <h4>Tecnologias utilizadas :</h4>

          <div className="category-container">
            {proyect.technologies?.map((tec) => (
              <img src={tec} alt="" />
            ))}
          </div>
          <p>{proyect.description}</p>
          <a target="blank" href={proyect.link?.github}>
            Github
          </a>
          <a target="blank" href={proyect.link?.deploy}>
            Deploy
          </a>
        </div>
      </section>
    </div>
  );
};
export default ProyectDetail;
