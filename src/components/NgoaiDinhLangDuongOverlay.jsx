import React, { useState, Suspense } from 'react';
import LazyImage from './LazyImage';
//Bg
import ngoaiDinhLangDuongBg from '../assets/images/map lang duong/3A_DINH_LANG_DUONG_BEN_NGOAI.png';
//Card
import cardThanhHoangLang from '../assets/images/the bai/card_thanh_hoang_lang.png';
//Info
import infoThanhHoangLang1 from '../assets/images/info_card/thanh_hoang_lang_1.png';
import infoThanhHoangLang2 from '../assets/images/info_card/thanh_hoang_lang_2.png';
// Lazy load TrongDinhLangDuongOverlay
const TrongDinhLangDuongOverlay = React.lazy(() => import('./TrongDinhLangDuongOverlay'));

const NgoaiDinhLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onShowInside }) => {
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
        src={ngoaiDinhLangDuongBg} 
        alt="Ngoai Dinh Lang Duong Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspot for Thanh Hoang Lang Card */}
      <div 
        className="absolute top-[41%] left-[55%] w-36 h-24 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardThanhHoangLang(true);
        }}
      />

      {/* Vào trong Button */}
      <button
        onClick={() => {
          onClose();
          onShowInside();
        }}
        className="absolute top-[36%] left-[56.5%] hover:cursor-pointer bg-[#a6a698] text-black pb-1 px-2 rounded-xl border-[1px] font-bold text-md transition-all duration-300 hover:bg-[var(--custom-red-2)] hover:text-[var(--custom-yellow)] hover:border-[var(--custom-yellow)] hover:scale-105"
        style={{ fontFamily: "LostType, sans-serif"}}
      >
        Vào trong
      </button>
      
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
