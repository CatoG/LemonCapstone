import logo from '../images/littleLemonLogo.png';

function Header() {
  return (
    <header className="site-header" aria-label="Reactive Lemon">
      <img src={logo} alt="Reactive Lemon logo" />
    </header>
  );
}

export default Header;