import VisaSlider from "../components/VisaSlider"
import PackageSlider from "../components/PackageSlider"
import TravelHero from "../components/TravelHero"
import TravelNavBar from "../components/TravelNavbar"
import TravelFooter from "../components/TravelFooter"

const Travel = () => {
  return (
    <div className="travel-body">
      <TravelNavBar />
      <TravelHero />
      <PackageSlider />
      <VisaSlider />
      <TravelFooter />
    </div>
  )
}

export default Travel