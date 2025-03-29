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
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={sanChoiLangAmBg} 
        alt="San Choi Lang Am" 
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspots for Cau Co card */}
      <div 
        className="absolute top-[56%] [transform:perspective(500px)_rotateZ(10deg)] left-[82%] rounded-full w-80 h-50 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />
      <div 
        className="absolute top-[37%] left-[89%] rounded-full h-80 w-50 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />

      {/* Hotspots for Quy Mot Gio card */}
      <div 
        className="absolute rounded-full top-[30%] left-[50%] w-42 h-100 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
        }}
      />
      <div 
        className="absolute rounded-full top-[46%] left-[33%] w-27 h-80 hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
        }}
      />
      <div 
        className="absolute rounded-full top-[65%] left-[61%] w-50 h-70 hover:cursor-pointer"
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

      {/* Card Quy Mot Gio Overlay */}
      {showCardQuyMotGio && (
        <>
          <LazyImage 
            src={cardQuyMotGio} 
            alt="Card Quy Mot Gio"
            className="absolute w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoQuyMotGio1(true)}
          />
          <button 
            onClick={handleCloseCardQuyMotGio}
            className="absolute top-[20%] right-[10%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoQuyMotGio1 && (
            <div 
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
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
