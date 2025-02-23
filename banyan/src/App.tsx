import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Careers from "./pages/Careers"
import CareerDescription from "./pages/CareerDescription"
  
export default function App() {
  return (
    /*<BrowserRouter basename={process.env.PUBLIC_URL}>*/
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Careers/:title" element={<CareerDescription />} />
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </div>
  )
}