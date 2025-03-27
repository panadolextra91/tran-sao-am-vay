import React from 'react';
import LazyImage from './LazyImage';
//Bg
import ngoaiNhaDiaChuLangAmBg from '../assets/images/map lang am/8A_NHA_DAI_DIEN_CHU.png';

const NgoaiNhaDiaChuLangAmOverlay = ({ onClose, isMuted, onToggleMute, onShowInside }) => {
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
        src={ngoaiNhaDiaChuLangAmBg} 
        alt="Ngoai Nha Dia Chu Lang Am Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Vào trong button */}
      <button
        onClick={() => {
          onClose();
          onShowInside();
        }}
        className="absolute top-[19.25%] left-[51.25%] hover:cursor-pointer bg-[#827e72] text-black pb-1 px-2 rounded-xl border-[1px] font-bold text-md transition-all duration-300 hover:bg-[var(--custom-red-2)] hover:text-[var(--custom-yellow)] hover:border-[var(--custom-yellow)] hover:scale-105"
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
    </div>
  );
};

export default NgoaiNhaDiaChuLangAmOverlay;
