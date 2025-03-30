import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
import sanChoiLangAmBg from '../assets/images/map lang am/11_SAN_CHOI_LANG_AM.png';
import cardQuyMotGio from '../assets/images/the bai/card_quy_mot_gio.png';
import cardCauCo from '../assets/images/the bai/card_cau_co.png';
import infoCauCo1 from '../assets/images/info_card/cau_co_1.png';
import infoCauCo2 from '../assets/images/info_card/cau_co_2.png';
import infoQuyMotGio1 from '../assets/images/info_card/quy_mot_gio_1.png';
import infoQuyMotGio2 from '../assets/images/info_card/quy_mot_gio_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const SanChoiLangAmOverlay = ({
  onClose,
  onCloseCard,
  isMuted,
  onToggleMute,
  showCardSanChoiLangAm,
  setShowCardSanChoiLangAm,
  showInfoSanChoiLangAm1,
  setShowInfoSanChoiLangAm1,
  isFlipped,
  setIsFlipped
}) => {
  // New states for Cau Co card
  const [showCardCauCo, setShowCardCauCo] = useState(false);
  const [showInfoCauCo1, setShowInfoCauCo1] = useState(false);
  const [isFlippedCauCo, setIsFlippedCauCo] = useState(false);

  // New states for Quy Mot Gio card
  const [showCardQuyMotGio, setShowCardQuyMotGio] = useState(false);
  const [showInfoQuyMotGio1, setShowInfoQuyMotGio1] = useState(false);
  const [isFlippedQuyMotGio, setIsFlippedQuyMotGio] = useState(false);

  // Handler to close Cau Co card and info
  const handleCloseCardCauCo = () => {
    setShowCardCauCo(false);
    setShowInfoCauCo1(false);
    setIsFlippedCauCo(false);
  };

  // Handler to close Quy Mot Gio card and info
  const handleCloseCardQuyMotGio = () => {
    setShowCardQuyMotGio(false);
    setShowInfoQuyMotGio1(false);
    setIsFlippedQuyMotGio(false);
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
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 h-screen w-screen"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={sanChoiLangAmBg} 
        alt="San Choi Lang Am" 
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Hotspots for Cau Co card */}
      <div 
        className="absolute z-[10000] top-[56vh] left-[79vw] w-[20vw] h-[22vh] hover:cursor-pointer rounded-full [transform:perspective(500px)_rotateZ(10deg)]"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />
      <div 
        className="absolute z-[10000] top-[37vh] left-[86vw] w-[12vw] h-[25vh] hover:cursor-pointer rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />

      {/* Hotspots for Quy Mot Gio card */}
      <div 
        className="absolute z-[10000] top-[30vh] left-[50vw] w-[10.5vw] h-[40vh] hover:cursor-pointer rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
        }}
      />
      <div 
        className="absolute z-[10000] top-[46vh] left-[34.5vw] w-[6.75vw] h-[25vh] hover:cursor-pointer rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
        }}
      />
      <div 
        className="absolute z-[10000] top-[65vh] left-[60vw] w-[11vw] h-[28vh] hover:cursor-pointer rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
        }}
      />

      {/* Card Cau Co Overlay */}
      {showCardCauCo && (
        <>
          <LazyImage 
            src={cardCauCo} 
            alt="Card Cau Co"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoCauCo1(true)}
          />
          <button 
            onClick={handleCloseCardCauCo}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoCauCo1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
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

      {/* Card Quy Mot Gio Overlay */}
      {showCardQuyMotGio && (
        <>
          <LazyImage 
            src={cardQuyMotGio} 
            alt="Card Quy Mot Gio"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoQuyMotGio1(true)}
          />
          <button 
            onClick={handleCloseCardQuyMotGio}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoQuyMotGio1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedQuyMotGio(!isFlippedQuyMotGio)}
            >
              <div className={`flip-card ${isFlippedQuyMotGio ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoQuyMotGio1} 
                    alt="Info Quy Mot Gio 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoQuyMotGio2} 
                    alt="Info Quy Mot Gio 2"
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

export default SanChoiLangAmOverlay;
