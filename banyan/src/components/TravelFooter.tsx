import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import '../Footer.css';

const TravelFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Banyan Bay Limited</p>
          <p>E-mail: <a href="mailto:banyanbaylimited@gmail.com">banyanbaylimited@gmail.com</a></p>
        </div>

        <div className="social-section">
          <p className="follow-text">FOLLOW US AT</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/BBayTravel" aria-label="Facebook"><Facebook size={24} /></a>
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

export default TravelFooter;