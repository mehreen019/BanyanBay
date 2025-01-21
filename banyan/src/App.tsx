import { ImageSlider } from "./ImageSlider"
import { Mail } from 'lucide-react';
import img1 from "./assets/img1.webp"
import img2 from "./assets/img2.avif"
import img3 from "./assets/img3.avif"

const IMAGES = [
  { url: img1, alt: "Car One" },
  { url: img2, alt: "Car Two" },
  { url: img3, alt: "Car Three" },
]

export default function App() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
      <h1>BanyanBay</h1>
      <div
        style={{
          //maxWidth: "1200px",
          width: "100%",
          //height: "50%",
          aspectRatio: "10 / 3",
          margin: "0 auto",
        }}
      >
        <ImageSlider images={IMAGES} />
      </div>
    </main>  
  )
}