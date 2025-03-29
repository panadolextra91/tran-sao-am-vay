import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import sanChoiLangDuongBg from '../assets/images/map lang duong/6_SAN_CHOI_LANG_DUONG.png';
//Card
import cardCauCo from '../assets/images/the bai/card_cau_co.png';
//Info
import infoCauCo1 from '../assets/images/info_card/cau_co_1.png';
import infoCauCo2 from '../assets/images/info_card/cau_co_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const SanChoiLangDuongOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Cau Co card
  const [showCardCauCo, setShowCardCauCo] = useState(false);
  const [showInfoCauCo1, setShowInfoCauCo1] = useState(false);
  const [isFlippedCauCo, setIsFlippedCauCo] = useState(false);

  // Close handler for Cau Co card
  const handleCloseCardCauCo = () => {
    setShowCardCauCo(false);
    setShowInfoCauCo1(false);
    setIsFlippedCauCo(false);
  };

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
      <LazyImage 
        src={sanChoiLangDuongBg} 
        alt="San Choi Lang Duong Background" 
        className="fixed inset-0 w-full h-[100%] object-fit"
      />
      
      {/* Hotspot for Cau Co card */}
      <div 
        className="absolute top-[51%] left-[4%] w-60 h-60 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />

      {/* Cau Co Card Overlay */}
      {showCardCauCo && (
        <>
          <LazyImage 
            src={cardCauCo} 
            alt="Card Cau Co"
            className="absolute w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoCauCo1(true)}
          />
          <button 
            onClick={handleCloseCardCauCo}
            className="absolute top-[20%] right-[10%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoCauCo1 && (
            <div 
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedCauCo(!isFlippedCauCo)}
            >
              <div className={`flip-card ${isFlippedCauCo ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoCauCo1} 
                    alt="Info Cau Co 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoCauCo2} 
                    alt="Info Cau Co 2"
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

export default SanChoiLangDuongOverlay;