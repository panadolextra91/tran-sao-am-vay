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
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black bg-opacity-50"
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
        className="absolute z-[10000] top-[25vh] left-[92vw] w-[10vw] h-[17.5vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />
      <div 
        className="absolute z-[10000] top-[42vh] left-[74vw] w-[8vw] h-[4.5vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />
      <div 
        className="absolute z-[10000] top-[76vh] left-[10vw] w-[18vw] h-[6vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(-25deg)]"
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDa1(true)}
          />
          <button 
            onClick={handleCloseCardMaDa}
            className="absolute z-[11100] top-[21.5vh] right-[10vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaDa1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
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
