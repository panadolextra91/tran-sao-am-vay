import React, { useState } from 'react';
import TopBarWhite from './components/TopBarWhite';
//Smoke
import yellow from './assets/images/yellow.png';
// Cards
import cardNamCheo from './assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png'
import cardAmBinh from './assets/images/the bai/card_am_binh.png'
import cardBaGiaAoDo from './assets/images/the bai/card_ba_gia_ao_do.png'
import cardCauCo from './assets/images/the bai/card_cau_co.png'
import cardHoTinh from './assets/images/the bai/card_ho_tinh.png'
import cardLeQuy from './assets/images/the bai/card_le_quy.png'
import cardLinhMieu from './assets/images/the bai/card_linh_mieu.png'
import cardMaCutDau from './assets/images/the bai/card_ma_cut_dau.png'
import cardMaDa from './assets/images/the bai/card_ma_da.png'
import cardMaDoi from './assets/images/the bai/card_ma_doi.png'
import cardMaGiau from './assets/images/the bai/card_ma_giau.png'
import cardMaLai from './assets/images/the bai/card_ma_lai.png'
import cardMaLe from './assets/images/the bai/card_ma_le.png'
import cardMaLon from './assets/images/the bai/card_ma_lon.png'
import cardMaMatMam from './assets/images/the bai/card_ma_mat_mam.png'
import cardMaRapXac from './assets/images/the bai/card_ma_rap_xac.png'
import cardMaThatCo from './assets/images/the bai/card_ma_that_co.png'
import cardMaTocDai from './assets/images/the bai/card_ma_toc_dai.png'
import cardMaTroi from './assets/images/the bai/card_ma_troi.png'
import cardMaVuDai from './assets/images/the bai/card_ma_vu_dai.png'
import cardNgai from './assets/images/the bai/card_ngai.png'
import cardOngBaBi from './assets/images/the bai/card_ong_ba_bi.png'
import cardOngHoMay from './assets/images/the bai/card_ong_ho_may.png'
import cardOngTa from './assets/images/the bai/card_ong_ta.png'
import cardQuyMotGio from './assets/images/the bai/card_quy_mot_gio.png'
import cardQuyNhapTrang from './assets/images/the bai/card_quy_nhap_trang.png'
import cardThanTrung from './assets/images/the bai/card_than_trung.png'
import cardThanhHoangLang from './assets/images/the bai/card_thanh_hoang_lang.png'
import cardThienLinhCai from './assets/images/the bai/card_thien_linh_cai.png'
import cardVongNhi from './assets/images/the bai/card_vong_nhi.png'
//Cloud
import cloudImage from './assets/images/cloud.png'
const cardImages = [
  cardNamCheo, cardAmBinh, cardBaGiaAoDo, cardCauCo, cardHoTinh,
  cardLeQuy, cardLinhMieu, cardMaCutDau, cardMaDa, cardMaDoi,
  cardMaGiau, cardMaLai, cardMaLe, cardMaLon, cardMaMatMam,
  cardMaRapXac, cardMaThatCo, cardMaTocDai, cardMaTroi, cardMaVuDai,
  cardNgai, cardOngBaBi, cardOngHoMay, cardOngTa, cardQuyMotGio,
  cardQuyNhapTrang, cardThanTrung, cardThanhHoangLang, cardThienLinhCai, cardVongNhi
];

const Card = ({ src, direction }) => {
  return (
    <div className={`w-[600px] h-[550px] ${direction === 'prev' ? 'animate-slideLeftToRight' : 'animate-slideRightToLeft'}`}>
      <img 
        src={src} 
        alt="Card" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

const List = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < cardImages.length) {
      setDirection('next');
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setDirection('prev');
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleImages = cardImages.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative">
      {/* Fixed TopBarWhite at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>
      
      {/* Background with custom-red color */}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen flex flex-col items-center pt-[100px]">
        {/* Yellow smoke effects */}
        <img 
          src={yellow} 
          alt="Yellow" 
          className="absolute top-20 right-[-200px] w-[300px] h-auto" 
        />
        <img 
          src={yellow} 
          alt="Yellow" 
          className="absolute bottom-2 left-0 w-[300px] h-auto" 
        />

        <div className="relative w-full max-w-6xl">
          {/* Left Cloud */}
          <button 
            onClick={handlePrev} 
            disabled={startIndex === 0}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 z-30 px-4 cursor-pointer disabled:opacity-50"
          >
            <img 
              src={cloudImage} 
              alt="Previous" 
              className="w-20 h-20 transition-all duration-100 hover:drop-shadow-[-2px_-2px_0_var(--custom-yellow-2)] hover:drop-shadow-[2px_-2px_0_var(--custom-yellow-2)] hover:drop-shadow-[-2px_2px_0_var(--custom-yellow-2)] hover:drop-shadow-[2px_2px_0_var(--custom-yellow-2)] hover:scale-110"
            />
          </button>
          
          {/* Image Carousel */}
          <div className="flex justify-center space-x-5">
            {visibleImages.map((src, index) => {
              const globalIndex = startIndex + index;
              return (
                <Card 
                  key={globalIndex}
                  src={src}
                  direction={direction}
                />
              );
            })}
          </div>
          
          {/* Right Cloud */}
          <button 
            onClick={handleNext} 
            disabled={startIndex + visibleCount >= cardImages.length}
            className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 z-30 px-4 cursor-pointer disabled:opacity-50"
          >
            <img 
              src={cloudImage} 
              alt="Next" 
              className="w-20 h-20 transition-all duration-100 hover:drop-shadow-[-2px_-2px_0_var(--custom-yellow-2)] hover:drop-shadow-[2px_-2px_0_var(--custom-yellow-2)] hover:drop-shadow-[-2px_2px_0_var(--custom-yellow-2)] hover:drop-shadow-[2px_2px_0_var(--custom-yellow-2)] hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
