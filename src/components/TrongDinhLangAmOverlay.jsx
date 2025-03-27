import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import trongDinhLangAmBg from '../assets/images/map lang am/9B_DINH_LANG_AM.png';
//Card
import cardHoTinh from '../assets/images/the bai/card_ho_tinh.png';
import cardThienLinhCai from '../assets/images/the bai/card_thien_linh_cai.png';
import cardOngHoMay from '../assets/images/the bai/card_ong_ho_may.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardLeQuy from '../assets/images/the bai/card_le_quy.png';
//Info
import infoHoTinh1 from '../assets/images/info_card/ho_tinh_1.png';
import infoHoTinh2 from '../assets/images/info_card/ho_tinh_2.png';
import infoThienLinhCai1 from '../assets/images/info_card/thien_linh_cai_1.png';
import infoThienLinhCai2 from '../assets/images/info_card/thien_linh_cai_2.png';
import infoOngHoMay1 from '../assets/images/info_card/ong_ho_may_1.png';
import infoOngHoMay2 from '../assets/images/info_card/ong_ho_may_2.png';
import infoOngHoMay3 from '../assets/images/info_card/ong_ho_may_3.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
import infoLeQuy1 from '../assets/images/info_card/le_quy_1.png';
import infoLeQuy2 from '../assets/images/info_card/le_quy_2.png';

const TrongDinhLangAmOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {
  // State for Ho Tinh card
  const [showCardHoTinh, setShowCardHoTinh] = useState(false);
  const [showInfoHoTinh1, setShowInfoHoTinh1] = useState(false);
  const [isFlippedHoTinh, setIsFlippedHoTinh] = useState(false);

  // State for Thien Linh Cai card
  const [showCardThienLinhCai, setShowCardThienLinhCai] = useState(false);
  const [showInfoThienLinhCai1, setShowInfoThienLinhCai1] = useState(false);
  const [isFlippedThienLinhCai, setIsFlippedThienLinhCai] = useState(false);

  // State for Ong Ho May card
  const [showCardOngHoMay, setShowCardOngHoMay] = useState(false);
  const [showInfoOngHoMay1, setShowInfoOngHoMay1] = useState(false);
  const [isFlippedOngHoMay, setIsFlippedOngHoMay] = useState(false);
  const [isFlippedOngHoMay2, setIsFlippedOngHoMay2] = useState(false);
  const [flipStateOngHoMay, setFlipStateOngHoMay] = useState(0);


  // State for Ma Doi card
  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  // State for Le Quy card
  const [showCardLeQuy, setShowCardLeQuy] = useState(false);
  const [showInfoLeQuy1, setShowInfoLeQuy1] = useState(false);
  const [isFlippedLeQuy, setIsFlippedLeQuy] = useState(false);

  // Close handlers for each card
  const handleCloseCardHoTinh = () => {
    setShowCardHoTinh(false);
    setShowInfoHoTinh1(false);
    setIsFlippedHoTinh(false);
  };

  const handleCloseCardThienLinhCai = () => {
    setShowCardThienLinhCai(false);
    setShowInfoThienLinhCai1(false);
    setIsFlippedThienLinhCai(false);
  };

  const handleCloseCardOngHoMay = () => {
    setShowCardOngHoMay(false);
    setShowInfoOngHoMay1(false);
    setIsFlippedOngHoMay(false);
    setIsFlippedOngHoMay2(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardLeQuy = () => {
    setShowCardLeQuy(false);
    setShowInfoLeQuy1(false);
    setIsFlippedLeQuy(false);
  };

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
        src={trongDinhLangAmBg} 
        alt="Trong Dinh Lang Am Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
      
      {/* Hotspots for cards */}
      {/* Ho Tinh hotspot */}
      <div 
        className="absolute top-[29%] left-[49%] w-17 h-36 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThienLinhCai && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardHoTinh(true);
          }
        }}
      />

      {/* Thien Linh Cai hotspot */}
      <div 
        className="absolute top-[43%] left-[68%] w-8 h-9 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardThienLinhCai(true);
          }
        }}
      />

      {/* Ong Ho May hotspot */}
      <div 
        className="absolute top-[40%] left-[75%] w-20 h-45 hover:cursor-pointer [transform:perspective(500px)_rotateZ(13deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardMaDoi) {
            setShowCardOngHoMay(true);
          }
        }}
      />

      {/* Ma Doi hotspot */}
      <div 
        className="absolute top-[48%] left-[53%] w-62 h-40 hover:cursor-pointer [transform:perspective(500px)_rotateZ(31deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardOngHoMay) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Le Quy hotspot */}
      <div 
        className="absolute top-[24%] left-[71%] w-20 h-20 hover:cursor-pointer [transform:perspective(500px)_rotateZ(28deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardHoTinh && !showCardThienLinhCai && !showCardOngHoMay && !showCardMaDoi) {
            setShowCardLeQuy(true);
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
          onClick={() => {
            onClose();
            onGoBack();
          }}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Card Overlays */}
      {/* Ho Tinh Card */}
      {showCardHoTinh && (
        <>
          <LazyImage 
            src={cardHoTinh} 
            alt="Card Ho Tinh"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoHoTinh1(true)}
          />
          <button 
            onClick={handleCloseCardHoTinh}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoHoTinh1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedHoTinh(!isFlippedHoTinh)}
            >
              <div className={`flip-card ${isFlippedHoTinh ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoHoTinh1} 
                    alt="Info Ho Tinh 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoHoTinh2} 
                    alt="Info Ho Tinh 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Thien Linh Cai Card */}
      {showCardThienLinhCai && (
        <>
          <LazyImage 
            src={cardThienLinhCai} 
            alt="Card Thien Linh Cai"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoThienLinhCai1(true)}
          />
          <button 
            onClick={handleCloseCardThienLinhCai}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoThienLinhCai1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedThienLinhCai(!isFlippedThienLinhCai)}
            >
              <div className={`flip-card ${isFlippedThienLinhCai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoThienLinhCai1} 
                    alt="Info Thien Linh Cai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoThienLinhCai2} 
                    alt="Info Thien Linh Cai 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ong Ho May Card */}
{showCardOngHoMay && (
  <>
    <LazyImage 
      src={cardOngHoMay} 
      alt="Card Ong Ho May"
      className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
      onClick={() => setShowInfoOngHoMay1(true)}
    />
    <button 
      onClick={handleCloseCardOngHoMay}
      className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
    >
      ✕
    </button>
    {showInfoOngHoMay1 && (
      <div 
        className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
        onClick={() => setFlipStateOngHoMay((prev) => (prev + 1) % 3)}
      >
        <div className="flip-card" data-state={flipStateOngHoMay}>
          <div className="flip-card-face flip-card-face-1">
            <LazyImage 
              src={infoOngHoMay1} 
              alt="Info Ong Ho May 1"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-2">
            <LazyImage 
              src={infoOngHoMay2} 
              alt="Info Ong Ho May 2"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-3">
            <LazyImage 
              src={infoOngHoMay3} 
              alt="Info Ong Ho May 3"
              className="w-full h-full object-fit" 
            />
          </div>
        </div>
      </div>
    )}
  </>
)}


      {/* Ma Doi Card */}
      {showCardMaDoi && (
        <>
          <LazyImage 
            src={cardMaDoi} 
            alt="Card Ma Doi"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoMaDoi1(true)}
          />
          <button 
            onClick={handleCloseCardMaDoi}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoMaDoi1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
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

      {/* Le Quy Card */}
      {showCardLeQuy && (
        <>
          <LazyImage 
            src={cardLeQuy} 
            alt="Card Le Quy"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoLeQuy1(true)}
          />
          <button 
            onClick={handleCloseCardLeQuy}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoLeQuy1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedLeQuy(!isFlippedLeQuy)}
            >
              <div className={`flip-card ${isFlippedLeQuy ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoLeQuy1} 
                    alt="Info Le Quy 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoLeQuy2} 
                    alt="Info Le Quy 2"
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

export default TrongDinhLangAmOverlay;
