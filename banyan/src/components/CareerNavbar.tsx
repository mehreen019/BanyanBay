import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import bbllogo from "../assets/bbllogo.png"

const CareerNavBar = () => {
    return (
      <header>
          <div className="logo">
            <img src={bbllogo} alt="BanyanBay" />    
          </div>
          <ul className="menu">
              <li> <a className='nav-link' href="/">Home</a> </li>
              <li> <a className='nav-link' href="/BbayTravel">Travel</a> </li>
              <li className="dropdown">
                <a className='nav-link' href="#about-us">Work With Us</a>
                <ul className="dropdown-menu">
                    <li>
                        <a className='dropdown-link'>Business</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                    <li>
                        <a className='dropdown-link' href="/Careers">Vacancies</a>
                    </li>
                </ul>
              </li>
          </ul>

          <div className="social-links">
            <a href="https://www.facebook.com/BBayTravel" target='_blank'>
                <FaFacebook className='text-white' size={28} />
            </a>
            <a href="https://www.instagram.com/banyanbayltd" target="_blank" >
                <FaInstagram className='text-white' size={28} />
            </a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" target="_blank">
                <FaLinkedin className='text-white' size={28} />
            </a>
          </div>
      </header>
    )
  }
  
  export default CareerNavBar