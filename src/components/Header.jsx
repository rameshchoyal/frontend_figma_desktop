const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div>
          <img
            className="logo"
            alt="logo"
            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
          />
        </div>
        <div className="header-options">
          <nav className="nav-items">
            <a className="nav-item">About Us</a>
            <a className="nav-item">Blog</a>
            <a className="nav-item">FAQ</a>
            <a className="nav-item">Contact Us</a>
          </nav>
          <button className="button">Try Inito</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
