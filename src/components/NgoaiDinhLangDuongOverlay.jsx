import React, { useState, Suspense, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import ngoaiDinhLangDuongBg from '../assets/images/map lang duong/3A_DINH_LANG_DUONG_BEN_NGOAI.png';
//Card
import cardThanhHoangLang from '../assets/images/the bai/card_thanh_hoang_lang.png';
//Info
import infoThanhHoangLang1 from '../assets/images/info_card/thanh_hoang_lang_1.png';
import infoThanhHoangLang2 from '../assets/images/info_card/thanh_hoang_lang_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';
// Lazy load TrongDinhLangDuongOverlay
//const TrongDinhLangDuongOverlay = React.lazy(() => import('./TrongDinhLangDuongOverlay'));

const NgoaiDinhLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onShowInside, isActive }) => {
  // State for Thanh Hoang Lang card
  const [showCardThanhHoangLang, setShowCardThanhHoangLang] = useState(false);
  const [showInfoThanhHoangLang1, setShowInfoThanhHoangLang1] = useState(false);
  const [isFlippedThanhHoangLang, setIsFlippedThanhHoangLang] = useState(false);
  // State for showing inside view
  const [showInside, setShowInside] = useState(false);

  // Close handler for Thanh Hoang Lang card
  const handleCloseCardThanhHoangLang = () => {
    setShowCardThanhHoangLang(false);
    setShowInfoThanhHoangLang1(false);
    setIsFlippedThanhHoangLang(false);
  };

  // Handler to close inside view
  const handleCloseInside = () => {
    setShowInside(false);
  };

  // Ref for the container to request fullscreen mode
  const containerRef = useRef(null);

  // Request fullscreen when isActive becomes true (or on mount)
  useEffect(() => {
    if (isActive && containerRef.current) {
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
  }, [isActive]);

  // Also request fullscreen on mount (this may be redundant if isActive is always true when mounting)
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

  // Listen for fullscreen exit (e.g. when ESC is pressed) and close the overlay
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

  const handleShowInside = () => {
    onShowInside();
    setTimeout(() => {
      onClose();
    }, 50);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black h-screen w-screen bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={ngoaiDinhLangDuongBg} 
        alt="Ngoai Dinh Lang Duong Background"
        className="fixed inset-0 w-full h-full object-fit"
      />

      {/* Vào trong Button */}
      <>
        <ul className="vao-trong-button absolute top-[62.5%] left-[57.5%] z-[10000]">
          <li onClick={handleShowInside}>&#x2799;</li>
        </ul>
        <style jsx>{`
          .vao-trong-button li:nth-child(odd) {
            color: white;
            text-align: center;
            font-size: 120px;
            transform: perspective(500px) rotateX(45deg) rotateZ(-90deg);
            text-shadow: 0 0 10px black;
          }
          .vao-trong-button li:nth-child(odd):hover {
            transform: perspective(200px) rotateX(45deg) rotateZ(-90deg) rotateY(10deg);
            cursor: pointer;
            text-shadow: 0 0 10px black;
            font-weight: bold;
            transition: transform 0.3s ease-in-out;
          }
        `}</style>
      </>
      
      {/* Hotspot for Thanh Hoang Lang Card */}
      <div 
        className="absolute z-[10000] top-[41vh] left-[55vw] w-[9.5vw] h-[11vh] hover:cursor-pointer" 
        onClick={(e) => {
          e.stopPropagation();
          setShowCardThanhHoangLang(true);
        }}
      />
    
      {/* Thanh Hoang Lang Card Overlay */}
      {showCardThanhHoangLang && (
        <>
          <LazyImage 
            src={cardThanhHoangLang} 
            alt="Card Thanh Hoang Lang"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoThanhHoangLang1(true)}
          />
          <button 
            onClick={handleCloseCardThanhHoangLang}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoThanhHoangLang1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedThanhHoangLang(!isFlippedThanhHoangLang)}
            >
              <div className={`flip-card ${isFlippedThanhHoangLang ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoThanhHoangLang1} 
                    alt="Info Thanh Hoang Lang 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoThanhHoangLang2} 
                    alt="Info Thanh Hoang Lang 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Inside View Overlay */}
      {showInside && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>}>
          <TrongDinhLangDuongOverlay 
            onClose={handleCloseInside}
            isMuted={isMuted}
            onToggleMute={onToggleMute}
          />
        </Suspense>
      )}
    </div>
  );
};

export default NgoaiDinhLangDuongOverlay;
