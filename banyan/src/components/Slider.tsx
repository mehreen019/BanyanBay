import img1 from "../assets/apuimg1.jpg"
import img3 from "../assets/img3.jpg"
import { useState, useEffect } from 'react'


const IMAGES = [
    { url: img1, alt: "Slider One", headertxt: "Banyan Bay", btntxt: "Learn More", description: "Banyan Bay Limited is a women-led initiative, championing inclusivity and eco-friendly solutions to shape a better world. Our dynamic team is a mosaic of individuals, united by their unique talents—regardless of age, gender, race, social status or ability. We are setting our sights on a global stage - prioritizing productivity and groundbreaking innovation over traditional norms. Join us in redefining success and building a brighter, more inclusive future. Together,we grow.", theme: "dark" },
    /*{ url: img2, alt: "Slider Two", headertxt: "Our Story", btntxt: "Learn More" },*/
    { url: img3, alt: "Slider Three", headertxt: "BBay Travel", btntxt: "Go to Website", description: "Get exclusive travel deals from BBay Travel. We are offering travel packages, visa processing, hotel booking,  ticketing, transport and relevant services.", theme: "light" },
  ]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= IMAGES.length - 1 ? 0 : prev + 1));
        }, 8000); // 5 seconds

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
                    <div 
                        key={index} 
                        className={`item ${index === currentIndex ? 'active' : ''} ${image.theme}`}
                    >
                        <img src={image.url} alt={image.alt} />
                        <div className='content'>
                            <p></p>
                            <h2>{image.headertxt}</h2>
                            <p>{image.description}</p>
                            { index === 1 && <button onClick={() => window.location.href = 'https://bbaytravel.banyanbayltd.com/'}>{image.btntxt}</button>}
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