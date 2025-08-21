import React, { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6
];


const SlidePanel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Auto-slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 8000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
    return (
      <div className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-elegant">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
  
        {/* Optional indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default SlidePanel;