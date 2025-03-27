import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import trongNhaDiaChuLangAmBg from '../assets/images/map lang am/8B_NHA_DAI_DIEN_CHU.png';
//Card
import cardThanTrung from '../assets/images/the bai/card_than_trung.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardMaTocDai from '../assets/images/the bai/card_ma_toc_dai.png';
import cardLeQuy from '../assets/images/the bai/card_le_quy.png';
import cardLinhMieu from '../assets/images/the bai/card_linh_mieu.png';
import cardQuyNhapTrang from '../assets/images/the bai/card_quy_nhap_trang.png';
//Info
import infoThanTrung1 from '../assets/images/info_card/than_trung_1.png';
import infoThanTrung2 from '../assets/images/info_card/than_trung_2.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
import infoMaTocDai1 from '../assets/images/info_card/ma_toc_dai_1.png';
import infoMaTocDai2 from '../assets/images/info_card/ma_toc_dai_2.png';
import infoLeQuy1 from '../assets/images/info_card/le_quy_1.png';
import infoLeQuy2 from '../assets/images/info_card/le_quy_2.png';
import infoLinhMieu1 from '../assets/images/info_card/linh_mieu_1.png';
import infoLinhMieu2 from '../assets/images/info_card/linh_mieu_2.png';
import infoQuyNhapTrang1 from '../assets/images/info_card/quy_nhap_trang_1.png';
import infoQuyNhapTrang2 from '../assets/images/info_card/quy_nhap_trang_2.png';
import infoQuyNhapTrang3 from '../assets/images/info_card/quy_nhap_trang_3.png';

const TrongNhaDiaChuLangAmOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {
  // State for Than Trung card
  const [showCardThanTrung, setShowCardThanTrung] = useState(false);
  const [showInfoThanTrung1, setShowInfoThanTrung1] = useState(false);
  const [isFlippedThanTrung, setIsFlippedThanTrung] = useState(false);

  // State for Ma Doi card
  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);
  const [isFlippedMaDoi2, setIsFlippedMaDoi2] = useState(false);

  // State for Ma Toc Dai card
  const [showCardMaTocDai, setShowCardMaTocDai] = useState(false);
  const [showInfoMaTocDai1, setShowInfoMaTocDai1] = useState(false);
  const [isFlippedMaTocDai, setIsFlippedMaTocDai] = useState(false);

  // State for Le Quy card
  const [showCardLeQuy, setShowCardLeQuy] = useState(false);
  const [showInfoLeQuy1, setShowInfoLeQuy1] = useState(false);
  const [isFlippedLeQuy, setIsFlippedLeQuy] = useState(false);

  // State for Linh Mieu card
  const [showCardLinhMieu, setShowCardLinhMieu] = useState(false);
  const [showInfoLinhMieu1, setShowInfoLinhMieu1] = useState(false);
  const [isFlippedLinhMieu, setIsFlippedLinhMieu] = useState(false);

  // State for Quy Nhap Trang card
  const [showCardQuyNhapTrang, setShowCardQuyNhapTrang] = useState(false);
  const [showInfoQuyNhapTrang1, setShowInfoQuyNhapTrang1] = useState(false);
  const [isFlippedQuyNhapTrang, setIsFlippedQuyNhapTrang] = useState(false);
  const [isFlippedQuyNhapTrang2, setIsFlippedQuyNhapTrang2] = useState(false);
  const [flipStateQuyNhapTrang, setFlipStateQuyNhapTrang] = useState(0);

  

  // Close handlers for each card
  const handleCloseCardThanTrung = () => {
    setShowCardThanTrung(false);
    setShowInfoThanTrung1(false);
    setIsFlippedThanTrung(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
    setIsFlippedMaDoi2(false);
  };

  const handleCloseCardMaTocDai = () => {
    setShowCardMaTocDai(false);
    setShowInfoMaTocDai1(false);
    setIsFlippedMaTocDai(false);
  };

  const handleCloseCardLeQuy = () => {
    setShowCardLeQuy(false);
    setShowInfoLeQuy1(false);
    setIsFlippedLeQuy(false);
  };

  const handleCloseCardLinhMieu = () => {
    setShowCardLinhMieu(false);
    setShowInfoLinhMieu1(false);
    setIsFlippedLinhMieu(false);
  };

  const handleCloseCardQuyNhapTrang = () => {
    setShowCardQuyNhapTrang(false);
    setShowInfoQuyNhapTrang1(false);
    setIsFlippedQuyNhapTrang(false);
    setIsFlippedQuyNhapTrang2(false);
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
        src={trongNhaDiaChuLangAmBg} 
        alt="Trong Nha Dia Chu Lang Am Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />

      {/* Hotspots for cards */}
      {/* Than Trung hotspot */}
      <div 
        className="absolute top-[8%] left-[5%] w-28 h-28 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaDoi && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardThanTrung(true);
          }
        }}
      />

      {/* Ma Doi hotspot */}
      <div 
        className="absolute top-[46%] left-[8%] w-30 h-50 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardMaDoi(true);
          }
        }}  
      />
      <div 
        className="absolute top-[75%] left-[18%] w-25 h-40 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardMaDoi(true);
          }
        }}
      />
      <div 
        className="absolute top-[76%] left-[65%] w-38 h-30 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Ma Toc Dai hotspot */}
      <div 
        className="absolute top-[54%] left-[34%] w-36 h-20 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaDoi && !showCardLeQuy && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardMaTocDai(true);
          }
        }}
      />

      {/* Le Quy hotspot */}
      <div 
            className="absolute top-[13%] left-[50%] w-20 h-53 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaDoi && !showCardMaTocDai && !showCardLinhMieu && !showCardQuyNhapTrang) {
            setShowCardLeQuy(true);
          }
        }}
      />

      {/* Linh Mieu hotspot */}
      <div 
        className="absolute top-[41%] left-[60%] w-13 h-7 hover:cursor-pointer rounded-full"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaDoi && !showCardMaTocDai && !showCardLeQuy && !showCardQuyNhapTrang) {
            setShowCardLinhMieu(true);
          }
        }}
      />

      {/* Quy Nhap Trang hotspot */}
      <div 
        className="absolute top-[35%] left-[63.75%] w-15 h-20 hover:cursor-pointer rounded-full [transform:perspective(500px)_rotateZ(10deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaDoi && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu) {
            setShowCardQuyNhapTrang(true);
          }
        }}
      />
      <div 
        className="absolute top-[42%] left-[60%] rounded-full w-14 h-28 hover:cursor-pointer [transform:perspective(500px)_rotateZ(75deg)]"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardThanTrung && !showCardMaDoi && !showCardMaTocDai && !showCardLeQuy && !showCardLinhMieu) {
            setShowCardQuyNhapTrang(true);
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
      {/* Than Trung Card */}
      {showCardThanTrung && (
        <>
          <LazyImage 
            src={cardThanTrung} 
            alt="Card Than Trung"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoThanTrung1(true)}
          />
          <button 
            onClick={handleCloseCardThanTrung}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoThanTrung1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedThanTrung(!isFlippedThanTrung)}
            >
              <div className={`flip-card ${isFlippedThanTrung ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoThanTrung1} 
                    alt="Info Than Trung 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoThanTrung2} 
                    alt="Info Than Trung 2"
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
              onClick={() => {
                if (!isFlippedMaDoi) {
                  setIsFlippedMaDoi(true);
                } else if (!isFlippedMaDoi2) {
                  setIsFlippedMaDoi2(true);
                } else {
                  setIsFlippedMaDoi(false);
                  setIsFlippedMaDoi2(false);
                }
              }}
            >
              <div className={`flip-card ${isFlippedMaDoi ? 'flipped' : ''} ${isFlippedMaDoi2 ? 'flipped2' : ''} w-full h-full`}>
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
                <div className="flip-card-back2 absolute inset-0">
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

      {/* Ma Toc Dai Card */}
      {showCardMaTocDai && (
        <>
          <LazyImage 
            src={cardMaTocDai} 
            alt="Card Ma Toc Dai"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoMaTocDai1(true)}
          />
          <button 
            onClick={handleCloseCardMaTocDai}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoMaTocDai1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaTocDai(!isFlippedMaTocDai)}
            >
              <div className={`flip-card ${isFlippedMaTocDai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaTocDai1} 
                    alt="Info Ma Toc Dai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaTocDai2} 
                    alt="Info Ma Toc Dai 2"
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

      {/* Linh Mieu Card */}
      {showCardLinhMieu && (
        <>
          <LazyImage 
            src={cardLinhMieu} 
            alt="Card Linh Mieu"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoLinhMieu1(true)}
          />
          <button 
            onClick={handleCloseCardLinhMieu}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoLinhMieu1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedLinhMieu(!isFlippedLinhMieu)}
            >
              <div className={`flip-card ${isFlippedLinhMieu ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoLinhMieu1} 
                    alt="Info Linh Mieu 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoLinhMieu2} 
                    alt="Info Linh Mieu 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Quy Nhap Trang Card */}
{showCardQuyNhapTrang && (
  <>
    <LazyImage 
      src={cardQuyNhapTrang} 
      alt="Card Quy Nhap Trang"
      className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
      onClick={() => setShowInfoQuyNhapTrang1(true)}
    />
    <button 
      onClick={handleCloseCardQuyNhapTrang}
      className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
    >
      ✕
    </button>
    {showInfoQuyNhapTrang1 && (
      <div 
        className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
        onClick={() => setFlipStateQuyNhapTrang((prev) => (prev + 1) % 3)}
      >
        <div className="flip-card" data-state={flipStateQuyNhapTrang}>
          <div className="flip-card-face flip-card-face-1">
            <LazyImage 
              src={infoQuyNhapTrang1} 
              alt="Info Quy Nhap Trang 1"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-2">
            <LazyImage 
              src={infoQuyNhapTrang2} 
              alt="Info Quy Nhap Trang 2"
              className="w-full h-full object-fit" 
            />
          </div>
          <div className="flip-card-face flip-card-face-3">
            <LazyImage 
              src={infoQuyNhapTrang3} 
              alt="Info Quy Nhap Trang 3"
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

export default TrongNhaDiaChuLangAmOverlay;