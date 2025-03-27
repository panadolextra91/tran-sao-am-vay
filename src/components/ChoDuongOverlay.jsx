import React, { useState } from 'react';
import LazyImage from './LazyImage';
//Bg
import choDuongBg from '../assets/images/map lang duong/5_CHO_LANG_DUONG.png';
//Card
import cardMaLai from '../assets/images/the bai/card_ma_lai.png';
import cardBaGiaAoDo from '../assets/images/the bai/card_ba_gia_ao_do.png';
import cardAmBinh from '../assets/images/the bai/card_am_binh.png';
import cardOngBaBi from '../assets/images/the bai/card_ong_ba_bi.png';
import cardMaDoi from '../assets/images/the bai/card_ma_doi.png';
import cardQuyMotGio from '../assets/images/the bai/card_quy_mot_gio.png';
import cardMaGiau from '../assets/images/the bai/card_ma_giau.png';
//Info
import infoMaLai1 from '../assets/images/info_card/ma_lai_1.png';
import infoMaLai2 from '../assets/images/info_card/ma_lai_2.png';
import infoBaGiaAoDo from '../assets/images/info_card/ba_gia_ao_do.png';
import infoAmBinh from '../assets/images/info_card/am_binh.png';
import infoOngBaBi1 from '../assets/images/info_card/ong_ba_bi_1.png';
import infoOngBaBi2 from '../assets/images/info_card/ong_ba_bi_2.png';
import infoMaDoi1 from '../assets/images/info_card/co_hon_1.png';
import infoMaDoi2 from '../assets/images/info_card/co_hon_2.png';
import infoQuyMotGio1 from '../assets/images/info_card/quy_mot_gio_1.png';
import infoQuyMotGio2 from '../assets/images/info_card/quy_mot_gio_2.png';
import infoMaGiau1 from '../assets/images/info_card/ma_giau_xac_1.png';
import infoMaGiau2 from '../assets/images/info_card/ma_giau_xac_2.png';

const ChoDuongOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Ma Lai card
  const [showCardMaLai, setShowCardMaLai] = useState(false);
  const [showInfoMaLai1, setShowInfoMaLai1] = useState(false);
  const [isFlippedMaLai, setIsFlippedMaLai] = useState(false);

  // State for Ba Gia Ao Do card
  const [showCardBaGiaAoDo, setShowCardBaGiaAoDo] = useState(false);
  const [showInfoBaGiaAoDo, setShowInfoBaGiaAoDo] = useState(false);

  // State for Am Binh card
  const [showCardAmBinh, setShowCardAmBinh] = useState(false);
  const [showInfoAmBinh, setShowInfoAmBinh] = useState(false);

  // State for Ong Ba Bi card
  const [showCardOngBaBi, setShowCardOngBaBi] = useState(false);
  const [showInfoOngBaBi1, setShowInfoOngBaBi1] = useState(false);
  const [isFlippedOngBaBi, setIsFlippedOngBaBi] = useState(false);

  // State for Ma Doi card
  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  // State for Quy Mot Gio card
  const [showCardQuyMotGio, setShowCardQuyMotGio] = useState(false);
  const [showInfoQuyMotGio1, setShowInfoQuyMotGio1] = useState(false);
  const [isFlippedQuyMotGio, setIsFlippedQuyMotGio] = useState(false);

  // State for Ma Giau card
  const [showCardMaGiau, setShowCardMaGiau] = useState(false);
  const [showInfoMaGiau1, setShowInfoMaGiau1] = useState(false);
  const [isFlippedMaGiau, setIsFlippedMaGiau] = useState(false);

  // Close handlers for each card
  const handleCloseCardMaLai = () => {
    setShowCardMaLai(false);
    setShowInfoMaLai1(false);
    setIsFlippedMaLai(false);
  };

  const handleCloseCardBaGiaAoDo = () => {
    setShowCardBaGiaAoDo(false);
    setShowInfoBaGiaAoDo(false);
  };

  const handleCloseCardAmBinh = () => {
    setShowCardAmBinh(false);
    setShowInfoAmBinh(false);
  };

  const handleCloseCardOngBaBi = () => {
    setShowCardOngBaBi(false);
    setShowInfoOngBaBi1(false);
    setIsFlippedOngBaBi(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardQuyMotGio = () => {
    setShowCardQuyMotGio(false);
    setShowInfoQuyMotGio1(false);
    setIsFlippedQuyMotGio(false);
  };

  const handleCloseCardMaGiau = () => {
    setShowCardMaGiau(false);
    setShowInfoMaGiau1(false);
    setIsFlippedMaGiau(false);
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
        src={choDuongBg} 
        alt="Cho Duong Background" 
        className="fixed inset-0 w-full h-[100%] object-fit"
      />
      
      {/* Hotspot for Ma Lai card */}
      <div 
        className="absolute top-[36%] left-[38%] w-20 h-39 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardBaGiaAoDo && !showCardAmBinh && !showCardOngBaBi && !showCardMaDoi && !showCardQuyMotGio && !showCardMaGiau) {
            setShowCardMaLai(true);
          }
        }}
      />

      {/* Hotspot for Ba Gia Ao Do card */}
      <div 
        className="absolute top-[24%] left-[58.5%] w-20 h-43 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardAmBinh && !showCardOngBaBi && !showCardMaDoi && !showCardQuyMotGio && !showCardMaGiau) {
            setShowCardBaGiaAoDo(true);
          }
        }}
      />

      {/* Hotspot for Am Binh card */}
      <div 
        className="absolute top-[12%] left-[69.5%] w-25 h-50 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardBaGiaAoDo && !showCardOngBaBi && !showCardMaDoi && !showCardQuyMotGio && !showCardMaGiau) {
            setShowCardAmBinh(true);
          }
        }}
      />

      {/* Hotspot for Ong Ba Bi card */}
      <div 
        className="absolute top-[39%] left-[64.5%] w-65 h-45 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardBaGiaAoDo && !showCardAmBinh && !showCardMaDoi && !showCardQuyMotGio && !showCardMaGiau) {
            setShowCardOngBaBi(true);
          }
        }}
      />

      {/* Hotspot for Ma Doi card */}
      <div 
        className="absolute top-[45%] left-[91.5%] w-20 h-40 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardBaGiaAoDo && !showCardAmBinh && !showCardOngBaBi && !showCardQuyMotGio && !showCardMaGiau) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Hotspot for Quy Mot Gio card */}
      <div 
        className="absolute top-[8%] left-[54%] w-19 h-40 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardBaGiaAoDo && !showCardAmBinh && !showCardOngBaBi && !showCardMaDoi && !showCardMaGiau) {
            setShowCardQuyMotGio(true);
          }
        }}
      />

      {/* Hotspot for Ma Giau card */}
      <div 
        className="absolute top-[88%] left-[82%] w-40 h-12 hover:cursor-pointer"
        onMouseEnter={(e) => {
          e.stopPropagation();
          if (!showCardMaLai && !showCardBaGiaAoDo && !showCardAmBinh && !showCardOngBaBi && !showCardMaDoi && !showCardQuyMotGio) {
            setShowCardMaGiau(true);
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
          onClick={onClose}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Ma Lai Card Overlay */}
      {showCardMaLai && (
        <>
          <LazyImage 
            src={cardMaLai} 
            alt="Card Ma Lai"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoMaLai1(true)}
          />
          <button 
            onClick={handleCloseCardMaLai}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoMaLai1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaLai(!isFlippedMaLai)}
            >
              <div className={`flip-card ${isFlippedMaLai ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaLai1} 
                    alt="Info Ma Lai 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaLai2} 
                    alt="Info Ma Lai 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ba Gia Ao Do Card Overlay */}
      {showCardBaGiaAoDo && (
        <>
          <LazyImage 
            src={cardBaGiaAoDo} 
            alt="Card Ba Gia Ao Do"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoBaGiaAoDo(true)}
          />
          <button 
            onClick={handleCloseCardBaGiaAoDo}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoBaGiaAoDo && (
            <div className="absolute right-[20%] top-[4%] w-[90%] h-[100%]">
              <LazyImage 
                src={infoBaGiaAoDo} 
                alt="Info Ba Gia Ao Do"
                className="w-full h-full object-fit" 
              />
            </div>
          )}
        </>
      )}

      {/* Am Binh Card Overlay */}
      {showCardAmBinh && (
        <>
          <LazyImage 
            src={cardAmBinh} 
            alt="Card Am Binh"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoAmBinh(true)}
          />
          <button 
            onClick={handleCloseCardAmBinh}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoAmBinh && (
            <div className="absolute right-[20%] top-[4%] w-[90%] h-[100%]">
              <LazyImage 
                src={infoAmBinh} 
                alt="Info Am Binh"
                className="w-full h-full object-fit" 
              />
            </div>
          )}
        </>
      )}

      {/* Ong Ba Bi Card Overlay */}
      {showCardOngBaBi && (
        <>
          <LazyImage 
            src={cardOngBaBi} 
            alt="Card Ong Ba Bi"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoOngBaBi1(true)}
          />
          <button 
            onClick={handleCloseCardOngBaBi}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoOngBaBi1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedOngBaBi(!isFlippedOngBaBi)}
            >
              <div className={`flip-card ${isFlippedOngBaBi ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoOngBaBi1} 
                    alt="Info Ong Ba Bi 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoOngBaBi2} 
                    alt="Info Ong Ba Bi 2"
                    className="w-full h-full object-fit" 
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Doi Card Overlay */}
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

      {/* Quy Mot Gio Card Overlay */}
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

      {/* Ma Giau Card Overlay */}
      {showCardMaGiau && (
        <>
          <LazyImage 
            src={cardMaGiau} 
            alt="Card Ma Giau"
            className="absolute w-[90%] left-[28%] h-full object-contain cursor-pointer opacity-90"
            onClick={() => setShowInfoMaGiau1(true)}
          />
          <button 
            onClick={handleCloseCardMaGiau}
            className="absolute top-[19%] right-[15%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
          >
            ✕
          </button>
          {showInfoMaGiau1 && (
            <div 
              className="absolute right-[20%] top-[4%] w-[90%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaGiau(!isFlippedMaGiau)}
            >
              <div className={`flip-card ${isFlippedMaGiau ? 'flipped' : ''} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage 
                    src={infoMaGiau1} 
                    alt="Info Ma Giau 1"
                    className="w-full h-full object-fit" 
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage 
                    src={infoMaGiau2} 
                    alt="Info Ma Giau 2"
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

export default ChoDuongOverlay;




