import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import trongDinhLangDuongBg from '../assets/images/map lang duong/3B_DINH_LANG_DUONG_BEN_TRONG.png';
//Card
import cardThanhHoangLang from '../assets/images/the bai/card_thanh_hoang_lang.png';
//Info
import infoThanhHoangLang1 from '../assets/images/info_card/thanh_hoang_lang_1.png';
import infoThanhHoangLang2 from '../assets/images/info_card/thanh_hoang_lang_2.png';

const TrongDinhLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {
  // State for Thanh Hoang Lang card
  const [showCardThanhHoangLang, setShowCardThanhHoangLang] = useState(false);
  const [showInfoThanhHoangLang1, setShowInfoThanhHoangLang1] = useState(false);
  const [isFlippedThanhHoangLang, setIsFlippedThanhHoangLang] = useState(false);

  // Close handler for Thanh Hoang Lang card
  const handleCloseCardThanhHoangLang = () => {
    setShowCardThanhHoangLang(false);
    setShowInfoThanhHoangLang1(false);
    setIsFlippedThanhHoangLang(false);
  };

  // Handler to go back to outside view
  const handleGoBack = () => {
    onClose(); // Close current view
    onGoBack(); // Show outside view
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleGoBack();
        }
      }}
    >
      <LazyImage 
        src={trongDinhLangDuongBg} 
        alt="Trong Dinh Lang Duong Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspot for Thanh Hoang Lang Card */}
      <div 
        className="absolute top-[19%] left-[68%] w-36 h-23 hover:cursor-pointer [transform:perspective(500px)_rotateY(-45deg)_rotateX(-5deg)_rotateZ(20deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardThanhHoangLang(true);
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
          onClick={handleGoBack}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Thanh Hoang Lang Card Overlay */}
      {showCardThanhHoangLang && (
        <>
          <LazyImage 
            src={cardThanhHoangLang} 
            alt="Card Thanh Hoang Lang"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoThanhHoangLang1(true)}
          />
          <button 
            onClick={handleCloseCardThanhHoangLang}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoThanhHoangLang1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
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
    </div>
  );
};

export default TrongDinhLangDuongOverlay; 