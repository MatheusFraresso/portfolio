import React from "react"
import info from "../../info.json"
function Presentation() {
  return (
    <>
      <section>
        <h1 id="hello">{info.greetings} </h1>
        <h2 id="name">{info.name}</h2>
        <h3 id="subtitle">{info.subtitle}</h3>
      </section>
      <section id="presentation-paragraph">
        <ul>
          {info.presentation.map((paragraph) => (
            <li>
              <p>{paragraph}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
export default Presentation
