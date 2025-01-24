import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Contact from '../components/Contact'
import Vacancies from '../components/Vacancies'

const Home = () => {
  return (
    <main className="wrapper">
      <NavBar />
      <Slider />
      <Vacancies />
      <Contact />
    </main>
  )
}

export default Home