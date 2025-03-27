import React, { useState } from 'react';
import LazyImage from './LazyImage';
import ganhHatMaBg from '../assets/images/map lang am/13_GANH_HAT_MA.png';
import cardNamCheo from '../assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png';
import infoNamCheo1 from '../assets/images/info_card/ong_nam_cheo_1_test.png';
import infoNamCheo2 from '../assets/images/info_card/ong_nam_cheo_2.png';
import cardMaDa from '../assets/images/the bai/card_ma_da.png';
import infoMaDa1 from '../assets/images/info_card/ma_da_1.png';
import infoMaDa2 from '../assets/images/info_card/ma_da_2.png';
import NamCheoSvg from './NamCheoSvg';

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

  // Handler to close Ma Da card and info
  const handleCloseCardMaDa = () => {
    setShowCardMaDa1(false);
    setShowInfoMaDa1(false);
    setIsFlippedMaDa(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={ganhHatMaBg} 
        alt="Ganh Hat Ma" 
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspot for Nam Cheo card */}
     <div 
        className="absolute top-[66%] left-[34%] w-250 h-70 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaDa1) {
            setShowCardNamCheo(true);
          }
        }}
      />

      {/* New SVG Hotspot */}
      {/*<div
        className="absolute top-[60%] left-[50%] w-250 h-70"
      >
        <div 
          className="w-full h-full hover:cursor-pointer"
          onMouseEnter={(e) => {
            e.stopPropagation();
            if (!showCardMaDa1) {
              // setShowCardNamCheo(true);
            }
          }}
        >
          <NamCheoSvg 
            className="w-full h-full"
            style={{
              opacity: 1
            }}
          />
        </div>
      </div>*/}

      {/* Hotspot for Ma Da card 1 */}
      <div 
        className="absolute top-[40%] left-[0.2%] w-20 h-20 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardNamCheo) {
            setShowCardMaDa1(true);
          }
        }}
      />

      {/* Hotspot for Ma Da card 2 */}
      <div 
        className="absolute top-[20%] left-[90%] w-25 h-40 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardNamCheo) {
            setShowCardMaDa1(true);
          }
        }}
      />
      
      <div className="absolute top-4 right-4 flex gap-2 z-[10000]">
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
      </div>

      {/* Card Nam Cheo Overlay */}
      {showCardNamCheo && (
        <>
          <LazyImage 
            src={cardNamCheo} 
            alt="Card Nam Cheo"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoNamCheo1(true)}
          />
          <button 
            onClick={onCloseCard}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoNamCheo1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
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
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoMaDa1(true)}
          />
          <button 
            onClick={handleCloseCardMaDa}
            className="absolute top-[19.5%] right-[13.5%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoMaDa1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
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