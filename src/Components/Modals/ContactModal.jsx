import React, { useEffect, useRef, useState } from "react"
import { FaPhone, FaMailBulk, FaMailchimp } from "react-icons/fa"
import emailjs from "@emailjs/browser"

import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap"

function ContactModal() {
  const form = useRef()
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  })
  const [email, setEmail] = useState({
    subject: "",
    conent: "",
    from_name: "",
    from_email: "",
  })

  async function sendEmail() {
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      setAlert({ show: true, message: "Email sent!", variant: "success" })
    } catch (error) {
      console.error(error)
      setAlert({
        show: true,
        message: "An error has occoured! " + error.text,
        variant: "danger",
      })
    }
  }

  return (
    <>
      <span onClick={() => setShow(true)}>Contact</span>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your interest!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Here are a list of possible ways you can contact me!</p>
          <Container>
            <Row className="mt-4">
              <Col xs="1">
                <FaPhone size={"1em"}></FaPhone>
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
            <form ref={form}>
              <Row>
                <InputGroup className="mt-2">
                  <InputGroup.Text className="w-25">Your Name</InputGroup.Text>
                  <Form.Control
                    aria-label="Subject"
                    value={email.from_name}
                    name="from_name"
                    onInput={(e) => {
                      console.log(e.target.value)
                      setEmail((prev) => ({
                        ...prev,
                        from_name: e.target.value,
                      }))
                    }}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup className="mt-2">
                  <InputGroup.Text className="w-25">Your Email</InputGroup.Text>
                  <Form.Control
                    aria-label="Subject"
                    value={email.from_email}
                    name="from_email"
                    onInput={(e) => {
                      console.log(e.target.value)
                      setEmail((prev) => ({
                        ...prev,
                        from_email: e.target.value,
                      }))
                    }}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup className="mt-2">
                  <InputGroup.Text className="w-25">
                    Subject{"       "}
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Subject"
                    name="subject"
                    value={email.subject}
                    onInput={(e) => {
                      console.log(e.target.value)
                      setEmail((prev) => ({ ...prev, subject: e.target.value }))
                    }}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup className="mt-2">
                  <Form.Control
                    as="textarea"
                    aria-label="text area"
                    name="content"
                    value={email.content}
                    onInput={(e) =>
                      setEmail((prev) => ({ ...prev, content: e.target.value }))
                    }
                  />
                </InputGroup>
              </Row>
              <Row className="mt-2">
                <Button
                  color="primary"
                  disabled={
                    !email.from_email ||
                    !email.from_name ||
                    !email.subject ||
                    !email.content
                  }
                  onClick={() => sendEmail()}
                >
                  Send
                </Button>
              </Row>
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
        <Alert
          dismissible
          show={alert.show}
          variant={alert.variant}
          onClick={() => setAlert({})}
        >
          {alert.message}{" "}
        </Alert>
      </Modal>
    </>
  )
}

export default ContactModal
