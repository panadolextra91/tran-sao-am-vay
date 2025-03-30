import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import trongDinhLangAmBg from '../assets/images/map lang am/9B_DINH_LANG_AM.png';
//Card
import cardHoTinh from '../assets/images/the bai/card_ho_tinh.png';
import cardThienLinhCai from '../assets/images/the bai/card_thien_linh_cai.png';
import cardOngHoMay from '../assets/images/the bai/card_ong_ho_may.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardLeQuy from '../assets/images/the bai/card_le_quy.png';
//Info
import infoHoTinh1 from '../assets/images/info_card/ho_tinh_1.png';
import infoHoTinh2 from '../assets/images/info_card/ho_tinh_2.png';
import infoThienLinhCai1 from '../assets/images/info_card/thien_linh_cai_1.png';
import infoThienLinhCai2 from '../assets/images/info_card/thien_linh_cai_2.png';
import infoOngHoMay1 from '../assets/images/info_card/ong_ho_may_1.png';
import infoOngHoMay2 from '../assets/images/info_card/ong_ho_may_2.png';
import infoOngHoMay3 from '../assets/images/info_card/ong_ho_may_3.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
import infoLeQuy1 from '../assets/images/info_card/le_quy_1.png';
import infoLeQuy2 from '../assets/images/info_card/le_quy_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const TrongDinhLangAmOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {
  // State for Ho Tinh card
  const [showCardHoTinh, setShowCardHoTinh] = useState(false);
  const [showInfoHoTinh1, setShowInfoHoTinh1] = useState(false);
  const [isFlippedHoTinh, setIsFlippedHoTinh] = useState(false);

  // State for Thien Linh Cai card
  const [showCardThienLinhCai, setShowCardThienLinhCai] = useState(false);
  const [showInfoThienLinhCai1, setShowInfoThienLinhCai1] = useState(false);
  const [isFlippedThienLinhCai, setIsFlippedThienLinhCai] = useState(false);

  // State for Ong Ho May card
  const [showCardOngHoMay, setShowCardOngHoMay] = useState(false);
  const [showInfoOngHoMay1, setShowInfoOngHoMay1] = useState(false);
  const [isFlippedOngHoMay, setIsFlippedOngHoMay] = useState(false);
  const [isFlippedOngHoMay2, setIsFlippedOngHoMay2] = useState(false);
  const [flipStateOngHoMay, setFlipStateOngHoMay] = useState(0);


  // State for Ma Doi card
  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  // State for Le Quy card
  const [showCardLeQuy, setShowCardLeQuy] = useState(false);
  const [showInfoLeQuy1, setShowInfoLeQuy1] = useState(false);
  const [isFlippedLeQuy, setIsFlippedLeQuy] = useState(false);

  // Close handlers for each card
  const handleCloseCardHoTinh = () => {
    setShowCardHoTinh(false);
    setShowInfoHoTinh1(false);
    setIsFlippedHoTinh(false);
  };

  const handleCloseCardThienLinhCai = () => {
    setShowCardThienLinhCai(false);
    setShowInfoThienLinhCai1(false);
    setIsFlippedThienLinhCai(false);
  };

  const handleCloseCardOngHoMay = () => {
    setShowCardOngHoMay(false);
    setShowInfoOngHoMay1(false);
    setIsFlippedOngHoMay(false);
    setIsFlippedOngHoMay2(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardLeQuy = () => {
    setShowCardLeQuy(false);
    setShowInfoLeQuy1(false);
    setIsFlippedLeQuy(false);
  };

  const handleGoBack = () => {
    onClose(); // Close current view
    onGoBack(); // Show outside view
  };

// Ref for the container to request fullscreen mode
const containerRef = useRef(null);

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


// New handler for the "Ra ngoài" button: explicitly exit fullscreen,
  // then call onClose and onGoBack so that NgoaiDinhLangAmOverlay re-opens (via parent) in fullscreen.
  const handleRaNgoaiButton = () => {
    onGoBack();
    setTimeout(() => {
      onClose();
    }, 50);
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
      <LazyImage 
        src={trongDinhLangAmBg} 
        alt="Trong Dinh Lang Am Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />

      {/* Ra ngoai Button */}
      <>
  <ul className="ra-ngoai-button absolute top-[70vh] left-[30vw] z-[10000]">
    <li onClick={handleRaNgoaiButton}>&#x2799;</li>
  </ul>
  <style jsx>{`
    .ra-ngoai-button li:nth-child(odd) {
      color: var(--custom-red-2);
      text-align: center;
      font-size: 200px;
      transform: perspective(500px) rotateZ(150deg) rotateY(45deg);
      text-shadow: 0 0 10px black;
    }
    .ra-ngoai-button li:nth-child(odd):hover {
      transform: perspective(200px) rotateZ(150deg) rotateY(45deg) rotateX(10deg);
      cursor: pointer;
      text-shadow: 0 0 10px black;
      font-weight: bold;
      transition: transform 0.3s ease-in-out;
    }
  `}</style>
</>
      
      {/* Hotspots for cards */}
      {/* Ho Tinh hotspot */}
      <div 
        className="absolute z-[10000] top-[29vh] left-[49vw] w-[6vw] h-[17.5vh] rounded-full hover:cursor-pointer bg-[#FF6B6B] opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardThienLinhCai && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardHoTinh(true);
          }
        }}
      />

      {/* Thien Linh Cai hotspot */}
      <div 
        className="absolute z-[10000] top-[43.5vh] left-[70vw] rounded-full w-[3vw] h-[4.5vh] hover:cursor-pointer bg-[#4ECDC4] opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardThienLinhCai(true);
          }
        }}
      />

      {/* Ong Ho May hotspot */}
      <div 
        className="absolute z-[10000] top-[38vh] left-[78vw] w-[6vw] h-[26vh] hover:cursor-pointer bg-[#45B7D1] opacity-50 [transform:perspective(500px)_rotateZ(13deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardMaDoi) {
            setShowCardOngHoMay(true);
          }
        }}
      />

      {/* Ma Doi hotspot */}
      <div 
        className="absolute z-[10000] top-[48vh] left-[52vw] w-[20vw] h-[22.5vh] hover:cursor-pointer bg-[#D4A5A5] opacity-50 [transform:perspective(500px)_rotateZ(31deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardOngHoMay) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Le Quy hotspot */}
      <div 
        className="absolute z-[10000] top-[25%] left-[74%] w-20 h-20 hover:cursor-pointer [transform:perspective(500px)_rotateZ(23deg)] opacity-50 bg-[#B76E79]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardLeQuy(true);
          }
        }}
      />

      {/* Card Overlays */}
      {/* Ho Tinh Card */}
      {showCardHoTinh && (
        <>
          <LazyImage 
            src={cardHoTinh} 
            alt="Card Ho Tinh"
            className="absolute z-[11000] w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoHoTinh1(true)}
          />
          <button 
            onClick={handleCloseCardHoTinh}
            className="absolute z-[11100] top-[19.5vh] right-[8.5vw] w-[7.5vw] h-[7.5vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoHoTinh1 && (
            <div 
              className="absolute z-[11000] right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedHoTinh(!isFlippedHoTinh)}
            >
              <div className={`flip-card ${isFlippedHoTinh ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoHoTinh1} 
                    alt="Info Ho Tinh 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoHoTinh2} 
                    alt="Info Ho Tinh 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Thien Linh Cai Card */}
      {showCardThienLinhCai && (
        <>
          <LazyImage 
            src={cardThienLinhCai} 
            alt="Card Thien Linh Cai"
            className="absolute z-[11000] w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoThienLinhCai1(true)}
          />
          <button 
            onClick={handleCloseCardThienLinhCai}
            className="absolute z-[11100] top-[20%] right-[10%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoThienLinhCai1 && (
            <div 
              className="absolute z-[11000] right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedThienLinhCai(!isFlippedThienLinhCai)}
            >
              <div className={`flip-card ${isFlippedThienLinhCai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoThienLinhCai1} 
                    alt="Info Thien Linh Cai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoThienLinhCai2} 
                    alt="Info Thien Linh Cai 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ong Ho May Card */}
{showCardOngHoMay && (
  <>
    <LazyImage 
      src={cardOngHoMay} 
      alt="Card Ong Ho May"
      className="absolute z-[11000] w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
      onClick={() => setShowInfoOngHoMay1(true)}
    />
    <button 
      onClick={handleCloseCardOngHoMay}
      className="absolute z-[11100] top-[20%] right-[10%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
    >
      <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
    </button>
    {showInfoOngHoMay1 && (
      <div 
        className="absolute z-[11000] right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
        onClick={() => setFlipStateOngHoMay((prev) => (prev + 1) % 3)}
      >
        <div className="flip-card" data-state={flipStateOngHoMay}>
          <div className="flip-card-face flip-card-face-1">
            <LazyImage 
              src={infoOngHoMay1} 
              alt="Info Ong Ho May 1"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-2">
            <LazyImage 
              src={infoOngHoMay2} 
              alt="Info Ong Ho May 2"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-3">
            <LazyImage 
              src={infoOngHoMay3} 
              alt="Info Ong Ho May 3"
              className="w-full h-full object-fit" 
            />
          </div>
        </div>
      </div>
    )}
  </>
)}


      {/* Ma Doi Card */}
      {showCardMaDoi && (
        <>
          <LazyImage 
            src={cardMaDoi} 
            alt="Card Ma Doi"
            className="absolute z-[11000] w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDoi1(true)}
          />
          <button 
            onClick={handleCloseCardMaDoi}
            className="absolute z-[11100] top-[20%] right-[9.5%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaDoi1 && (
            <div 
              className="absolute z-[11000] right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
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

      {/* Le Quy Card */}
      {showCardLeQuy && (
        <>
          <LazyImage 
            src={cardLeQuy} 
            alt="Card Le Quy"
            className="absolute z-[11000] w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoLeQuy1(true)}
          />
          <button 
            onClick={handleCloseCardLeQuy}
            className="absolute z-[11100] top-[20%] right-[10%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoLeQuy1 && (
            <div 
              className="absolute z-[11000] right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
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

export default TrongDinhLangAmOverlay;
