import React from "react"
import NavigationBar from "./Components/NavigationBar"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home></Home>,
  },
])

function App() {
  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
