import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
    <section id="contact-area">
      <div className="Contact">
        <div className="content">
          <div className="heading">
            <h2>Contact Us</h2>
            <div className="decorative-line"></div>
          </div>
          <p>
            Let's connect! You can find us on any of these platforms.
          </p>
          <p>
            Email: banyanbaylimited@gmail.com
          </p>
          <div className="social-links">
            <a href="mailto:banyanbaylimited@gmail.com">
                <FaEnvelope className='text-white' size={28} />
            </a>
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
      </div>
      </section>
    );
  };
  
  export default Contact;