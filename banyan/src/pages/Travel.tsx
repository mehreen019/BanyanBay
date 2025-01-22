import PackageSlider from "../components/PackageSlider"
import TravelHero from "../components/TravelHero"
import TravelNavBar from "../components/TravelNavbar"

const Travel = () => {
  return (
    <div className="travel-body">
      <TravelNavBar />
      <TravelHero />
      <PackageSlider />
    </div>
  )
}

export default Travel