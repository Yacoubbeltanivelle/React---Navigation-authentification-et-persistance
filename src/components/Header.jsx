import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import "../assets/Header.css";

function Header() {
  return (
    <header>
      <Navbar expand="lg lo" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/vetements">
                Vêtements
              </Nav.Link>
              <Nav.Link as={NavLink} to="/category/chaussures">
                Chaussures
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
