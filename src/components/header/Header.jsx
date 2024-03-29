import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();

  const { theme, handleTheme } = useContext(ThemeContext);

  const [menu, setMenu] = useState(false);

  const handleNavigate = (link) => {
    navigate(link);
    setMenu(false);
  };

  return (
    <header
      className="header-container"
      style={{ backgroundColor: theme ? "var(--blue-dark-color)" : "#FFF" }}
    >
      <div className="header-wrapper">
        <nav className="navbar">
          <Link to="/">
            <div
              className="logo"
              data-aos="fade-down"
              data-aos-delay="1000"
              style={{ color: theme ? "#FFF" : "#000" }}
            >
              mosquella
            </div>{" "}
          </Link>
          <ul>
            <NavLink
              data-aos="fade-down"
              className="nav-link"
              style={{ color: theme ? "#FFF" : "#000" }}
              to="/"
            >
              home
            </NavLink>
            <NavLink
              data-aos="fade-down"
              data-aos-delay="50"
              className="nav-link"
              style={{ color: theme ? "#FFF" : "#000" }}
              to="/proyectos"
            >
              proyectos
            </NavLink>
            <NavLink
              data-aos="fade-down"
              data-aos-delay="100"
              className="nav-link"
              style={{ color: theme ? "#FFF" : "#000" }}
              to="/contacto"
            >
              contacto
            </NavLink>
          </ul>
        </nav>
        <div
          className="lat-navbar"
          style={{ transform: menu && "translateX(0)" }}
        >
          <ul>
            <li className="nav-link" onClick={() => handleNavigate("/")}>
              Home
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavigate("/proyectos")}
            >
              proyectos
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavigate("/contacto")}
            >
              contacto
            </li>
          </ul>
        </div>
        <div
          className="theme-icons"
          onClick={() => handleTheme(!theme)}
          style={{ color: theme ? "#FFF" : "#000" }}
        >
          {theme ? <FaSun /> : <FaMoon />}
        </div>
        <div className="lat-menu">
          {menu ? (
            <AiOutlineClose onClick={() => setMenu(false)} />
          ) : (
            <BiMenu onClick={() => setMenu(true)} />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
