import React from "react"

function Presentation() {
  return (
    <>
      <section>
        <h1 id="hello">Hello! My name is </h1>
        <h2 id="name">Matheus Fraresso</h2>
        <h3 id="subtitle">And I love to solve problems!</h3>
      </section>
      <section id="presentation-paragraph">
        <ul>
          <li>
            {" "}
            <p>
              I am a brazillian software developer with a passion for solving
              problems and optimizing solutions
            </p>
          </li>
          <li>
            {" "}
            <p>
              Currently working as a freelance developer building mainly React
              applications
            </p>
          </li>
          <li>
            {" "}
            <p>
              When I'm not coding, I like to explore the outdoors and read
              fantasy.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
export default Presentation
