import React from 'react';
import LazyImage from './LazyImage';
//Bg
import trongNhaDiaChuLangDuongBg from '../assets/images/map lang duong/4B_NHA_DAI_DIEN_CHU_BEN_TRONG.png';

const TrongNhaDiaChuLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          onGoBack();
        }
      }}
    >
      <LazyImage 
        src={trongNhaDiaChuLangDuongBg} 
        alt="Trong Nha Dia Chu Lang Duong Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />

      <div className="absolute top-4 right-4 flex gap-2 z-[10000]">
        <button 
          onClick={onToggleMute}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        <button 
          onClick={() => {
            onClose();
            onGoBack();
          }}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TrongNhaDiaChuLangDuongOverlay;


