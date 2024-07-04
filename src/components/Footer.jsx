import "./footer.css";
import LogoFooter from "../assets/logo-blanco.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="item-container-footer">
            <img src={LogoFooter} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, nisi!
            </p>
            <i class="fa-brands fa-square-whatsapp"></i>
            <i class="fa-solid fa-square-phone"></i>
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="item-container-footer">
            <h2>Menú</h2>
            <div className="menu-footer">
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
                  <Link to={"/services"}>Servicios</Link>
                </li>

                <li>
                  <a href="#ubicacion">Ubicación</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="item-container-footer">
            <h2>Contacto</h2>
            Dirección: <br /> Correo Electrónico: <br /> Télefono:
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
