import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Travel from "./pages/Travel"


export default function App() {
  return (
    /*<BrowserRouter basename={process.env.PUBLIC_URL}>*/
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BBayTravel" element={<Travel />} />
      </Routes>
    </div>
  )
}