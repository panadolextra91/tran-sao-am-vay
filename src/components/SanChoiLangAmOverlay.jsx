import React, { useState } from 'react';
import LazyImage from './LazyImage';
import sanChoiLangAmBg from '../assets/images/map lang am/11_SAN_CHOI_LANG_AM.png';
import cardQuyMotGio from '../assets/images/the bai/card_quy_mot_gio.png';
import cardCauCo from '../assets/images/the bai/card_cau_co.png';
import infoCauCo1 from '../assets/images/info_card/cau_co_1.png';
import infoCauCo2 from '../assets/images/info_card/cau_co_2.png';
import infoQuyMotGio1 from '../assets/images/info_card/quy_mot_gio_1.png';
import infoQuyMotGio2 from '../assets/images/info_card/quy_mot_gio_2.png';

const SanChoiLangAmOverlay = ({
  onClose,
  onCloseCard,
  isMuted,
  onToggleMute,
  showCardSanChoiLangAm,
  setShowCardSanChoiLangAm,
  showInfoSanChoiLangAm1,
  setShowInfoSanChoiLangAm1,
  isFlipped,
  setIsFlipped
}) => {
  // New states for Cau Co card
  const [showCardCauCo, setShowCardCauCo] = useState(false);
  const [showInfoCauCo1, setShowInfoCauCo1] = useState(false);
  const [isFlippedCauCo, setIsFlippedCauCo] = useState(false);

  // New states for Quy Mot Gio card
  const [showCardQuyMotGio, setShowCardQuyMotGio] = useState(false);
  const [showInfoQuyMotGio1, setShowInfoQuyMotGio1] = useState(false);
  const [isFlippedQuyMotGio, setIsFlippedQuyMotGio] = useState(false);

  // Handler to close Cau Co card and info
  const handleCloseCardCauCo = () => {
    setShowCardCauCo(false);
    setShowInfoCauCo1(false);
    setIsFlippedCauCo(false);
  };

  // Handler to close Quy Mot Gio card and info
  const handleCloseCardQuyMotGio = () => {
    setShowCardQuyMotGio(false);
    setShowInfoQuyMotGio1(false);
    setIsFlippedQuyMotGio(false);
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
        src={sanChoiLangAmBg} 
        alt="San Choi Lang Am" 
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspot for Cau Co card */}
      <div 
        className="absolute top-[55%] left-[78%] w-80 h-50 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardCauCo(true);
        }}
      />

      {/* Hotspot for Quy Mot Gio card */}
      <div 
        className="absolute top-[30%] left-[50%] w-42 h-100 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowCardQuyMotGio(true);
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

      {/* Card Cau Co Overlay */}
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

      {/* Card Quy Mot Gio Overlay */}
      {showCardQuyMotGio && (
        <>
          <LazyImage 
            src={cardQuyMotGio} 
            alt="Card Quy Mot Gio"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoQuyMotGio1(true)}
          />
          <button 
            onClick={handleCloseCardQuyMotGio}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoQuyMotGio1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedQuyMotGio(!isFlippedQuyMotGio)}
            >
              <div className={`flip-card ${isFlippedQuyMotGio ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoQuyMotGio1} 
                    alt="Info Quy Mot Gio 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoQuyMotGio2} 
                    alt="Info Quy Mot Gio 2"
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

export default SanChoiLangAmOverlay;
