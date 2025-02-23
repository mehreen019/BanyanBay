import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Careers from "./pages/Careers"
  
export default function App() {
  return (
    /*<BrowserRouter basename={process.env.PUBLIC_URL}>*/
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </div>
  )
}