import { useEffect, useState, useCallback, useRef } from 'react'
import china from '../assets/travel/china.jpg'
import guangzhou from '../assets/travel/guangzhou.jpg'
import kathmandu from '../assets/travel/kathmandu.jpg'
import pokhara from '../assets/travel/pokhara.jpg'
import pattaya from '../assets/travel/pattaya.jpg'

const PackageSlider = () => {
    const [active, setActive] = useState(2);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const dragThreshold = 50; // Minimum drag distance to trigger slide change

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
                element.style.transform = `translateX(${stt * 180}px) scale(${1 - Math.abs(stt) * 0.2}) rotateY(${stt * 15}deg)`;
                element.style.zIndex = `${-Math.abs(stt)}`;
                element.style.filter = 'blur(5px)';
                element.style.opacity = Math.abs(stt) > 2 ? '0' : '0.6';
            }
        });
    }, [active]);

    useEffect(() => {
        loadShow();
    }, [active, loadShow]);

    const handleNext = () => {
        setActive(prev => (prev + 1) % 5);
    };

    const handlePrev = () => {
        setActive(prev => (prev - 1 + 5) % 5);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(0);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (Math.abs(scrollLeft) > dragThreshold) {
            if (scrollLeft > 0) {
                handlePrev();
            } else {
                handleNext();
            }
        }
    };

    const handleTouchEnd = handleMouseUp;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = x - startX;
        setScrollLeft(walk);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = x - startX;
        setScrollLeft(walk);
    };

    return (
        <div id="packages-area">
            <div 
                className="package-slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
            >
                <div className='package-slider-header'>
                    <h2>Featured Packages</h2>
                    <p>Explore our most popular destinations and start planning your next adventure.</p>    
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Guangzhou</h3>
                        <p>3D 1N</p>
                        <p>Kathmandu Valley Tour</p>
                    </div>
                    <img src={china} alt="china" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Guangzhou</h3>
                        <p>3D 1N</p>
                        <p>Kathmandu Valley Tour</p>
                    </div>
                    <img src={guangzhou} alt="guangzhou" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Kathmandu</h3>
                        <p>3D 1N</p>
                        <p>Kathmandu Valley Tour</p>
                    </div>
                    <img src={kathmandu} alt="kathmandu" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Pokhara</h3>
                        <p>3D 1N</p>
                        <p>Kathmandu Valley Tour</p>
                    </div>
                    <img src={pokhara} alt="pokhara" />
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Pattaya</h3>
                        <p>3D 1N</p>
                        <p>Kathmandu Valley Tour</p>
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