import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const NavComponent = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Cool Fashion Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Kille</Nav.Link>
        <Nav.Link href="#action2">Tjej</Nav.Link>
        <Nav.Link href="#action2">Unisex</Nav.Link>
        <Nav.Link href="#action2">Nyheter</Nav.Link>
        <Nav.Link href="#action2">REA</Nav.Link>
        <NavDropdown title="Varumärken" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Calvin Klein</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Gant</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Kategorier" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">T-shirt</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Jackor</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Shorts
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Sök efter produkter..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Sök</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavComponent