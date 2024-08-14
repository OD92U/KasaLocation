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
  const createNext = () => {
    if (images.length===1) {
      return
    }
    else {
      return (
      <button onClick={nextSlide} className="carrouselNext">
      &gt;
      </button>)
    }
  }
  const createPrev = () => {
    if (images.length===1) {
      return
    }
    else {
      return (
      <button onClick={prevSlide} className="carrouselPrev">
      &lt;
      </button>)
    }
  }
  const createCounter = () => {
    if (images.length===1) {
      return
    }
    else {
      return (
        <div className='imageCounter'>{activeIndex+1}/{images.length}</div>
      )
    }
  }

  return (
    <div style={{backgroundImage:`url(${images[activeIndex]})`}} className="carrousel">
      {createPrev()}
      {createCounter()}
      {createNext()}
    </div>
  );
};
export default Carrousel;