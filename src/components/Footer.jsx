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
              Disfruta del milagro de dar vida a un ser al que amarás el resto
              de tu vida.
            </p>
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
            <p>Télefono: 5564529359</p>
            <p>
              Dirección: Hospital Angeles Acoxpa, Calz Acoxpa 430, Coapa,
              Ex-Hacienda Coapa, Tlalpan, 14308 Ciudad de México, CDMX.
            </p>
            <i class="fa-brands fa-square-whatsapp"></i>
            <i class="fa-solid fa-square-phone"></i>
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
        </div>
        <div className="datos-desarrollo">
          <p>Todos los derechos reservados a Dra. Olga Castillo © 2024.</p>
          <p>
            {" "}
            <a href="https://agenciainspiracion.com/" target="_blank">
              Diseñado y desarrollado por Angecia Inspiración
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
