import React, { useState, useEffect, useRef } from 'react';
import LazyImage from './LazyImage';
//Bg
import gianGuaBg from '../assets/images/map lang am/12_GIAN_GUA.png';
//Card
import cardMaTroi from '../assets/images/the bai/card_ma_troi.png';
import cardMaThatCo from '../assets/images/the bai/card_ma_that_co.png';
import cardMaTocDai from '../assets/images/the bai/card_ma_toc_dai.png';
import cardVongNhi from '../assets/images/the bai/card_vong_nhi.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardMaLe from '../assets/images/the bai/card_ma_le.png';
//Info
import infoMaTroi1 from '../assets/images/info_card/ma_troi_1.png';
import infoMaTroi2 from '../assets/images/info_card/ma_troi_2.png';
import infoMaThatCo1 from '../assets/images/info_card/ma_that_co_1.png';
import infoMaThatCo2 from '../assets/images/info_card/ma_that_co_2.png';
import infoMaTocDai1 from '../assets/images/info_card/ma_toc_dai_1.png';
import infoMaTocDai2 from '../assets/images/info_card/ma_toc_dai_2.png';
import infoVongNhi1 from '../assets/images/info_card/vong_nhi_1.png';
import infoVongNhi2 from '../assets/images/info_card/vong_nhi_2.png';
import infoMaLe from '../assets/images/info_card/ma_le.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
//Button
import closeButton from '../assets/images/dau_x.png';

const GianGuaOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Ma Troi card
  const [showCardMaTroi, setShowCardMaTroi] = useState(false);
  const [showInfoMaTroi1, setShowInfoMaTroi1] = useState(false);
  const [isFlippedMaTroi, setIsFlippedMaTroi] = useState(false);

  // State for Ma That Co card
  const [showCardMaThatCo, setShowCardMaThatCo] = useState(false);
  const [showInfoMaThatCo1, setShowInfoMaThatCo1] = useState(false);
  const [isFlippedMaThatCo, setIsFlippedMaThatCo] = useState(false);

  // State for Ma Toc Dai card
  const [showCardMaTocDai, setShowCardMaTocDai] = useState(false);
  const [showInfoMaTocDai1, setShowInfoMaTocDai1] = useState(false);
  const [isFlippedMaTocDai, setIsFlippedMaTocDai] = useState(false);

  // State for Vong Nhi card
  const [showCardVongNhi, setShowCardVongNhi] = useState(false);
  const [showInfoVongNhi1, setShowInfoVongNhi1] = useState(false);
  const [isFlippedVongNhi, setIsFlippedVongNhi] = useState(false);

  // State for Ma Doi card
  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  // State for Ma Le card
  const [showCardMaLe, setShowCardMaLe] = useState(false);
  const [showInfoMaLe1, setShowInfoMaLe1] = useState(false);

  // Close handlers for each card
  const handleCloseCardMaTroi = () => {
    setShowCardMaTroi(false);
    setShowInfoMaTroi1(false);
    setIsFlippedMaTroi(false);
  };

  const handleCloseCardMaThatCo = () => {
    setShowCardMaThatCo(false);
    setShowInfoMaThatCo1(false);
    setIsFlippedMaThatCo(false);
  };

  const handleCloseCardMaTocDai = () => {
    setShowCardMaTocDai(false);
    setShowInfoMaTocDai1(false);
    setIsFlippedMaTocDai(false);
  };

  const handleCloseCardVongNhi = () => {
    setShowCardVongNhi(false);
    setShowInfoVongNhi1(false);
    setIsFlippedVongNhi(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardMaLe = () => {
    setShowCardMaLe(false);
    setShowInfoMaLe1(false);
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
        src={gianGuaBg} 
        alt="Gian Gua Background" 
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Hotspots */}
      {/* Ma Troi Hotspots */}
      <div 
        className="absolute z-[10000] top-[26.5vh] left-[95vw] rounded-full w-[6.25vw] h-[15vh] hover:cursor-pointer [transform:perspective(500px)_rotateZ(-30deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaThatCo && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaTroi(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[27vh] left-[67vw] w-[5vw] h-[8vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaThatCo && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaTroi(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[13.5vh] left-[10vw] rounded-full w-[10vw] h-[17vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaThatCo && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaTroi(true);
          }
        }}
      />

      {/* Ma That Co Hotspots */}
      <div 
        className="absolute z-[10000] top-[13vh] left-[45vw] w-[12.5vw] h-[15vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaThatCo(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[9vh] left-[35vw] w-[15vw] h-[5vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(35deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaThatCo(true);
          }
        }}
      />

      {/* Ma Toc Dai Hotspots */}
      <div 
        className="absolute z-[10000] top-[0vh] left-[77vw] w-[17.5vw] h-[12vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaThatCo && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaTocDai(true);
          }
        }}
      />
      <div 
        className="absolute z-[10000] top-[0vh] left-[89vw] w-[7.5vw] h-[15vh] hover:cursor-pointer [transform:perspective(500px)_rotateZ(-20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaThatCo && !showCardVongNhi && !showCardMaDoi && !showCardMaLe) {
            setShowCardMaTocDai(true);
          }
        }}
      />

      {/* Vong Nhi Hotspot */}
      <div 
        className="absolute z-[10000] top-[14vh] left-[84vw] w-[6.75vw] h-[5vh] hover:cursor-pointer rounded-full [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaThatCo && !showCardMaTocDai && !showCardMaDoi && !showCardMaLe) {
            setShowCardVongNhi(true);
          }
        }}
      />

      {/* Ma Doi Hotspot */}
      <div 
        className="absolute z-[10000] top-[65vh] left-[41vw] rounded-full w-[8.75vw] h-[27vh] hover:cursor-pointer [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaThatCo && !showCardMaTocDai && !showCardVongNhi && !showCardMaLe) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Ma Le Hotspot */}
      <div 
        className="absolute z-[10000] top-[44vh] left-[70.5vw] rounded-full w-[7.5vw] h-[38vh] hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaTroi && !showCardMaThatCo && !showCardMaTocDai && !showCardVongNhi && !showCardMaDoi) {
            setShowCardMaLe(true);
          }
        }}
      />
      
      {/* Ma Troi Card Overlay */}
      {showCardMaTroi && (
        <>
          <LazyImage 
            src={cardMaTroi} 
            alt="Card Ma Troi"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaTroi1(true)}
          />
          <button 
            onClick={handleCloseCardMaTroi}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaTroi1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaTroi(!isFlippedMaTroi)}
            >
              <div className={`flip-card ${isFlippedMaTroi ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaTroi1} 
                    alt="Info Ma Troi 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaTroi2} 
                    alt="Info Ma Troi 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma That Co Card Overlay */}
      {showCardMaThatCo && (
        <>
          <LazyImage 
            src={cardMaThatCo} 
            alt="Card Ma That Co"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaThatCo1(true)}
          />
          <button 
            onClick={handleCloseCardMaThatCo}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaThatCo1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaThatCo(!isFlippedMaThatCo)}
            >
              <div className={`flip-card ${isFlippedMaThatCo ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaThatCo1} 
                    alt="Info Ma That Co 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaThatCo2} 
                    alt="Info Ma That Co 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Toc Dai Card Overlay */}
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

      {/* Vong Nhi Card Overlay */}
      {showCardVongNhi && (
        <>
          <LazyImage 
            src={cardVongNhi} 
            alt="Card Vong Nhi"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoVongNhi1(true)}
          />
          <button 
            onClick={handleCloseCardVongNhi}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoVongNhi1 && (
            <div 
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedVongNhi(!isFlippedVongNhi)}
            >
              <div className={`flip-card ${isFlippedVongNhi ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoVongNhi1} 
                    alt="Info Vong Nhi 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoVongNhi2} 
                    alt="Info Vong Nhi 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Doi Card Overlay */}
      {showCardMaDoi && (
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

      {/* Ma Le Card Overlay */}
      {showCardMaLe && (
        <>
          <LazyImage 
            src={cardMaLe} 
            alt="Card Ma Le"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaLe1(true)}
          />
          <button 
            onClick={handleCloseCardMaLe}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaLe1 && (
            <div className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] cursor-pointer flip-container">
              <LazyImage 
                src={infoMaLe} 
                alt="Info Ma Le"
                className="w-full h-full object-fit" 
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GianGuaOverlay;

