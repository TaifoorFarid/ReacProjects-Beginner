import "./Navigation.css";

export default function () {
  return (
    <>
      <nav className="nav-bar">
        <img src="/images/logo.png" alt="" />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
