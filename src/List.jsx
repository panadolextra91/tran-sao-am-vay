import React, { useState } from 'react';
import TopBarWhite from './components/TopBarWhite';
import img1 from './assets/images/cho.png';
import img2 from './assets/images/quy.png';
import img3 from './assets/images/quy.png';
import img4 from './assets/images/cho.png';
import img5 from './assets/images/ongke.png';
import img6 from './assets/images/quy.png';

import textImg1 from './assets/images/text.png';
import textImg2 from './assets/images/text2.png';
import textImg3 from './assets/images/text.png';
import textImg4 from './assets/images/text2.png';
import textImg5 from './assets/images/text.png';
import textImg6 from './assets/images/text2.png';

const images = [img1, img2, img3, img4, img5, img6];
const textImages = [textImg1, textImg2, textImg3, textImg4, textImg5, textImg6];

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div 
    className="flip-container w-[600px] h-[480px] cursor-pointer "
    onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card ${flipped ? 'flipped' : ''} w-full h-full`}>
        <div className="flip-card-front absolute inset-0">
          <img 
            src={front} 
            alt="Front" 
            className="w-full h-full object-fit" 
          />
        </div>
        <div className="flip-card-back absolute inset-0">
          <img 
            src={back} 
            alt="Back" 
            className="w-full h-full object-fit" 
          />
        </div>
      </div>
    </div>
  );
};

const List = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative">
      {/* Fixed TopBarWhite at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>
      
      {/* Background with custom-red color */}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen flex flex-col items-center pt-[100px]">
        <div className="relative w-full max-w-6xl">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            disabled={startIndex === 0}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl px-4 disabled:opacity-50"
          >
            &#8592;
          </button>
          
          {/* Image Carousel */}
          <div className="flex justify-center space-x-5">
            {visibleImages.map((src, index) => {
              const globalIndex = startIndex + index;
              return (
                <FlipCard 
                  key={globalIndex}
                  front={src}
                  back={textImages[globalIndex]}
                />
              );
            })}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={handleNext} 
            disabled={startIndex + visibleCount >= images.length}
            className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 z-30 text-white text-3xl px-4 disabled:opacity-50"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
