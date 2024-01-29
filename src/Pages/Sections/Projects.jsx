import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Projects() {
  return (
    <div className="caroussel-wrapper">
      <h3>Check some of the personal projects I'm proud of </h3>
      <hr></hr>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="carousel-content"></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content"></div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Projects
