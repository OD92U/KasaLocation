import React, { useState } from 'react'
import '../../styles/Carrousel.css'


const Carrousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div style={{backgroundImage:`url(${images[activeIndex]})`}} className="carrousel">
      <button onClick={prevSlide} className="carrouselPrev">
        &lt;
      </button>
      
      <button onClick={nextSlide} className="carrouselNext">
        &gt;
      </button>
    </div>
  );
};
export default Carrousel;