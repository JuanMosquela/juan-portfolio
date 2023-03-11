import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Modal,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Title from "../title/Title";
import { academicInfo } from "../../data/data";
import learning from "../../img/learning.svg";
import "./academic.css";
import { ThemeContext } from "../../context/ThemeProvider";
import { MdKeyboardArrowDown } from "react-icons/md";

const courses = [
  { title: "desarrollo web" },
  { title: "javascript" },
  { title: "react" },
  { title: "node" },
];

const Academic = () => {
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState(null);

  const [isHovered, setIsHovered] = useState(false);

  const { theme } = useContext(ThemeContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    fontFamily: "Nunito",

    boxShadow: 24,
    borderRadius: "20px",
    backgroundColor: theme ? "var(--blue-dark-color)" : "#FFF",
    p: 4,
  };

  const handleClick = (academic) => {
    setOpen(true);

    const foundAcademic = academicInfo.filter((el) => {
      return el.title === academic;
    });

    if (foundAcademic) {
      setInfo(foundAcademic);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <section className="academic">
      <Title title="Certificados" span="Cursos realizados" />
      <Box>
        <div className="container-buttons">
          {courses.map((course) => (
            <div
              key={course.title}
              className="button-hover"
              style={{ flexDirection: "column", textAlign: "center" }}
            >
              <div className="border-button">
                <button
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="700"
                  className="academic-button"
                  onClick={() => handleClick(course.title)}
                  style={{
                    backgroundColor: theme ? "#232533" : "#e4e4e4",
                    color: theme ? "#FFF" : "#333",
                  }}
                >
                  {course.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="academic-wrapper">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {info?.map((el, index) => (
                <div key={index} className="academic-content">
                  <h3 style={{ color: theme ? "#FFF" : "#000" }}>{el.title}</h3>

                  <ul>
                    {el.description.map((e, index) => (
                      <li
                        key={index}
                        style={{ color: theme ? "#FFF" : "#000" }}
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                  {el.certificate ? (
                    <a
                      href={el.certificate}
                      target="blank"
                      style={{
                        color: theme ? "#FFF" : "#000",
                        border: theme ? "2px solid #FFF" : "2px solid #000",
                      }}
                    >
                      Ver certificado
                    </a>
                  ) : (
                    <div className="missing">
                      <CircularProgress
                        size="4rem"
                        sx={{ color: "#dad9dfbe" }}
                      />
                      Actualmente estudiando
                    </div>
                  )}
                </div>
              ))}
            </Box>
          </Modal>
        </div>
      </Box>
    </section>
  );
};
export default Academic;
