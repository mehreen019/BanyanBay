import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaWeixin } from 'react-icons/fa';
import bbllogo from '../assets/bbllogo.png';
import { useModal } from '../Provider/ModalProvider.tsx';

const NavBar = () => {

    const { openModal } = useModal();

  return (
    <header>
        <div className="logo">
          <a href="https://banyanbayltd.com">
            <img src={bbllogo} alt="BanyanBay" />
          </a>
        </div>
        <ul className="menu">
            <li> <a className='nav-link' href="https://banyanbayltd.com">Home</a> </li>
            <li className="dropdown">
                <a className='nav-link'>Work With Us</a>
                <ul className="dropdown-menu">
                    <li>
                        <a className='dropdown-link'>Business</a>
                        <span className="coming-soon">coming soon</span>
                    </li>
                    <li>
                        <a href='/Careers' className='dropdown-link'>Career</a>
                    </li>
                </ul>
            </li>
            <li> <a className='nav-link' href="/#contact-area">Contact Us</a> </li>
        </ul>
        <div className="search">
        <div className="social-links">
            <a href="https://www.facebook.com/BanyanBayLtd" target='_blank'>
                <FaFacebook className='text-white' size={`min(28px, 8vw)`} />
            </a>
            <a href='https://wa.me/+8801335086978' target="_blank">
                <FaWhatsapp size={`min(28px, 8vw)`} />
            </a>
            <a href="https://www.instagram.com/banyanbayltd" target="_blank" >
                <FaInstagram className='text-white' size={`min(28px, 8vw)`} />
            </a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" target="_blank">
                <FaLinkedin className='text-white' size={`min(28px, 8vw)`} />
            </a>
            <button onClick={() => openModal('pop-up')}  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'white' }}>
                <FaWeixin className='text-white' size={`min(28px, 8vw)`}/>
            </button>
          </div>
        </div>
    </header>
  )
}

export default NavBar