import { useState, useRef, MouseEvent as ReactMouseEvent } from 'react';
import malaysia from '../assets/visa/malaysia.jpg';
import singapore from '../assets/visa/singapore.jpg';
import thailand from '../assets/visa/thailand.jpg';
import srilanka from '../assets/visa/sri-lanka.jpg';
import turkey from '../assets/visa/turkey.jpg';
import umrah from '../assets/visa/umrah.jpg';
import hongkong from '../assets/visa/hong-kong.jpg';
import china1 from '../assets/visa/china1.jpg';
import china2 from '../assets/visa/china2.jpg';

const VisaSlider = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const visaItems = [
        { name: 'Malaysia', type: 'E-visa', price: '5500BDT', image: malaysia },
        { name: 'Singapore', type: 'E-visa', price: '6500BDT', image: singapore },
        { name: 'Thailand', type: 'E-visa', price: '9000BDT', image: thailand },
        { name: 'Sri Lanka', type: 'E-visa', price: '5000BDT', image: srilanka },
        { name: 'Turkey', type: 'E-visa', price: '9700BDT', image: turkey },
        { name: 'Umrah', type: 'E-visa', price: '21000BDT', image: umrah },
        { name: 'Hong Kong', type: 'E-visa', price: '11000BDT', image: hongkong },
        { name: 'China', type: 'Business visa', price: '37000BDT', image: china1 },
        { name: 'China', type: 'Tourist visa', price: 'Starting From 9000BDT', image: china2 },
    ];

    const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>): void => {
        if (!sliderRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>): void => {
        if (!isDragging || !sliderRef.current) return;

        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = (): void => {
        setIsDragging(false);
    };

    const handleItemClick = (index: number): void => {
        setSelectedItem(index);
    };

    const selectedBackgroundImage =
        selectedItem !== null ? visaItems[selectedItem].image : singapore;

    const selectedName = selectedItem !== null ? visaItems[selectedItem].name : "";
    const selectedType = selectedItem !== null ? visaItems[selectedItem].type : "";
    const selectedPrice = selectedItem !== null ? `${visaItems[selectedItem].price}` : "";

    return (
        <div
            className="visa-container"
            style={{
                backgroundImage: selectedBackgroundImage
                    ? `url(${selectedBackgroundImage})`
                    : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="visa-title">Our Visa Services</div>
            {selectedItem !== null && (
            <div className="visa-selected-content">
                <div className="name">{selectedName}</div>
                <div className="type">{selectedType}</div>
                <div className="price">{selectedPrice}</div>
            </div>
            )}
            <div
                id="visa-slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {visaItems.map((item, index) => (
                    <div
                        key={`${item.name}-${item.type}`}
                        className={`visa-item ${
                            selectedItem === index ? 'active' : ''
                        }`}
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="visa-content">
                            <div className="name">{item.name}</div>
                            <div className="visa-type">{item.type}</div>
                            <div className="price">Starting from {item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisaSlider;
