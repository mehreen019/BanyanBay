import About_Us from "./components/About_Us"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Slider from "./components/Slider"
  

export default function App() {
  return (
    <main className="wrapper">
      <NavBar />
      <Slider />
      <About_Us />
      <Contact />
    </main>
  )
}