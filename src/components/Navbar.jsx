import { useState } from "react";
import "./navbar.css";

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
                <img src="./src/assets/correcto.png" alt="" />
                Atención a mas de 15,000 personas
              </p>
              <p>
                {" "}
                <img src="./src/assets/correcto.png" alt="" />
                Alta tecnología, diagnostico preciso
              </p>
            </div>
            <div className="item-menu">
              <p>
                <img src="./src/assets/phone.png" alt="" />
                5564529359
              </p>
            </div>
          </div>
        </div>
        <div className="container-menu">
          <div className="logo-menu">
            <img src="./src/assets/logo_header.png" alt="" />
          </div>
          <nav className={`navbar ${openMenu ? "open_menu " : ""}`}>
            <img
              src="./src/assets/cerrar.png"
              alt=""
              className="close"
              onClick={() => isOpenMenu(!openMenu)}
            />

            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="nosotros">Nosotros</a>
              </li>
              <li>
                <a href="services">Servicios</a>
              </li>
              <li>
                <a href="promociones">Promociones</a>
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
            src="./src/assets/menu.png"
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
