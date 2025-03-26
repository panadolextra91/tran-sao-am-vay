import React from 'react';
import LazyImage from './LazyImage';
import namCheo from '../assets/images/ong_nam_cheo.jpg';
import cardNamCheo from '../assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png';
import infoNamCheo1 from '../assets/images/info_card/ong_nam_cheo_1_test.png';
import infoNamCheo2 from '../assets/images/info_card/ong_nam_cheo_2.png';

const NamCheoOverlay = ({
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
        src={namCheo} 
        alt="Nam Cheo" 
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspot for card */}
      <div 
        className="absolute top-[66%] left-[34%] w-250 h-70 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardNamCheo(true);
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
    </div>
  );
};

export default NamCheoOverlay; 