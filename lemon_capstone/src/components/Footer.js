import { Link } from 'react-router-dom';
import footerLogo from '../images/littleLemonfooterLogo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={footerLogo} alt="Reactive Lemon logo" width="56" height="56" />
      </div>

      <nav aria-labelledby="footer-nav-heading">
        <h3 id="footer-nav-heading">Doormat Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
        </ul>
      </nav>

      <address>
        <h3>Contact</h3>
        <ul>
          <li>123 Lemon Street</li>
          <li>Chicago, IL</li>
          <li>(555) 123-4567</li>
        </ul>
      </address>

      <nav aria-labelledby="footer-social-heading">
        <h3 id="footer-social-heading">Social Media Links</h3>
        <ul>
          <li><a href="https://instagram.com" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://facebook.com" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://x.com" rel="noopener noreferrer">X</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;