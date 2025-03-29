import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
import ganhHatMaBg from '../assets/images/map lang am/13_GANH_HAT_MA.png';
import cardNamCheo from '../assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png';
import infoNamCheo1 from '../assets/images/info_card/ong_nam_cheo_1_test.png';
import infoNamCheo2 from '../assets/images/info_card/ong_nam_cheo_2.png';
import cardMaDa from '../assets/images/the bai/card_ma_da.png';
import infoMaDa1 from '../assets/images/info_card/ma_da_1.png';
import infoMaDa2 from '../assets/images/info_card/ma_da_2.png';
import closeButton from '../assets/images/dau_x.png';
const GanhHatMaOverlay = ({
  onClose,
  onCloseCard,
  isMuted,
  onToggleMute,
  showCardNamCheo,
  setShowCardNamCheo,
  showInfoNamCheo1,
  setShowInfoNamCheo1,
  isFlipped,
  setIsFlipped
}) => {
  // New states for Ma Da card
  const [showCardMaDa1, setShowCardMaDa1] = useState(false);
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

  // Handler to close Ma Da card and info
  const handleCloseCardMaDa = () => {
    setShowCardMaDa1(false);
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
        src={ganhHatMaBg} 
        alt="Ganh Hat Ma" 
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Hotspot for Nam Cheo card */}
      <div 
        className="absolute top-[67%] left-[34%] w-290 h-150 hover:cursor-pointer [transform:perspective(500px)_rotateZ(-15deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaDa1) {
            setShowCardNamCheo(true);
          }
        }}
      />

      {/* Hotspot for Ma Da card 1 */}
      <div 
        className="absolute top-[40%] left-[0%] w-15 h-20 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardNamCheo) {
            setShowCardMaDa1(true);
          }
        }}
      />

      {/* Hotspot for Ma Da card 2 */}
      <div 
        className="absolute top-[22%] left-[90%] w-25 h-38 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardNamCheo) {
            setShowCardMaDa1(true);
          }
        }}
      />

      {/* Card Nam Cheo Overlay */}
      {showCardNamCheo && (
        <>
          <LazyImage 
            src={cardNamCheo} 
            alt="Card Nam Cheo"
            className="absolute w-[90%] left-[31%] h-full object-contain !cursor-pointer !opacity-90"
            onClick={() => setShowInfoNamCheo1(true)}
          />
          <button 
            onClick={onCloseCard}
            className="absolute top-[20.5%] right-[10.5%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoNamCheo1 && (
            <div 
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`flip-card ${isFlipped ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoNamCheo1} 
                    alt="Info Nam Cheo 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoNamCheo2} 
                    alt="Info Nam Cheo 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Card Ma Da Overlay */}
      {showCardMaDa1 && (
        <>
          <LazyImage 
            src={cardMaDa} 
            alt="Card Ma Da"
            className="absolute w-[90%] left-[31%] h-full object-contain !cursor-pointer !opacity-90"
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

export default GanhHatMaOverlay;
