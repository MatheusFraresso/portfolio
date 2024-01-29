import React from "react"
import NavigationBar from "./Components/NavigationBar"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home></Home>,
  },
])

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
