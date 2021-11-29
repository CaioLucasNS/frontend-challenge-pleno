import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from '../../screens/Home/Home';
import { About } from '../../screens/About';
import { Contact } from '../../screens/Contact';
import { Developers } from '../../screens/Developers';
import { Help } from '../../screens/Help';
import { Prices } from '../../screens/Prices';
import { Start } from '../../screens/Start';

import { Logo } from '../../components/Logo/Logo';

import './NavbarComponent.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  // const [fontColor, setFontColor] = useState('');
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const hideNav = () => {
    return setExpanded(expanded ? false : "expanded")
  }

  return (
    <Router>
      {/* navbar */}
      <div>
        <Navbar bg="none" variant={windowDimensions.width > 991 ? "dark" : "light"} expand="lg" expanded={expanded}>
          <Container className="nav-container">
            <Navbar.Brand as={Link} to={"/"} onClick={hideNav}>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={hideNav} />

            <Navbar.Collapse id="basic-navbar-nav" className="colapsive-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"} onClick={hideNav}>
                  Início
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} onClick={hideNav}>
                  Sobre
                </Nav.Link>
                <Nav.Link as={Link} to={"/prices"} onClick={hideNav}>
                  Preços
                </Nav.Link>
                <Nav.Link as={Link} to={"/developers"} onClick={hideNav}>
                  Desenvolvedores
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link as={Link} to={"/help"} onClick={hideNav}>
                  Ajuda
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} onClick={hideNav}>
                  Contato
                </Nav.Link>
                <Nav.Link as={Link} to={"/start"} className="start-button" onClick={hideNav}>
                  Começar
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* navigation */}
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/developers" element={<Developers/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/start" element={<Start/>}/>
        </Routes>
      </div>

    </Router>
  );
}
