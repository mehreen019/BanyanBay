import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import '../Footer.css';
import { PiWhatsappLogo } from 'react-icons/pi';

const TravelFooter: React.FC = () => {
  return (
    <footer className="footer" id="contact-area">
      <div className="footer-content">
        <div className="contact-info">
          <p>BBay Travel</p>
          <p>E-mail: <a href="mailto:contact@banyanbayltd.com">contact@banyanbayltd.com</a></p>
          <p>Hotline: <a href="tel:+8801335086979">+88 01335 086 979</a></p>
        </div>

        <div className="social-section">
          <p className="follow-text">FOLLOW US AT</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/BBayTravel" aria-label="Facebook"  target='blank'><Facebook size={24} /></a>
            <a href='https://wa.me/+8801335086979' aria-label="Whatsapp" className='whatsapp-icon' target='blank'><PiWhatsappLogo size={60} /></a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" aria-label="LinkedIn"  target='blank'><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/bbaytravel" aria-label="Instagram"  target='blank'><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Banyan Bay Limited  © 2025</p>
      </div>
    </footer>
  );
};

export default TravelFooter;