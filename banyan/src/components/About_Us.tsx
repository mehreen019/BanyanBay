import React from 'react'
import img4 from '../assets/img4.jpg'

const About_Us = () => {
  return (
    <section id="about-us">
    <div className='AboutUs'>
        <img src={img4} alt="About Us" />
        <div className='content'>
            <div className='heading'>
                <h2>Our Story.</h2>
                <div className='decorative-line'></div>
            </div>
            <p>Lorem ipsum dolor sit onsectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
    </div>
    </section>
  )
}

export default About_Us