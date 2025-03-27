import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import sanChoiLangDuongBg from '../assets/images/map lang duong/6_SAN_CHOI_LANG_DUONG.png';
//Card
import cardCauCo from '../assets/images/the bai/card_cau_co.png';
//Info
import infoCauCo1 from '../assets/images/info_card/cau_co_1.png';
import infoCauCo2 from '../assets/images/info_card/cau_co_2.png';

const SanChoiLangDuongOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Cau Co card
  const [showCardCauCo, setShowCardCauCo] = useState(false);
  const [showInfoCauCo1, setShowInfoCauCo1] = useState(false);
  const [isFlippedCauCo, setIsFlippedCauCo] = useState(false);

  // Close handler for Cau Co card
  const handleCloseCardCauCo = () => {
    setShowCardCauCo(false);
    setShowInfoCauCo1(false);
    setIsFlippedCauCo(false);
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
        src={sanChoiLangDuongBg} 
        alt="San Choi Lang Duong Background" 
        className="fixed inset-0 w-full h-[100%] object-fit"
      />
      
      {/* Hotspot for Cau Co card */}
      <div 
        className="absolute top-[49%] left-[4%] w-60 h-60 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
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

      {/* Cau Co Card Overlay */}
      {showCardCauCo && (
        <>
          <LazyImage 
            src={cardCauCo} 
            alt="Card Cau Co"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoCauCo1(true)}
          />
          <button 
            onClick={handleCloseCardCauCo}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoCauCo1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
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
    </div>
  );
};

export default SanChoiLangDuongOverlay;