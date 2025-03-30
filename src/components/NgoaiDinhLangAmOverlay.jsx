import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import ngoaiDinhLangAmBg from '../assets/images/map lang am/9A_DINH_LANG_AM.png';
//Card
import cardMaLai from '../assets/images/the bai/card_ma_lai.png';
import cardMaRapXac from '../assets/images/the bai/card_ma_rap_xac.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardMaTocDai from '../assets/images/the bai/card_ma_toc_dai.png';
import cardLeQuy from '../assets/images/the bai/card_le_quy.png';
//Info
import infoMaLai1 from '../assets/images/info_card/ma_lai_1.png';
import infoMaLai2 from '../assets/images/info_card/ma_lai_2.png';
import infoMaRapXac1 from '../assets/images/info_card/ma_rap_xac_1.png';
import infoMaRapXac2 from '../assets/images/info_card/ma_rap_xac_2.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
import infoMaTocDai1 from '../assets/images/info_card/ma_toc_dai_1.png';
import infoMaTocDai2 from '../assets/images/info_card/ma_toc_dai_2.png';
import infoLeQuy1 from '../assets/images/info_card/le_quy_1.png';
import infoLeQuy2 from '../assets/images/info_card/le_quy_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const NgoaiDinhLangAmOverlay = ({ onClose, isMuted, onToggleMute, onShowInside, isActive }) => {
  // State for Ma Lai card
  const [showCardMaLai, setShowCardMaLai] = useState(false);
  const [showInfoMaLai1, setShowInfoMaLai1] = useState(false);
  const [isFlippedMaLai, setIsFlippedMaLai] = useState(false);

  // State for Ma Rap Xac card
  const [showCardMaRapXac, setShowCardMaRapXac] = useState(false);
  const [showInfoMaRapXac1, setShowInfoMaRapXac1] = useState(false);
  const [isFlippedMaRapXac, setIsFlippedMaRapXac] = useState(false);

  // State for Ma Doi card (2 hotspots)
  const [showCardMaDoi1, setShowCardMaDoi1] = useState(false);
  const [showCardMaDoi2, setShowCardMaDoi2] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  // State for Ma Toc Dai card
  const [showCardMaTocDai, setShowCardMaTocDai] = useState(false);
  const [showInfoMaTocDai1, setShowInfoMaTocDai1] = useState(false);
  const [isFlippedMaTocDai, setIsFlippedMaTocDai] = useState(false);

  // State for Le Quy card
  const [showCardLeQuy, setShowCardLeQuy] = useState(false);
  const [showInfoLeQuy1, setShowInfoLeQuy1] = useState(false);
  const [isFlippedLeQuy, setIsFlippedLeQuy] = useState(false);

  // Close handlers for each card
  const handleCloseCardMaLai = () => {
    setShowCardMaLai(false);
    setShowInfoMaLai1(false);
    setIsFlippedMaLai(false);
  };

  const handleCloseCardMaRapXac = () => {
    setShowCardMaRapXac(false);
    setShowInfoMaRapXac1(false);
    setIsFlippedMaRapXac(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi1(false);
    setShowCardMaDoi2(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardMaTocDai = () => {
    setShowCardMaTocDai(false);
    setShowInfoMaTocDai1(false);
    setIsFlippedMaTocDai(false);
  };

  const handleCloseCardLeQuy = () => {
    setShowCardLeQuy(false);
    setShowInfoLeQuy1(false);
    setIsFlippedLeQuy(false);
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
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={ngoaiDinhLangAmBg} 
        alt="Ngoai Dinh Lang Am Background"
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Vào trong Button */}
      <>
        <ul className="vao-trong-button absolute top-[70%] left-[45%] z-[10000]">
          <li onClick={handleShowInside}>&#x2799;</li>
        </ul>
        <style jsx>{`
          .vao-trong-button li:nth-child(odd) {
            color: var(--custom-red-2);
            text-align: center;
            font-size: 200px;
            transform: perspective(500px) rotateX(45deg) rotateZ(-55deg);
            text-shadow: 0 0 10px black;
          }
          .vao-trong-button li:nth-child(odd):hover {
            transform: perspective(200px) rotateX(45deg) rotateY(10deg) rotateZ(-55deg);
            cursor: pointer;
            text-shadow: 0 0 10px black;
            font-weight: bold;
            transition: transform 0.3s ease-in-out;
          }
        `}</style>
      </>
      
      {/* Hotspots for cards */}
      {/* Ma Lai hotspot */}
      <div 
        className="absolute z-[10000] top-[26vh] left-[15vw] rounded-full w-[8.75vw] h-[25vh] hover:cursor-pointer [transform:perspective(500px)_rotateZ(30deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaRapXac && !showCardMaDoi1 && !showCardMaDoi2 && !showCardMaTocDai && !showCardLeQuy) {
            setShowCardMaLai(true);
          }
        }}
      />

      {/* Ma Rap Xac hotspot */}
      <div 
        className="absolute z-[10000] top-[67vh] left-[23vw] rounded-4xl w-[15vw] h-[30vh] hover:cursor-pointer transform:perspective(500px)_rotateZ(30deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaDoi1 && !showCardMaDoi2 && !showCardMaTocDai && !showCardLeQuy) {
            setShowCardMaRapXac(true);
          }
        }}
      />

      {/* Ma Doi hotspots */}
      <div 
        className="absolute z-[10000] top-[50vh] left-[46vw] w-[8vw] h-[16vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaRapXac && !showCardMaDoi2 && !showCardMaTocDai && !showCardLeQuy) {
            setShowCardMaDoi1(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[59.5vh] left-[71vw] rounded-md w-[10vw] h-[10vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaRapXac && !showCardMaDoi1 && !showCardMaTocDai && !showCardLeQuy) {
            setShowCardMaDoi2(true);
          }
        }}
      />

      {/* Ma Toc Dai hotspot */}
      <div 
        className="absolute z-[10000] top-[63vh] left-[61.5vw] w-[7.5vw] h-[36vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaRapXac && !showCardMaDoi1 && !showCardMaDoi2 && !showCardLeQuy) {
            setShowCardMaTocDai(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[85vh] left-[63vw] w-[18.75vw] h-[13vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaRapXac && !showCardMaDoi1 && !showCardMaDoi2 && !showCardLeQuy) {
            setShowCardMaTocDai(true);
          }
        }}
      />

      {/* Le Quy hotspot */}
      <div 
        className="absolute z-[10000] top-[37vh] left-[55vw] w-[7.5vw] h-[15vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardMaRapXac && !showCardMaDoi1 && !showCardMaDoi2 && !showCardMaTocDai) {
            setShowCardLeQuy(true);
          }
        }}
      />
      
      {/*<div className="absolute top-4 right-4 flex gap-2 z-[10000]">
        <button 
          onClick={onToggleMute}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <button 
          onClick={onClose}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>*/}

      {/* Card Overlays */}
      {/* Ma Lai Card */}
      {showCardMaLai && (
        <>
          <LazyImage 
            src={cardMaLai} 
            alt="Card Ma Lai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaLai1(true)}
          />
          <button 
            onClick={handleCloseCardMaLai}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaLai1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaLai(!isFlippedMaLai)}
            >
              <div className={`flip-card ${isFlippedMaLai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaLai1} 
                    alt="Info Ma Lai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaLai2} 
                    alt="Info Ma Lai 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Rap Xac Card */}
      {showCardMaRapXac && (
        <>
          <LazyImage 
            src={cardMaRapXac} 
            alt="Card Ma Rap Xac"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaRapXac1(true)}
          />
          <button 
            onClick={handleCloseCardMaRapXac}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaRapXac1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaRapXac(!isFlippedMaRapXac)}
            >
              <div className={`flip-card ${isFlippedMaRapXac ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaRapXac1} 
                    alt="Info Ma Rap Xac 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaRapXac2} 
                    alt="Info Ma Rap Xac 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Doi Card */}
      {(showCardMaDoi1 || showCardMaDoi2) && (
        <>
          <LazyImage 
            src={cardMaDoi} 
            alt="Card Ma Doi"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDoi1(true)}
          />
          <button 
            onClick={handleCloseCardMaDoi}
            className="absolute z-[11100] top-[21.5vh] right-[10.5vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaDoi1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaDoi(!isFlippedMaDoi)}
            >
              <div className={`flip-card ${isFlippedMaDoi ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaDoi1} 
                    alt="Info Ma Doi 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaDoi2} 
                    alt="Info Ma Doi 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Toc Dai Card */}
      {showCardMaTocDai && (
        <>
          <LazyImage 
            src={cardMaTocDai} 
            alt="Card Ma Toc Dai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaTocDai1(true)}
          />
          <button 
            onClick={handleCloseCardMaTocDai}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaTocDai1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaTocDai(!isFlippedMaTocDai)}
            >
              <div className={`flip-card ${isFlippedMaTocDai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaTocDai1} 
                    alt="Info Ma Toc Dai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaTocDai2} 
                    alt="Info Ma Toc Dai 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Le Quy Card */}
      {showCardLeQuy && (
        <>
          <LazyImage 
            src={cardLeQuy} 
            alt="Card Le Quy"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoLeQuy1(true)}
          />
          <button 
            onClick={handleCloseCardLeQuy}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoLeQuy1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedLeQuy(!isFlippedLeQuy)}
            >
              <div className={`flip-card ${isFlippedLeQuy ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoLeQuy1} 
                    alt="Info Le Quy 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoLeQuy2} 
                    alt="Info Le Quy 2"
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

export default NgoaiDinhLangAmOverlay;
