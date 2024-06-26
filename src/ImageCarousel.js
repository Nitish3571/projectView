import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import interact from 'interactjs';

const textDefault = ()=>{
  return(
    <h2>Hello World</h2>
  )
}
const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(textDefault);
  const [angle, setAngle] = useState(0);

  
  // useEffect(() => {
  //   const carousel = document.querySelector('.carousel');
  //   interact(carousel).draggable({
  //     listeners: {
  //       move(event) {
  //         console.log(event);
  //         const rotation = angle + event.dx * 0.1;
  //         setAngle(rotation);
  //         carousel.style.transform = `rotate(${rotation}deg)`;
  //       },
  //     },
  //   });
  // }, [angle]);

  const handleMouseOver = (item) => {
    console.log(item);  
    setActiveIndex(item);
    // alert(item.id)
  };

  // const handleMouseLeave = () => {
  //   setActiveIndex(null);
  // };

  return (
    <div className="carousel-container">
        <div className="center a" style={{backgroundColor:'#fff'}}>
          <h2>{activeIndex.data}</h2>

        <div><img width={100} height={100} src={activeIndex.src}/></div>
        </div>
      <div className="carousel">
        
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
            style={{ '--i': index }}
            onMouseMove={() => handleMouseOver(item )}
            onClick={() => alert(item.data)}
          >
            <img src={item.src} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ImageCarousel;
