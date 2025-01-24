import VisaSlider from "../components/VisaSlider"
import PackageSlider from "../components/PackageSlider"
import TravelContact from "../components/TravelContact"
import TravelHero from "../components/TravelHero"
import TravelNavBar from "../components/TravelNavbar"

const Travel = () => {
  return (
    <div className="travel-body">
      <TravelNavBar />
      <TravelHero />
      <PackageSlider />
      <VisaSlider />
      <TravelContact />
    </div>
  )
}

export default Travel