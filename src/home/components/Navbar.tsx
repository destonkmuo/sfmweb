function Navbar() {
  return (
    <>
      <header className="main-header">
      <img className="logo" src="https://raw.githubusercontent.com/destonkmuo/sfmweb/main/public/logo.png" alt="logo.jpg"></img>
        <div className="container">
          <nav className="navbar navbar-expand-lg main-nav px-0">
            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav ml-auto text-uppercase f1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#service">Events</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#testimony">Testimonies</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>|</li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
