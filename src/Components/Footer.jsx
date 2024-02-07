import React from "react"
import { Image } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import ContactModal from "./Modals/ContactModal"
import { FaDownload, FaFileDownload } from "react-icons/fa"

function Footer() {
  function downloadResume() {}
  return (
    <Navbar id={"footer"}>
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/#about">About</Nav.Link> <vl></vl>
          <Nav.Link href="/#experience">Experience</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
          <Nav.Link href="./documents/MatheusFraresso_cv_en.pdf" download>
            Download Resume{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Footer
