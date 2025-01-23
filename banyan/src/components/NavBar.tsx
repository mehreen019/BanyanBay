import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <header>
        <div className="logo">
          <img src={logo} alt="BanyanBay" />
        </div>
        <ul className="menu">
            <li> <a className='nav-link' href="#home">Home</a> </li>
            <li className="dropdown">
                <a className='nav-link' href="#about-us">Work with us</a>
                <ul className="dropdown-menu">
                    <li>
                        <a className='nav-link'>Business</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                    <li>
                        <a className='nav-link'>Vacancies</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                </ul>
            </li>
            <li> <a className='nav-link' href="#contact-area">Contact</a> </li>
        </ul>
        <div className="search">
        <div className="social-links">
            <a href="https://www.facebook.com/BanyanBayLtd" target='_blank'>
                <FaFacebook className='text-white' size={28} />
            </a>
            <a href="https://www.instagram.com/banyanbayltd" target="_blank" >
                <FaInstagram className='text-white' size={28} />
            </a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" target="_blank">
                <FaLinkedin className='text-white' size={28} />
            </a>
          </div>
        </div>
    </header>
  )
}

export default NavBar