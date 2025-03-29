import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
// Background image
import cauKhiBg from '../assets/images/map lang am/7_CAU_KHI.png';
// Card image
import cardMaDa from '../assets/images/the bai/card_ma_da.png';
// Info images
import infoMaDa1 from '../assets/images/info_card/ma_da_1.png';
import infoMaDa2 from '../assets/images/info_card/ma_da_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const CauKhiOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Ma Da card
  const [showCardMaDa, setShowCardMaDa] = useState(false);
  const [showInfoMaDa1, setShowInfoMaDa1] = useState(false);
  const [isFlippedMaDa, setIsFlippedMaDa] = useState(false);

  // Ref for the container to request fullscreen mode
  const containerRef = useRef(null);

  // Request fullscreen on mount
  useEffect(() => {
    if (containerRef.current) {
      const requestFullscreen =
        containerRef.current.requestFullscreen ||
        containerRef.current.webkitRequestFullscreen ||
        containerRef.current.msRequestFullscreen;
      
      if (requestFullscreen) {
        requestFullscreen.call(containerRef.current).catch((err) => {
          console.error('Error attempting to enable fullscreen mode:', err);
        });
      }
    }
  }, []);

  // Listen for fullscreen exit (e.g., when ESC is pressed) and close the overlay
  useEffect(() => {
    const handleFullscreenExit = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        onClose();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenExit);
    document.addEventListener('webkitfullscreenchange', handleFullscreenExit);
    document.addEventListener('msfullscreenchange', handleFullscreenExit);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenExit);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenExit);
      document.removeEventListener('msfullscreenchange', handleFullscreenExit);
    };
  }, [onClose]);

  // Close handler for Ma Da card
  const handleCloseCardMaDa = () => {
    setShowCardMaDa(false);
    setShowInfoMaDa1(false);
    setIsFlippedMaDa(false);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Background image covering full screen */}
      <LazyImage 
        src={cauKhiBg} 
        alt="Cau Khi Background" 
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Hotspots for Ma Da card */}
      <div 
        className="absolute top-[25%] left-[92%] w-30 h-44 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />
      <div 
        className="absolute top-[42%] left-[74%] w-30 h-10 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />
      <div 
        className="absolute top-[76%] left-[10%] w-60 h-10 hover:cursor-pointer [transform:perspective(500px)_rotateZ(-25deg)]"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />

      {/* Ma Da Card Overlay */}
      {showCardMaDa && (
        <>
          <LazyImage 
            src={cardMaDa} 
            alt="Card Ma Da"
            className="absolute w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDa1(true)}
          />
          <button 
            onClick={handleCloseCardMaDa}
            className="absolute top-[20.5%] right-[9%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaDa1 && (
            <div 
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaDa(!isFlippedMaDa)}
            >
              <div className={`flip-card ${isFlippedMaDa ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaDa1} 
                    alt="Info Ma Da 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaDa2} 
                    alt="Info Ma Da 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CauKhiOverlay;
