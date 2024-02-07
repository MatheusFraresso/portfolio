import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import info from "../../info.json"
function About() {
  return (
    <Container>
      <h3>About me:</h3>
      <hr></hr>
      <Row>
        <Col xs={12} md={8}>
          {info.homepage.about.paragraphs.map((paragraph) => (
            <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          ))}
        </Col>
        <Col xs={12} md={4}>
          <Image src="./foto_crpd.png" width={"300px"} rounded></Image>
        </Col>
      </Row>
      <Row className="pt-10">
        <p>
          I am well versed in several programming languages, libraries and other
          technologies, here is a compreensive list
        </p>

        <Col xs={6}>
          <ul>
            {info.homepage.about.technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
        </Col>
        <Col xs={6}></Col>
      </Row>
    </Container>
  )
}
export default About
