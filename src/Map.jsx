import React, { useState, useEffect, useRef, Suspense } from 'react';
import TopBarWhite from './components/TopBarWhite';
import LazyImage from './components/LazyImage';
import { resourceManager } from './utils/ResourceManager';
import mapDetailedImage from './assets/images/map_chung.png';
//Tran vien
import namCheo from './assets/images/ong_nam_cheo.jpg'
//Audio lang am
import ganhHatMaAudio from './assets/audio/lang am audio/làng âm - gánh hát ma.MP3'
import cauKhiAudio from './assets/audio/lang am audio/cau_khi.MP3'
import cayGuaAudio from './assets/audio/lang am audio/cay_gua.MP3'
import choAmAudio from './assets/audio/lang am audio/cho_am.MP3'
import dinhLangThoQuyBenTrongAudio from './assets/audio/lang am audio/dinh_lang_tho_quy_ben_trong.MP3'
import dinhThanThoQuyBenNgoaiAudio from './assets/audio/lang am audio/dinh_than_tho_quy_ben_ngoai.MP3'
import nhaDiaChuBenNgoaiAudio from './assets/audio/lang am audio/nha_dia_chu_ben_ngoai.MP3'
import nhaDiaChuBenTrongAudio from './assets/audio/lang am audio/nha_dia_chu_ben_trong.MP3'
import sanChoiLangAmAudio from './assets/audio/lang am audio/san_choi.MP3'
//Audio lang dương
import cayDaThanAudio from './assets/audio/lang duong audio/cay_da_than.MP3'
import choDuongAudio from './assets/audio/lang duong audio/cho_duong.MP3'
import dinhLangBenNgoaiAudio from './assets/audio/lang duong audio/dinh_lang_ben_ngoai.MP3'
import dinhLangBenTrongAudio from './assets/audio/lang duong audio/dinh_lang_ben_trong.MP3'
import ganhHatTrenSongAudio from './assets/audio/lang duong audio/ganh_hat_tren_song.MP3'
import giaDinhDiaChuBenNgoaiAudio from './assets/audio/lang duong audio/gia_dinh_dia_chu_ben_ngoai.MP3'
import giaDinhDiaChuBenTrongAudio from './assets/audio/lang duong audio/gia_dinh_dia_chu_ben_trong.MP3'
import sanChoiLangDuongAudio from './assets/audio/lang duong audio/san_choi.MP3'
//Card
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
//Info
import infoNamCheo1 from './assets/images/info_card/ong_nam_cheo_1_test.png'
import infoNamCheo2 from './assets/images/info_card/ong_nam_cheo_2.png'
import infoAmBinh from './assets/images/info_card/am_binh.png'
import infoBaGiaAoDo from './assets/images/info_card/ba_gia_ao_do.png'
import infoCauCo1 from './assets/images/info_card/cau_co_1.png'
import infoCauCo2 from './assets/images/info_card/cau_co_2.png'
import infoCoHon1 from './assets/images/info_card/co_hon_1.png'
import infoCoHon2 from './assets/images/info_card/co_hon_2.png'
import infoHoTinh1 from './assets/images/info_card/ho_tinh_1.png';
import infoHoTinh2 from './assets/images/info_card/ho_tinh_2.png';
import infoLeQuy1 from './assets/images/info_card/le_quy_1.png';
import infoLeQuy2 from './assets/images/info_card/le_quy_2.png';
import infoLinhMieu1 from './assets/images/info_card/linh_mieu_1.png';
import infoLinhMieu2 from './assets/images/info_card/linh_mieu_2.png';
import infoMaDa1 from './assets/images/info_card/ma_da_1.png';
import infoMaDa2 from './assets/images/info_card/ma_da_2.png';
import infoMaGiauXac1 from './assets/images/info_card/ma_giau_xac_1.png';
import infoMaGiauXac2 from './assets/images/info_card/ma_giau_xac_2.png';
import infoMaLai1 from './assets/images/info_card/ma_lai_1.png';
import infoMaLai2 from './assets/images/info_card/ma_lai_2.png';
import infoMaLe from './assets/images/info_card/ma_le.png';
import infoMaLon1 from './assets/images/info_card/ma_lon_1.png';
import infoMaLon2 from './assets/images/info_card/ma_lon_2.png';
import infoMaMatMam1 from './assets/images/info_card/ma_mat_mam_1.png';
import infoMaMatMam2 from './assets/images/info_card/ma_mat_mam_2.png';
import infoMaRapXac1 from './assets/images/info_card/ma_rap_xac_1.png';
import infoMaRapXac2 from './assets/images/info_card/ma_rap_xac_2.png';
import infoMaThatCo1 from './assets/images/info_card/ma_that_co_1.png';
import infoMaThatCo2 from './assets/images/info_card/ma_that_co_2.png';
import infoMaTocDai1 from './assets/images/info_card/ma_toc_dai_1.png';
import infoMaTocDai2 from './assets/images/info_card/ma_toc_dai_2.png';
import infoMaTroi1 from './assets/images/info_card/ma_troi_1.png';
import infoMaTroi2 from './assets/images/info_card/ma_troi_2.png';
import infoMaVuDai1 from './assets/images/info_card/ma_vu_dai_1.png';
import infoMaVuDai2 from './assets/images/info_card/ma_vu_dai_2.png';
import infoMaVuDai3 from './assets/images/info_card/ma_vu_dai_3.png';
import infoNgai1 from './assets/images/info_card/ngai_1.png';
import infoNgai2 from './assets/images/info_card/ngai_2.png';
import infoOngBaBi1 from './assets/images/info_card/ong_ba_bi_1.png';
import infoOngBaBi2 from './assets/images/info_card/ong_ba_bi_2.png';
import infoOngHoMay1 from './assets/images/info_card/ong_ho_may_1.png';
import infoOngHoMay2 from './assets/images/info_card/ong_ho_may_2.png';
import infoOngHoMay3 from './assets/images/info_card/ong_ho_may_3.png';
import infoOngTa1 from './assets/images/info_card/ong_ta_1.png';
import infoOngTa2 from './assets/images/info_card/ong_ta_2.png';
import infoQuyMotGio1 from './assets/images/info_card/quy_mot_gio_1.png';
import infoQuyMotGio2 from './assets/images/info_card/quy_mot_gio_2.png';
import infoQuyNhapTrang1 from './assets/images/info_card/quy_nhap_trang_1.png';
import infoQuyNhapTrang2 from './assets/images/info_card/quy_nhap_trang_2.png';
import infoQuyNhapTrang3 from './assets/images/info_card/quy_nhap_trang_3.png';
import infoThanTrung1 from './assets/images/info_card/than_trung_1.png';
import infoThanTrung2 from './assets/images/info_card/than_trung_2.png';
import infoThanhHoangLang1 from './assets/images/info_card/thanh_hoang_lang_1.png';
import infoThanhHoangLang2 from './assets/images/info_card/thanh_hoang_lang_2.png';
import infoThienLinhCai1 from './assets/images/info_card/thien_linh_cai_1.png';
import infoThienLinhCai2 from './assets/images/info_card/thien_linh_cai_2.png';
import infoVongNhi1 from './assets/images/info_card/vong_nhi_1.png';
import infoVongNhi2 from './assets/images/info_card/vong_nhi_2.png';

