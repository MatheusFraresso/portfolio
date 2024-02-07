import React, { useEffect, useRef, useState } from "react"

import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Presentation from "./Sections/Presentation"
import Contact from "./Sections/Contact"
import Experience from "./Sections/Experience"

function Home() {
  const sections = [
    { id: "about", component: <About></About> },
    { id: "experience", component: <Experience></Experience> },
    { id: "projects", component: <Projects></Projects> },
    { id: "contact", component: <Contact></Contact> },
  ]
  function FadeInElement({ children, id }) {
    const domRef = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting))
      })
      observer.observe(domRef.current)
    }, [])
    return (
      <>
        <section ref={domRef} id={id}>
          {children}
        </section>
      </>
    )
  }
  return (
    <>
      <Presentation></Presentation>
      {sections.map((section) => (
        <FadeInElement id={section.id}>{section.component}</FadeInElement>
      ))}
    </>
  )
}
export default Home
