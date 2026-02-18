function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/logo192.png" alt="Little Lemon logo" width="36" height="36" />
        <p>Little Lemon</p>
      </div>

      <div>
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <ul>
          <li>123 Lemon Street</li>
          <li>Chicago, IL</li>
          <li>(555) 123-4567</li>
        </ul>
      </div>

      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">X</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;