// Lazy load the NamCheoOverlay component
const NamCheoOverlay = React.lazy(() => import('./components/NamCheoOverlay'));

const MapPage = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [showText6, setShowText6] = useState(false);
  const [showText7, setShowText7] = useState(false);
  const [showText8, setShowText8] = useState(false);
  const [showText9, setShowText9] = useState(false);
  const [showText10, setShowText10] = useState(false);
  const [showText11, setShowText11] = useState(false);
  const [showText12, setShowText12] = useState(false);
  const [showText13, setShowText13] = useState(false);
  const [showNamCheo, setShowNamCheo] = useState(false);
  const [showCardNamCheo, setShowCardNamCheo] = useState(false);
  const [showInfoNamCheo1, setShowInfoNamCheo1] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  // Preload critical resources
  useEffect(() => {
    const preloadResources = async () => {
      try {
        // Preload map image
        await resourceManager.preloadImage(mapDetailedImage);
        
        // Preload audio
        await resourceManager.preloadAudio(ganhHatMaAudio);
        setIsAudioLoaded(true);
      } catch (error) {
        console.error('Error preloading resources:', error);
      }
    };

    preloadResources();
  }, []);

  // Handle audio playback
  useEffect(() => {
    if (showNamCheo && audioRef.current && isAudioLoaded) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [showNamCheo, isAudioLoaded]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    }
  };

  // Handler to close NamCheo overlay and reset all states
  const handleCloseNamCheo = () => {
    setShowNamCheo(false);
    setShowCardNamCheo(false);
    setShowInfoNamCheo1(false);
    setIsFlipped(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close only the card and info
  const handleCloseCard = () => {
    setShowCardNamCheo(false);
    setShowInfoNamCheo1(false);
    setIsFlipped(false);
  };

  return (
    <div className="relative">
      {/* Audio element with preload="none" */}
      <audio 
        ref={audioRef} 
        src={ganhHatMaAudio} 
        preload="none"
      />
      
      {/* Fixed TopBar */}
      {!showNamCheo && (
        <div className="fixed top-0 left-0 w-full z-25">
          <TopBarWhite />
        </div>
      )}

      <div className="bg-[var(--custom-red)] fixed h-screen w-screen">
        <div className="relative flex items-center justify-center h-screen mt-2">
          {/* Main map image with lazy loading */}
          <LazyImage 
            src={mapDetailedImage} 
            alt="Detailed Map" 
            className="w-max-full h-[90%] object-contain animate-fade-in-no-delay"
            loading="eager"
          />

          {/* Hotspots with optimized event handlers */}
          <div 
            className="absolute top-[33%] left-[17%] w-15 h-10 hover:cursor-pointer"
            onMouseEnter={() => setShowText1(true)}
            onMouseLeave={() => setShowText1(false)}
          />
          {showText1 && (
            <div className="absolute top-[23%] left-[14%] w-50 text-center leading-[1] animate-fade-in-no-delay" 
              style={{ 
                fontFamily: 'LostType, sans-serif', 
                color: 'var(--custom-red-2)', 
                textShadow: 'var(--custom-yellow-2) 4px 4px 7px', 
                fontSize: '30px' 
              }}
            >
              Gánh Hát Trên Sông
            </div>
          )}

          {/* Lazy loaded NamCheoOverlay */}
          <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>}>
            {showNamCheo && (
              <NamCheoOverlay 
                onClose={handleCloseNamCheo}
                onCloseCard={handleCloseCard}
                isMuted={isMuted}
                onToggleMute={toggleMute}
                showCardNamCheo={showCardNamCheo}
                setShowCardNamCheo={setShowCardNamCheo}
                showInfoNamCheo1={showInfoNamCheo1}
                setShowInfoNamCheo1={setShowInfoNamCheo1}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            )}
          </Suspense>

          {/* Other hotspots with optimized event handlers */}
          <div 
            className="absolute top-[40%] left-[20%] w-25 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText2(true)}
            onMouseLeave={() => setShowText2(false)}
          ></div>
          {showText2 && (
            <div className="absolute top-[52%] left-[13%] w-40 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              Cây da thần
            </div>
          )}

          <div 
            className="absolute top-[37%] left-[33%] w-30 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText3(true)}
            onMouseLeave={() => setShowText3(false)}
          ></div>
          {showText3 && (
            <div className="absolute top-[48%] left-[30%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              chợ dương
            </div>
          )}

          <div 
            className="absolute top-[31%] left-[45%] w-30 h-45 hover:cursor-pointer"
            onMouseEnter={() => setShowText4(true)}
            onMouseLeave={() => setShowText4(false)}
          ></div>
          {showText4 && (
            <div className="absolute top-[54%] left-[45%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              cầu khỉ
            </div>
          )}

          <div 
            className="absolute top-[52%] left-[25%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText5(true)}
            onMouseLeave={() => setShowText5(false)}
          ></div>
          {showText5 && (
            <div className="absolute top-[62%] left-[24%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              đình làng dương
            </div>
          )}

          <div 
            className="absolute top-[62%] left-[53%] w-40 h-25 hover:cursor-pointer"
            onMouseEnter={() => setShowText6(true)}
            onMouseLeave={() => setShowText6(false)}
          ></div>
          {showText6 && (
            <div className="absolute top-[75%] left-[53%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              nhà đại điền chủ
            </div>
          )}

          <div 
            className="absolute top-[63%] left-[36%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText7(true)}
            onMouseLeave={() => setShowText7(false)}
          ></div>
          {showText7 && (
            <div className="absolute top-[75%] left-[35%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              nhà đại điền chủ 
            </div>
          )}

          <div 
            className="absolute top-[30%] left-[79%] w-18 h-10 hover:cursor-pointer"
            onMouseEnter={() => setShowText8(true)}
            onMouseLeave={() => setShowText8(false)}
            onClick={() => setShowNamCheo(true)}
          ></div>
          {showText8 && (
            <div className="absolute top-[20%] left-[75%] w-40 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              gánh hát ma
            </div>
          )}

          <div 
            className="absolute top-[20%] left-[38%] w-33 h-27 hover:cursor-pointer"
            onMouseEnter={() => setShowText9(true)}
            onMouseLeave={() => setShowText9(false)}
          ></div>
          {showText9 && (
            <div className="absolute top-[20%] left-[26%] w-40 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              sân chơi làng dương
            </div>
          )}

          <div 
            className="absolute top-[21%] left-[52%] w-40 h-25 hover:cursor-pointer"
            onMouseEnter={() => setShowText10(true)}
            onMouseLeave={() => setShowText10(false)}
          ></div>
          {showText10 && (
            <div className="absolute top-[20%] left-[64%] w-30 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              sân chơi làng âm
            </div>
          )}

          <div 
            className="absolute top-[39%] left-[72%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText11(true)}
            onMouseLeave={() => setShowText11(false)}
          ></div>
          {showText11 && (
            <div className="absolute top-[49%] left-[72%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              giàn gừa
            </div>
          )}

          <div 
            className="absolute top-[36%] left-[59%] w-40 h-26 hover:cursor-pointer"
            onMouseEnter={() => setShowText12(true)}
            onMouseLeave={() => setShowText12(false)}
          ></div>
          {showText12 && (
            <div className="absolute top-[50%] left-[59%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              chợ âm
            </div>
          )}

          <div 
            className="absolute top-[57%] left-[65%] w-43 h-22 hover:cursor-pointer"
            onMouseEnter={() => setShowText13(true)}
            onMouseLeave={() => setShowText13(false)}
          ></div>
          {showText13 && (
            <div className="absolute top-[69%] left-[65%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              đình làng âm
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
