import { NavLink } from "react-router-dom";

const Footer = ({ year = new Date().getFullYear(), autor = "SPORT" }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="\src\assets\aptitud-fisica.png" alt="Logo SPORT" />
          <h2 className="footer-letras">SPORT</h2>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            <li><NavLink className="footer-link" to="/inicio">Inicio</NavLink></li>
            <li><NavLink className="footer-link" to="/alta">Alta</NavLink></li>
            <li><NavLink className="footer-link" to="/carrito">Carrito</NavLink></li>
            <li><NavLink className="footer-link" to="/contacto">Contacto</NavLink></li>
            <li><NavLink className="footer-link" to="/productos">Productos</NavLink></li>
            <li><NavLink className="footer-link" to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink className="footer-link" to="/novedades">Novedades</NavLink></li>

          </ul>
        </nav>

        <div className="footer-contacto">
          <p><strong>Email:</strong> contacto@sport.com</p>
          <p><strong>Tel:</strong> +54 11 1234-5678</p>
          <p><strong>Ubicación:</strong> Buenos Aires, Argentina</p>
        </div>

        <div className="footer-redes">
          <a href="#"><img src="\src\assets\facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="\src\assets\social.png" alt="Instagram" /></a>
          <a href="#"><img src="\src\assets\tik-tok.png" alt="TikTok" /></a>
          <a href="#"><img src="\src\assets\youtube.png" alt="YouTube" /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>"Entrená con nosotros, alcanzá tu mejor versión."</p>
        <p>&copy; {year} {autor} - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
