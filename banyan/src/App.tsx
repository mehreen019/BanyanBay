import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Travel from "./pages/Travel"
import Careers from "./pages/Careers"
import NotFound from "./pages/NotFound"
  
export default function App() {
  return (
    /*<BrowserRouter basename={process.env.PUBLIC_URL}>*/
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BBayTravel" element={<Travel />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </div>
  )
}