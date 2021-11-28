import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

import { Home } from '../../screens/Home/Home';
import { About } from '../../screens/About';
import { Contact } from '../../screens/Contact';
import { Developers } from '../../screens/Developers';
import { Help } from '../../screens/Help';
import { Prices } from '../../screens/Prices';
import { Start } from '../../screens/Start';

import { Logo } from '../../components/Logo/Logo';

import './NavbarComponent.scss';

export function NavbarComponent() {
  return (
    <Router>
      {/* navbar */}
      <div>
        <Navbar bg="none" variant={"light"} expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              <Logo firstColor="#009eef" secondColor="#c7c7c7" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="colapsive-nav">
              <Nav className="me-auto">
                {/* <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link> */}
                <Nav.Link as={Link} to={"/about"}>
                  Sobre
                </Nav.Link>
                <Nav.Link as={Link} to={"/prices"}>
                  Preços
                </Nav.Link>
                <Nav.Link as={Link} to={"/developers"}>
                  Desenvolvedores
                </Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav>
                <Nav.Link as={Link} to={"/home"}>
                    <AiOutlineSearch />
                </Nav.Link>
                <Nav.Link as={Link} to={"/help"}>
                  Ajuda
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contato
                </Nav.Link>
                <Nav.Link as={Link} to={"/start"} className="start-button">
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
          <Route path="/home" element={<Home/>}/>
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
