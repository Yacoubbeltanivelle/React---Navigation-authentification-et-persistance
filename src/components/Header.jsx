import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import "../assets/Header.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/category/vetements"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Vêtements
              </NavLink>
              <NavLink
                to="/category/chaussures"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                Chaussures
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
