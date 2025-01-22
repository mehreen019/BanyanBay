import { FaEnvelope, FaLinkedin } from "react-icons/fa6"

import { FaInstagram } from "react-icons/fa6"

import { FaFacebook } from "react-icons/fa6"

const TravelContact = () => {
  return (
    <div id="contact-area" className="travel-contact">
       <div className="content">
           <div className="heading">
               <h2>Contact Us</h2>
           </div>
           <p>Ready to start your journey? Get in touch with us for personalized travel planning and expert advice.</p>
            <div className="social-links">
            <a href="mailto:travel@example.com">
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
  )
}

export default TravelContact