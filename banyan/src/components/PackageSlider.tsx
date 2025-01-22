import china from '../assets/travel/china.jpg'
import guangzhou from '../assets/travel/guangzhou.jpg'
import kathmandu from '../assets/travel/kathmandu.jpg'
import pokhara from '../assets/travel/pokhara.jpg'
import pattaya from '../assets/travel/pattaya.jpg'  
import { useEffect, useState, useCallback } from 'react'

const PackageSlider = () => {
    const [active, setActive] = useState(3);

    const loadShow = useCallback(() => {
        const items = document.querySelectorAll('.package-slider .item');
        items.forEach((item, index) => {
            const element = item as HTMLElement;
            const stt = index - active;
            if (index === active) {
                element.style.transform = 'translateX(0) scale(1) rotateY(0)';
                element.style.filter = 'blur(0px)';
                element.style.zIndex = '1';
                element.style.opacity = '1';
            } else {
                element.style.transform = `translateX(${stt * 120}px) scale(${1 - Math.abs(stt) * 0.2}) rotateY(${stt * 15}deg)`;
                element.style.zIndex = `${-Math.abs(stt)}`;
                element.style.filter = 'blur(5px)';
                element.style.opacity = Math.abs(stt) > 2 ? '0' : '0.4';
            }
        });
    }, [active]);

    useEffect(() => {
        loadShow();
    }, [active, loadShow]);

    const handleNext = () => {
        setActive(prev => (prev + 1) % 5); // Assuming 5 items
    };

    const handlePrev = () => {
        setActive(prev => (prev - 1 + 5) % 5); // Assuming 5 items
    };

    return (
        <div>
            <div className="package-slider">
                <div className="item">
                    <div className="content">
                        <h3>Guangzhou</h3>
                        <p>Coming Soon</p> 
                    </div>
                    <img src={china} alt="china" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Guangzhou</h3>
                        <p>Coming Soon</p> 
                    </div>
                    <img src={guangzhou} alt="guangzhou" />
                    
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Kathmandu</h3>
                        <p>Coming Soon</p> 
                    </div>
                    <img src={kathmandu} alt="kathmandu" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Pokhara</h3>
                        <p>Coming Soon</p> 
                    </div>
                    <img src={pokhara} alt="pokhara" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Pattaya</h3>
                        <p>Coming Soon</p> 
                    </div>
                    <img src={pattaya} alt="pattaya" />
                </div>
                
                <button id="prev" onClick={handlePrev}>{'<'}</button>
                <button id="next" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    )
}

export default PackageSlider