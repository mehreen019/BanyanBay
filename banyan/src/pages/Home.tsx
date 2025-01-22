import About_Us from '../components/About_Us'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className="wrapper">
      <NavBar />
      <Slider />
      <About_Us />
      <Contact />
    </main>
  )
}

export default Home