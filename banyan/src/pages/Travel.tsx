import VisaSlider from "../components/VisaSlider"
import PackageSlider from "../components/PackageSlider"
import Contact from "../components/Contact"
import TravelHero from "../components/TravelHero"
import TravelNavBar from "../components/TravelNavbar"

const Travel = () => {
  return (
    <div className="travel-body">
      <TravelNavBar />
      <TravelHero />
      <PackageSlider />
      <VisaSlider />
      <Contact />
    </div>
  )
}

export default Travel