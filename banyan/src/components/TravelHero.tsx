import guangzhou from '../assets/travelhero/guangzhou.png'
import pattaya from '../assets/travelhero/pattaya.png'
import bangkok from '../assets/travelhero/bangkok.png'
import pokhara from '../assets/travelhero/pokhara.png'
import kathmandu from '../assets/travelhero/kathmandu.png'

declare module 'react' {
    interface CSSProperties {
        '--i'?: number;
    }
}

const TravelHero = () => {
  return (
    <div id="home" className='travel-hero'>
        <h1>BBay Travel</h1>
        <h2>Gets you goin'</h2>
        {/* <img className='travel-hero-globe' src={globe} alt='globe' /> */}
    <div className='thero-images'>
        <div className='item' style={{ '--i': 1 }}>
            <img src={guangzhou} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 2 }}>
            <img src={pattaya} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 3 }}>
            <img src={bangkok} alt='hero-image' />
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
            <img src={pattaya} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 8 }}>
            <img src={bangkok} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 9 }}>
            <img src={pokhara} alt='hero-image' />
        </div>
        <div className='item' style={{ '--i': 10 }}>
            <img src={kathmandu} alt='hero-image' />
        </div>
    </div>
    </div>
  )
}

export default TravelHero