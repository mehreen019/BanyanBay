import { FaEnvelope } from "react-icons/fa6"

const TravelNavBar = () => {
    return (
      <header>
          <div className="logo">BBayTravel</div>
          <ul className="menu">
              <li> <a className='nav-link' href="#home">Home</a> </li>
              <li> <a className='nav-link' href="#packages-area">Packages</a> </li>
              <li> <a className='nav-link' href="#contact-area">Contact</a> </li>
          </ul>
          <div className="social-links">
              <a href="mailto:banyanbaylimited@gmail.com">
                <FaEnvelope className='text-white' size={28} />
              </a>
          </div>
      </header>
    )
  }
  
  export default TravelNavBar