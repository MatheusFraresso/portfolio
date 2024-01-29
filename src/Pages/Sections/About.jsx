import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"

function About() {
  return (
    <Container>
      <h3>About me:</h3>
      <hr></hr>
      <Row>
        <Col xs={12} md={8}>
          <p>
            {" "}
            I got first introduced to programming at 15 when I started my
            Informatics Technical degree at{" "}
            <a target="__blank" href="https://ifpr.edu.br/curitiba/">
              Instituto Federal do Paraná
            </a>{" "}
            where I graduated in 2016
          </p>

          <p>
            After a year in military service I continued my journey studying
            programming in{" "}
            <a href="https://ufpr.br/" target="__blank">
              Universidade Federal do Paraná
            </a>{" "}
            where I'm curently persuing mY Bachelors degree in Computer Science,
            with a final paper researching Database performmances on relational
            data
          </p>
          <p>
            {" "}
            I'm curretly working as a freelanecer developer, helping clients
            build their projects and choosing the right technologies for their
            needs
          </p>
          <p>
            {" "}
            I have experience architecting, developing and deploying web
            applications in both front and back ends, I also took the lead in
            several complex and high stake projects and mentored new developers
            in the begginning of their journey
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Image src="./foto_crpd.png" width={"300px"}></Image>
        </Col>
      </Row>
      <Row>
        <p>
          I am well versed in several programming languages, libraries and other
          technologies, here is a compreensive list
        </p>

        <Col xs={6}>
          <ul>
            <li> Javascript / Python / Java / C</li>
            <li> React.js / Vue.js / Next.js / TanstackQuery</li>
            <li>Node.js / Nest.js / Bun</li>
            <li> MongoDB, Postgres SAP (Hana / Service Layer)</li>
            <li> Testes (unitários / E2E)</li>
            <li>CI/CD (GitLab / Heroku) Azure / scrum / ágil</li>
          </ul>
        </Col>
        <Col xs={6}></Col>
      </Row>
    </Container>
  )
}
export default About
