import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="mapa">
          <div className="container-mapa" id="ubicacion">
            <div className="item-mapa">
              <h2>Horarios</h2>
              <h3>Lunes y Sábado: 9:00am - 20:00pm Domingo: Cerrado</h3>
              <h2>Ubicación</h2>
              <h3>
                Calz Acoxpa 430, Coapa, Ex-Hacienda Coapa, Tlalpan, 14308 Ciudad
                de México, CDMX
              </h3>
              <a
                href="https://api.whatsapp.com/send/?phone=525564529359"
                target="_blank"
                className="btn-rosa"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </div>
            <div className="item-mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.6039858646977!2d-99.13789162403101!3d19.29958034491395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01af68b8f9d7%3A0x409ea7811edeb2d0!2sCalz%20Acoxpa%20430%2C%20Coapa%2C%20Ex-Hacienda%20Coapa%2C%20Tlalpan%2C%2014308%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1714096355475!5m2!1ses-419!2smx"
                width="600"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <section className="footer-footer">
          <article>
            <div className="item-footer-footer">
              <p>2024© Todos los derechos reservados Dra. Olga Castillo .</p>
              <p>Desarrollado por Agencia de Marketing Dentarios ©2024 </p>
            </div>
            <div className="item-footer-footer">
              <a
                href="tel:5529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-phone"></i> 5535362504
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=525529484701"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-whatsapp"></i> 5529484701
              </a>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Footer;
