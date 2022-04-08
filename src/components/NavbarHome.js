import React from 'react'
import {Navbar, Nav, Container,Link} from 'react-bootstrap'





function NavbarHome() {
  return (
    <>
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="/UserHome">MediRelief</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="/AboutUs">About Us</Nav.Link>
      <Nav.Link href="/DonateUs">Donate</Nav.Link>
      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
      <Nav.Link href="/SignInForm">Login</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
 
</>
  )
}

export default NavbarHome