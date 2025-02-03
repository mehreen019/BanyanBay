import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import bbllogo from '../assets/bbllogo.png';

const NavBar = () => {
  return (
    <header>
        <div className="logo">
          <img src={bbllogo} alt="BanyanBay" />
        </div>
        <ul className="menu">
            <li> <a className='nav-link' href="#home">Home</a> </li>
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
            <li> <a className='nav-link' href="#contact-area">Contact Us</a> </li>
        </ul>
        <div className="search">
        <div className="social-links">
            <a href="https://www.facebook.com/BanyanBayLtd" target='_blank'>
                <FaFacebook className='text-white' size={28} />
            </a>
            <a href='https://wa.me/+8801335086978' target="_blank">
                <FaWhatsapp size={28} />
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