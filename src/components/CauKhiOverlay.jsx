import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import cauKhiBg from '../assets/images/map lang am/7_CAU_KHI.png';
//Card
import cardMaDa from '../assets/images/the bai/card_ma_da.png';
//Info
import infoMaDa1 from '../assets/images/info_card/ma_da_1.png';
import infoMaDa2 from '../assets/images/info_card/ma_da_2.png';

const CauKhiOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Ma Da card
  const [showCardMaDa, setShowCardMaDa] = useState(false);
  const [showInfoMaDa1, setShowInfoMaDa1] = useState(false);
  const [isFlippedMaDa, setIsFlippedMaDa] = useState(false);

  // Close handler for Ma Da card
  const handleCloseCardMaDa = () => {
    setShowCardMaDa(false);
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
        src={cauKhiBg} 
        alt="Cau Khi Background" 
        className="fixed inset-0 w-full h-[100%] object-fit"
      />
      
      {/* Hotspots for Ma Da card */}
      <div 
        className="absolute top-[25%] left-[92%] w-30 h-40 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
        }}
      />
      <div 
        className="absolute top-[42%] left-[74%] w-30 h-10 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardMaDa(true);
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

      {/* Ma Da Card Overlay */}
      {showCardMaDa && (
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

export default CauKhiOverlay;
