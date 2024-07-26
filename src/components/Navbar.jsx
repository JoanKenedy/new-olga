import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Cerrar from "../assets/cerrar.png";
import Abrir from "../assets/menu.png";
import Logo from "../assets/logo_header.png";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);
  return (
    <>
      <div className="menu">
        <div className="container-menu">
          <div className="logo-menu">
            <img src={Logo} alt="" />
          </div>
          <nav className={`navbar ${openMenu ? "open_menu " : ""}`}>
            <img
              src={Cerrar}
              alt=""
              className="close"
              onClick={() => isOpenMenu(!openMenu)}
            />

            <ul>
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
              <li>
                <Link to={"/nosotros"}>Nosotros</Link>
              </li>
              <li>
                <Link to={"/promociones"}>Promociones</Link>
              </li>
              <li>
                <Link to={"/services-obstetricia-materno-fetal"}>
                  Obstetricia
                </Link>
              </li>
              <li>
                <Link to={"/services-ginecologia"}>Ginecología</Link>
              </li>

              <li>
                <a href="#ubicacion">Ubicación</a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=525564529359"
                  target="_blank"
                  className="btn-contacto"
                >
                  ¡AGENDA TU CITA!
                </a>
              </li>
            </ul>
          </nav>
          <img
            src={Abrir}
            alt=""
            className="btn-menu"
            onClick={() => isOpenMenu(!openMenu)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
