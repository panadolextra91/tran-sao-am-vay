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
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black bg-opacity-50"
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
        className="absolute z-[10000] top-[67vh] left-[34vw] w-[72.5vw] h-[37.5vh] hover:cursor-pointer [transform:perspective(500px)_rotateZ(-15deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaDa1) {
            setShowCardNamCheo(true);
          }
        }}
      />

      {/* Hotspot for Ma Da card 1 */}
      <div 
        className="absolute z-[10000] top-[40vh] left-[0vw] w-[3.75vw] h-[10vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardNamCheo) {
            setShowCardMaDa1(true);
          }
        }}
      />

      {/* Hotspot for Ma Da card 2 */}
      <div 
        className="absolute z-[10000] top-[22vh] left-[90vw] w-[6.25vw] h-[15vh] hover:cursor-pointer"
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoNamCheo1(true)}
          />
          <button 
            onClick={onCloseCard}
            className="absolute z-[11100] top-[22vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoNamCheo1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDa1(true)}
          />
          <button 
            onClick={handleCloseCardMaDa}
            className="absolute z-[11100] top-[21.75vh] right-[10vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
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

export default GanhHatMaOverlay;
