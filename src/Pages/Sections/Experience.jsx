import React, { useState } from "react"
import { Col, Container, Nav, Row } from "react-bootstrap"

function Experience() {
  const [experience, setExperience] = useState("freelancer")

  function getExperience() {
    switch (experience) {
      case "freelancer":
        return (
          <p>
            As a freelance developer, I work with:<br></br>- Requirements
            analysis<br></br>- Front-end development with Vue.js and Reach.js
            <br></br>- Back-end development with Node.js and Nest.js<br></br>-
            Database development using MongoDb and PostgreSQL<br></br>- Legacy
            code refactoring<br></br>- Consulting<br></br>
          </p>
        )
      case "golive":
        return (
          <p>
            Golive is an IT service provider and an official SAP partner for the
            commercialization, implementation, maintenance, and support of SAP
            Business One ERP.<br></br>
            Activities:<br></br>- Requirements analysis for external and
            internal projects<br></br>- Fullstack development with React.js,
            Node.js, MongoDb.js, HANA DB, and SQL<br></br>- Deployment of tools
            using Firebase and Heroku<br></br>- Maintenance<br></br>- Client
            implementation<br></br>
            Achievements:<br></br>- Improved API call performance by up to 200%
            by rewriting aggregations in MongoDb<br></br>- Developed a component
            library with React, Tailwind, TanstackQuery, and Next.js, enabling
            rapid project implementation<br></br>- Implemented CI/CD features
            with GitLab and Heroku, reducing versioning errors and accelerating
            software production<br></br>- Enhanced code quality by applying
            Clean Coding principles<br></br>
            Context:<br></br>I worked as the lead programmer for various tools
            used both internally for employee and finance management and as
            tools sold to clients.<br></br>
            Technologies:<br></br>- Javascript<br></br>- React.js<br></br>-
            Next.js<br></br>- TanstackQuery<br></br>- Node<br></br>- Tailwind
            <br></br>- Bootstrap<br></br>- Firebase<br></br>- Heroku<br></br>-
            SQL<br></br>- MongoDb<br></br>- Hana<br></br>- SAP<br></br>
          </p>
        )
      case "+a":
        return (
          <p>
            +a Educação is a higher education edtech that meets the needs of
            educational institutions with virtual platforms.
            <br></br>
            Activities:<br></br>- FullStack development using Node.js, Vue.js,
            MongoDb, and PostgreSQL<br></br>- Azure DevOps<br></br>- Code review
            <br></br>- Agile/Scrum<br></br>- Automated testing<br></br>
            Results:<br></br>
            <br></br>- I participated as the lead developer in creating an
            educational tool used by millions of students throughout Brazil.
            <br></br>- I developed a relational data to JSON converter, enabling
            the team's tool to be connected to the company's marketplace.
            <br></br>
            <br></br>
            <br></br>
            Technologies:<br></br>
            <br></br>- Vue.js<br></br>- Vuetify<br></br>- Nuxt.js<br></br>-
            Node.js<br></br>- MongoDb<br></br>- PostgreSQL<br></br>- DynamoDB
            <br></br>- model-viewer<br></br>
          </p>
        )
      case "tcepr":
        return (
          <p>
            Audit Offices have the mission of ensuring and enforcing the
            oversight of public resources for the benefit of the community as
            important implementing and participatory bodies under Law No.
            12,527/11.
            <br></br>
            <br></br>
            At TCEPR, I worked as an intern and worked with:<br></br>- ASP.NET
            development<br></br>- Code maintenance<br></br>
            <br></br>
            Results:<br></br>- Contributed to the development of an audit tool
            that enhances transparency in public spending for citizens.
            <br></br>
          </p>
        )
      default:
        break
    }
  }
  return (
    <>
      <h3> Check My professional experience</h3>
      <hr></hr>
      <Container>
        <Row>
          <Col xs={2}>
            <Nav bg="dark" data-bs-theme="dark" className="flex-column">
              <Nav.Item>
                <Nav.Link onClick={() => setExperience("freelancer")}>
                  Freelancer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setExperience("golive")}>
                  Golive
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setExperience("+a")}>+A</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setExperience("tcepr")}>
                  TCEPR
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={10}>{getExperience()}</Col>
        </Row>
      </Container>
    </>
  )
}
export default Experience
