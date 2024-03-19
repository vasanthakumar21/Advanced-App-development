import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="nav-wrapper">
        <div className="logo-container">
        </div>
        <nav>
          <input className="hidden" type="checkbox" id="menuToggle" />
          <label className="menu-btn" htmlFor="menuToggle">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </label>
          <div className="nav-container">
            <ul className="nav-tabs">
              <li className="nav-tab">Home</li>
              <li className="nav-tab">Products</li>
              <li className="nav-tab">Services</li>
              <li className="nav-tab">FAQ</li>
              <li className="nav-tab">Contact</li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
