import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Travel from "./pages/Travel"
import NotFound from "./pages/NotFound"
  
export default function App() {
  return (
    /*<BrowserRouter basename={process.env.PUBLIC_URL}>*/
    <div>
      <Routes>
        <Route path="/" element={<Travel />} />
        <Route path="*" element={<NotFound />} />   
      </Routes>
    </div>
  )
}