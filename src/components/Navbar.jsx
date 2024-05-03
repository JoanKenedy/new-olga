import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Cerrar from "../assets/cerrar.png";
import Abrir from "../assets/menu.png";
import Logo from "../assets/logo_header.png";
import Correcto from "../assets/correcto.png";
import Llamada from "../assets/phone.png";
const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);
  return (
    <>
      <div className="menu">
        <div className="menu-arriba">
          <div className="container-menu">
            <div className="item-menu">
              <p>
                {" "}
                <img src={Correcto} alt="" />
                Atención a mas de 15,000 personas
              </p>
              <p>
                {" "}
                <img src={Correcto} alt="" />
                Alta tecnología, diagnostico preciso
              </p>
            </div>
            <div className="item-menu">
              <p>
                <img src={Llamada} alt="" />
                5564529359
              </p>
            </div>
          </div>
        </div>
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
                <Link to={"/services"}>Servicios</Link>
              </li>
              <li>
                <Link to={"/promociones"}>Promociones</Link>
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
