export default function Navagition() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand-logo" />
        </div>
        <ul className="nav-pages">
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button className="login-button btn">LOGIN</button>
      </nav>
    </>
  );
}
