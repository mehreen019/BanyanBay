import guangzhou from '../assets/travelhero/guangzhou.png'
import pattaya from '../assets/travelhero/pattaya.png'
import bangkok from '../assets/travelhero/bangkok.png'
import pokhara from '../assets/travelhero/pokhara.png'
import kathmandu from '../assets/travelhero/kathmandu.png'
import LazyLoad from 'react-lazyload'

declare module 'react' {
    interface CSSProperties {
        '--i'?: number;
    }
}

const TravelHero = () => {
  return (
    <div className='travel-hero-container'>
    <div id="home" className='travel-hero'>
        <h1>BBay Travel</h1>
        <h2>
            <span style={{ '--i': 1 }}>G</span><span style={{ '--i': 2 }}>e</span><span style={{ '--i': 3 }}>t</span><span style={{ '--i': 4 }}>'</span><span style={{ '--i': 5 }}>s</span><span style={{ '--i': 6 }}> </span>
            <span style={{ '--i': 7 }}>y</span><span style={{ '--i': 8 }}>o</span><span style={{ '--i': 9 }}>u</span><span style={{ '--i': 10 }}> </span><span style={{ '--i': 11 }}>g</span><span style={{ '--i': 12 }}>o</span><span style={{ '--i': 13 }}>i</span><span style={{ '--i': 14 }}>n</span><span style={{ '--i': 15 }}>'</span>
        </h2>
        {/* <img className='travel-hero-globe' src={globe} alt='globe' /> */}
    <div className='thero-images'>
        <div className='item' style={{ '--i': 1 }}>
            <LazyLoad>
                <img src={guangzhou} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 2 }}>
            <LazyLoad>
                <img src={pattaya} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 3 }}>
            <LazyLoad>
                <img src={bangkok} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 4 }}>
                <img src={pokhara} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 5 }}>
                <img src={kathmandu} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 6 }}>
                <img src={guangzhou} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 7 }}>
            <LazyLoad>  
                <img src={pattaya} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 8 }}>
            <LazyLoad>
                <img src={bangkok} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 9 }}>
            <LazyLoad>
                <img src={pokhara} alt='hero-image' />
            </LazyLoad>
        </div>
        <div className='item' style={{ '--i': 10 }}>
            <LazyLoad>
                <img src={kathmandu} alt='hero-image' />
            </LazyLoad>
        </div>
    </div>
    <div className='tscroll'>
                <div>
                    <p>Scroll Down</p>
                    <p>To Discover More</p>
                </div> 
                <div className="tmouse"></div>
    </div>
    </div>
    </div>
  )
}

export default TravelHero