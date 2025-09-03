import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MyLandingPage</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
