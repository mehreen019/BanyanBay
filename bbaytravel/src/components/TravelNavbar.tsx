import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6"
import bbtlogo from "../assets/bbtlogo.png"

const TravelNavBar = () => {
    return (
      <header>
          <div className="logo-travel">
            <img src={bbtlogo} alt="BanyanBay" />    
          </div>
          <ul className="menu">
              <li> <a className='nav-link' href="https://banyanbayltd.com">Home</a> </li>
              <li className="dropdown">
                <a className='nav-link'>  Services</a>
                <ul className="dropdown-menu">
                    <li>
                        <a className='dropdown-link' href="#packages-area">Packages</a>
                    </li>
                    <li>
                        <a className='dropdown-link' href="#visa-area">Visa</a>
                    </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className='nav-link' href="/Careers">Work With Us</a>
                <ul className="dropdown-menu">
                    <li>
                        <a className='dropdown-link'>Business</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                    <li>
                        <a className='dropdown-link'>Career</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                </ul>
              </li>
              <li> <a className='nav-link' href="#contact-area">Contact</a> </li>
          </ul>

          <div className="social-links">
            <a href="https://www.facebook.com/BBayTravel" target='_blank'>
                <FaFacebook className='text-white' size={28} />
            </a>
            <a href='https://wa.me/+8801335086979' target="_blank">
                <FaWhatsapp size={28} />
            </a>
            <a href="https://www.instagram.com/bbaytravel" target="_blank" >
                <FaInstagram className='text-white' size={28} />
            </a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" target="_blank">
                <FaLinkedin className='text-white' size={28} />
            </a>
          </div>
      </header>
    )
  }
  
  export default TravelNavBar