import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="nav-bar">
      <h1 className="nav-logo">
        <Link to={"/"}>User Management System</Link>
      </h1>

      <ul className="nav-links">
        <li className="nav-link">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to={"/users"}>Users</Link>
        </li>
        <li className="nav-link">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </section>
  );
}
