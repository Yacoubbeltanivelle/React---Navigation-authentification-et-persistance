import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./App.css";

function App() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MonSite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
