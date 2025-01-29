import React from 'react';
import {  Facebook, Linkedin, Instagram } from 'lucide-react';
import { PiWhatsappLogo } from "react-icons/pi";
import '../Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact-area">
      <div className="footer-content">
        <div className="contact-info">
          <p>Banyan Bay Limited</p>
          <p>E-mail: <a href="mailto:contact@banyanbayltd.com">contact@banyanbayltd.com</a></p>
          <p>Hotline: <a href="tel:+8801335086978">+8801335086978</a></p>
        </div>

        <div className="social-section">
          <p className="follow-text">FOLLOW US AT</p>
          <div className="social-icons">
            <a href='https://wa.me/+8801335086978' aria-label="Whatsapp" className='whatsapp-icon'><PiWhatsappLogo size={60} /></a>
            <a href="https://www.facebook.com/BanyanBayLtd" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="https://www.linkedin.com/company/banyan-bay-ltd/" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://www.instagram.com/banyanbayltd" aria-label="Instagram"><Instagram size={24} /></a>

          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Banyan Bay Limited  © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;