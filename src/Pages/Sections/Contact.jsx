import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa"

function Contact() {
  return (
    <>
      <h3>
        Contact:
        <hr></hr>
      </h3>
      <p>Here are a list of possible ways you can contact me!</p>
      <Container>
        <Row className="mt-4">
          <Col xs="1">
            <FaPhoneAlt size={"1em"}></FaPhoneAlt>
          </Col>
          <Col>
            You cal call me at {"   "}
            <a href="tel:+5541984398092"> +5541984398092</a>
          </Col>
        </Row>
        <Row className="mt-4 mb-2">
          <Col xs="1">
            <FaMailBulk></FaMailBulk>
          </Col>
          <Col>
            Or send me an email! at {"   "}
            <a href="mailto:mathuesmfraresso@gmail.com?subject=Email from portfolio">
              mathuesmfraresso@gmail.com
            </a>{" "}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Contact
