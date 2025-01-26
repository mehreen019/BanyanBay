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

    const handleNext = () => {
        const lists = document.querySelectorAll('.visa-item');
        const visaSlider = document.getElementById('visa-slider');
        if (visaSlider && lists.length > 0) {
            visaSlider.appendChild(lists[0]);
        }
    }

    const handlePrev = () => {
        const lists = document.querySelectorAll('.visa-item');
        const visaSlider = document.getElementById('visa-slider');
        if (visaSlider && lists.length > 0) {
            visaSlider.insertBefore(lists[lists.length - 1], lists[0]);
        }
    }
    
  return (
    <div className="visa-container">
        <div className="visa-title">Our Visa Services</div>
        <div id="visa-slider">
            <div className="visa-item" style={{backgroundImage: `url(${malaysia})`}}>
                <div className="visa-content">
                    <div className="name">Malaysia</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${singapore})`}}>
                <div className="visa-content">
                    <div className="name">Singapore</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${thailand})`}}>
                <div className="visa-content">
                    <div className="name">Thailand</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${srilanka})`}}>
                <div className="visa-content">
                    <div className="name">Sri Lanka</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${turkey})`}}>
                <div className="visa-content">
                    <div className="name">Turkey</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${umrah})`}}>
                <div className="visa-content">
                    <div className="name">Umrah</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${hongkong})`}}>
                <div className="visa-content">
                    <div className="name">Hong Kong</div>
                    <div className="visa-type">E-visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${china1})`}}>
                <div className="visa-content">
                    <div className="name">China</div>
                    <div className="visa-type">Business visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
            <div className="visa-item" style={{backgroundImage: `url(${china2})`}}>
                <div className="visa-content">
                    <div className="name">China</div>
                    <div className="visa-type">Tourist visa</div>
                    <div className="price">Starting from 3000BDT</div>
                </div>
            </div>
        </div>
        <div className='visa-buttons'>
            <button className='prev' onClick={handlePrev}>
                {'<'}
            </button>
            <button className='next' onClick={handleNext}>
                {'>'}
            </button>
        </div>
    </div>
  )
}

export default VisaSlider