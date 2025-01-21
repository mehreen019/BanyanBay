import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import React, { useState, useEffect } from 'react'


const IMAGES = [
    { url: img1, alt: "Slider One", headertxt: "Banyan Bay", btntxt: "Learn More" },
    { url: img2, alt: "Slider Two", headertxt: "Our Story", btntxt: "Learn More" },
    { url: img3, alt: "Slider Three", headertxt: "Bbay Travels", btntxt: "Go to Website" },
  ]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= IMAGES.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 seconds

        return () => clearInterval(timer); // Cleanup on unmount
    }, [currentIndex]); // Reset timer when currentIndex changes

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= IMAGES.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? IMAGES.length - 1 : prev - 1));
    };
    
    return (
        <section id="home">
        <div className='slider'>
            <div className='list'>
                {IMAGES.map((image, index) => (
                    <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image.url} alt={image.alt} />
                        <div className='content'>
                            <p>design</p>
                            <h2>{image.headertxt}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            <button>{image.btntxt}</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='arrows'>
                <button className='prev' onClick={handlePrev} >{'<'}</button>
                <button className='next' onClick={handleNext}>{'>'}</button>
            </div>

            <div className='scroll'>
                <div>
                    <p>Scroll Down</p>
                    <p>To Discover More</p>
                </div> 
                <div className="mouse"></div>
            </div>
        </div>
        </section>
    );
};

export default Slider