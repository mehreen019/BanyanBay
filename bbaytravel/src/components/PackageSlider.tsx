import { useCallback, useRef } from 'react'
import china from '../assets/travel/china.jpg'
import bangkok from '../assets/travel/bangkok.jpg'
import kathmandu from '../assets/travel/kathmandu.jpg'
import pokhara from '../assets/travel/pokhara.jpg'
import pattaya from '../assets/travel/pattaya.jpg'
import LazyLoad from 'react-lazyload'

import React, { useEffect, useState } from 'react';


const PackageSlider = () => {
    const [active, setActive] = useState(2);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const dragThreshold = 50; // Minimum drag distance to trigger slide change

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to determine the multiplier based on screen width
    const getTranslateMultiplier = () => {
        if (windowWidth >= 1200) return 180;
        if (windowWidth >= 768) return 140;
        return 90;
    };

    const translateMultiplier = getTranslateMultiplier();


    const loadShow = useCallback(() => {
        const items = document.querySelectorAll('.package-slider .item');

        const maxVisibleOffset = windowWidth < 468 ? 1 : 2;
        
        items.forEach((item, index) => {
            const element = item as HTMLElement;
            const stt = index - active;
            if (index === active) {
                element.style.transform = 'translateX(0) scale(1) rotateY(0)';
                element.style.filter = 'blur(0px)';
                element.style.zIndex = '1';
                element.style.opacity = '1';
            } else {
                element.style.transform = `translateX(${stt * translateMultiplier}px) scale(${1 - Math.abs(stt) * 0.2}) rotateY(${stt * 15}deg)`;
                element.style.zIndex = `${-Math.abs(stt)}`;
                element.style.filter = 'blur(5px)';
                if (windowWidth < 468) {
                    element.style.opacity = Math.abs(stt) > maxVisibleOffset ? '0' : '0.6';
                } else {
                    element.style.opacity = Math.abs(stt) > maxVisibleOffset ? '0' : '0.6';
                }
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
                        <h3>China</h3>
                        <p>Guangzhou (Canton fair)</p>
                        <p>9D8N Business Trip</p>
                    </div>
                    <LazyLoad>
                        <img src={china} alt="china" />
                    </LazyLoad>
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Thailand</h3>
                        <p>Package 01</p>
                        <p>Bangkok - Pattaya </p>
                        <p>5D4N</p>
                    </div>
                    <LazyLoad>
                        <img src={bangkok} alt="bangkok" />
                    </LazyLoad>
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Nepal</h3>
                        <p>Package 01</p>
                        <p>Nagarkot & Kathmandu </p>
                        <p>4D3N</p>
                    </div>
                    <LazyLoad>
                        <img src={kathmandu} alt="kathmandu" />
                    </LazyLoad>
                </div>
                <div className="item">
                    <div className="content">
                        <h3>Nepal</h3>
                        <p>Package 02</p>
                        <p>Nagarkot, Kathmandu & Pokhara</p>
                        <p>5D4N</p>
                    </div>
                    <LazyLoad>
                        <img src={pokhara} alt="pokhara" />
                    </LazyLoad>
                </div>
                <div className="item">
                    <div className="content">
                    <h3>Thailand</h3>
                        <p>Package 02</p>
                        <p>Pattaya </p>
                        <p>4D3N</p>
                    </div>
                    <LazyLoad>
                        <img src={pattaya} alt="pattaya" />
                    </LazyLoad>
                </div>
                
                <button id="prev" onClick={handlePrev}>{'<'}</button>
                <button id="next" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    )
}

export default PackageSlider