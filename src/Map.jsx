import React, { useState, useEffect, useRef, Suspense } from 'react';
import TopBarWhite from './components/TopBarWhite';
import LazyImage from './components/LazyImage';
import { resourceManager } from './utils/ResourceManager';
import mapDetailedImage from './assets/images/map_chung.png';
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

// Lazy load the GanhHatMaOverlay component
const GanhHatMaOverlay = React.lazy(() => import('./components/GanhHatMaOverlay'));
// Lazy load the SanChoiLangAmOverlay component
const SanChoiLangAmOverlay = React.lazy(() => import('./components/SanChoiLangAmOverlay'));
// Lazy load the GianGuaOverlay component
const GianGuaOverlay = React.lazy(() => import('./components/GianGuaOverlay'));
// Lazy load the ChoAmOverlay component
const ChoAmOverlay = React.lazy(() => import('./components/ChoAmOverlay'));
// Lazy load the CauKhiOverlay component
const CauKhiOverlay = React.lazy(() => import('./components/CauKhiOverlay'));
// Lazy load the SanChoiLangDuongOverlay component
const SanChoiLangDuongOverlay = React.lazy(() => import('./components/SanChoiLangDuongOverlay'));
// Lazy load the ChoDuongOverlay component
const ChoDuongOverlay = React.lazy(() => import('./components/ChoDuongOverlay'));
// Lazy load the CayDaThanOverlay component
const CayDaThanOverlay = React.lazy(() => import('./components/CayDaThanOverlay'));
// Lazy load the NgoaiDinhLangDuongOverlay component
const NgoaiDinhLangDuongOverlay = React.lazy(() => import('./components/NgoaiDinhLangDuongOverlay'));
// Lazy load the TrongDinhLangDuongOverlay component
const TrongDinhLangDuongOverlay = React.lazy(() => import('./components/TrongDinhLangDuongOverlay'));
// Lazy load the NgoaiDinhLangAmOverlay component
const NgoaiDinhLangAmOverlay = React.lazy(() => import('./components/NgoaiDinhLangAmOverlay'));
// Lazy load the TrongDinhLangAmOverlay component
const TrongDinhLangAmOverlay = React.lazy(() => import('./components/TrongDinhLangAmOverlay'));
// Lazy load the NgoaiNhaDiaChuLangDuongOverlay component
const NgoaiNhaDiaChuLangDuongOverlay = React.lazy(() => import('./components/NgoaiNhaDiaChuLangDuongOverlay'));
// Lazy load the TrongNhaDiaChuLangDuongOverlay component
const TrongNhaDiaChuLangDuongOverlay = React.lazy(() => import('./components/TrongNhaDiaChuLangDuongOverlay'));
// Lazy load the NgoaiNhaDiaChuLangAmOverlay component
const NgoaiNhaDiaChuLangAmOverlay = React.lazy(() => import('./components/NgoaiNhaDiaChuLangAmOverlay'));
// Lazy load the TrongNhaDiaChuLangAmOverlay component
const TrongNhaDiaChuLangAmOverlay = React.lazy(() => import('./components/TrongNhaDiaChuLangAmOverlay'));
// Lazy load the GanhHatTrenSongOverlay component
const GanhHatTrenSongOverlay = React.lazy(() => import('./components/GanhHatTrenSongOverlay'));

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
  const [showSanChoiLangAm, setShowSanChoiLangAm] = useState(false);
  const [showCardSanChoiLangAm, setShowCardSanChoiLangAm] = useState(false);
  const [showInfoSanChoiLangAm1, setShowInfoSanChoiLangAm1] = useState(false);
  const [isFlippedSanChoiLangAm, setIsFlippedSanChoiLangAm] = useState(false);
  const [showGianGua, setShowGianGua] = useState(false);
  const [showChoAm, setShowChoAm] = useState(false);
  const [showCauKhi, setShowCauKhi] = useState(false);
  const [showSanChoiLangDuong, setShowSanChoiLangDuong] = useState(false);
  const [showChoDuong, setShowChoDuong] = useState(false);
  const [showCayDaThan, setShowCayDaThan] = useState(false);
  const [showNgoaiDinhLangDuong, setShowNgoaiDinhLangDuong] = useState(false);
  const [showTrongDinhLangDuong, setShowTrongDinhLangDuong] = useState(false);
  const [showNgoaiDinhLangAm, setShowNgoaiDinhLangAm] = useState(false);
  const [showTrongDinhLangAm, setShowTrongDinhLangAm] = useState(false);
  const [showNgoaiNhaDiaChuLangDuong, setShowNgoaiNhaDiaChuLangDuong] = useState(false);
  const [showTrongNhaDiaChuLangDuong, setShowTrongNhaDiaChuLangDuong] = useState(false);
  const [showNgoaiNhaDiaChuLangAm, setShowNgoaiNhaDiaChuLangAm] = useState(false);
  const [showTrongNhaDiaChuLangAm, setShowTrongNhaDiaChuLangAm] = useState(false);
  const [showGanhHatTrenSong, setShowGanhHatTrenSong] = useState(false);

  // Preload critical resources
  useEffect(() => {
    const preloadResources = async () => {
      try {
        // Preload map image
        await resourceManager.preloadImage(mapDetailedImage);
        
        // Preload audio
        await resourceManager.preloadAudio(ganhHatMaAudio);
        await resourceManager.preloadAudio(cauKhiAudio);
        await resourceManager.preloadAudio(sanChoiLangDuongAudio);
        await resourceManager.preloadAudio(cayDaThanAudio);
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
      audioRef.current.src = ganhHatMaAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showSanChoiLangAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = sanChoiLangAmAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showGianGua && audioRef.current && isAudioLoaded) {
      audioRef.current.src = cayGuaAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showChoAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = choAmAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showCauKhi && audioRef.current && isAudioLoaded) {
      audioRef.current.src = cauKhiAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showSanChoiLangDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = sanChoiLangDuongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showChoDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = choDuongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showCayDaThan && audioRef.current && isAudioLoaded) {
      audioRef.current.src = cayDaThanAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showNgoaiDinhLangDuong && !showTrongDinhLangDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = dinhLangBenNgoaiAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showTrongDinhLangDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = dinhLangBenTrongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showNgoaiDinhLangAm && !showTrongDinhLangAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = dinhThanThoQuyBenNgoaiAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showTrongDinhLangAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = dinhLangThoQuyBenTrongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showNgoaiNhaDiaChuLangDuong && !showTrongNhaDiaChuLangDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = giaDinhDiaChuBenNgoaiAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showTrongNhaDiaChuLangDuong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = giaDinhDiaChuBenTrongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showNgoaiNhaDiaChuLangAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = nhaDiaChuBenNgoaiAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showTrongNhaDiaChuLangAm && audioRef.current && isAudioLoaded) {
      audioRef.current.src = nhaDiaChuBenTrongAudio;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else if (showGanhHatTrenSong && audioRef.current && isAudioLoaded) {
      audioRef.current.src = ganhHatTrenSongAudio;
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
  }, [showNamCheo, showSanChoiLangAm, showGianGua, showChoAm, showCauKhi, showSanChoiLangDuong, showChoDuong, showCayDaThan, showNgoaiDinhLangDuong, showTrongDinhLangDuong, showNgoaiDinhLangAm, showTrongDinhLangAm, showNgoaiNhaDiaChuLangDuong, showTrongNhaDiaChuLangDuong, showNgoaiNhaDiaChuLangAm, showTrongNhaDiaChuLangAm, showGanhHatTrenSong, isAudioLoaded]);

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

  // Handler to close GanhHatMa overlay and reset all states
  const handleCloseGanhHatMa = () => {
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

  // Handler to close SanChoiLangAm overlay and reset all states
  const handleCloseSanChoiLangAm = () => {
    setShowSanChoiLangAm(false);
    setShowCardSanChoiLangAm(false);
    setShowInfoSanChoiLangAm1(false);
    setIsFlippedSanChoiLangAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close only the card and info for SanChoiLangAm
  const handleCloseCardSanChoiLangAm = () => {
    setShowCardSanChoiLangAm(false);
    setShowInfoSanChoiLangAm1(false);
    setIsFlippedSanChoiLangAm(false);
  };

  // Handler to close GianGua overlay and reset all states
  const handleCloseGianGua = () => {
    setShowGianGua(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close ChoAm overlay and reset all states
  const handleCloseChoAm = () => {
    setShowChoAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close CauKhi overlay and reset all states
  const handleCloseCauKhi = () => {
    setShowCauKhi(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close SanChoiLangDuong overlay and reset all states
  const handleCloseSanChoiLangDuong = () => {
    setShowSanChoiLangDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close ChoDuong overlay and reset all states
  const handleCloseChoDuong = () => {
    setShowChoDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close CayDaThan overlay and reset all states
  const handleCloseCayDaThan = () => {
    setShowCayDaThan(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close NgoaiDinhLangDuong overlay and reset all states
  const handleCloseNgoaiDinhLangDuong = () => {
    setShowNgoaiDinhLangDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close TrongDinhLangDuong overlay and reset all states
  const handleCloseTrongDinhLangDuong = () => {
    setShowTrongDinhLangDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close NgoaiDinhLangAm overlay and reset all states
  const handleCloseNgoaiDinhLangAm = () => {
    setShowNgoaiDinhLangAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close TrongDinhLangAm overlay and reset all states
  const handleCloseTrongDinhLangAm = () => {
    setShowTrongDinhLangAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close NgoaiNhaDiaChuLangDuong overlay and reset all states
  const handleCloseNgoaiNhaDiaChuLangDuong = () => {
    setShowNgoaiNhaDiaChuLangDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close TrongNhaDiaChuLangDuong overlay and reset all states
  const handleCloseTrongNhaDiaChuLangDuong = () => {
    setShowTrongNhaDiaChuLangDuong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close NgoaiNhaDiaChuLangAm overlay and reset all states
  const handleCloseNgoaiNhaDiaChuLangAm = () => {
    setShowNgoaiNhaDiaChuLangAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close TrongNhaDiaChuLangAm overlay and reset all states
  const handleCloseTrongNhaDiaChuLangAm = () => {
    setShowTrongNhaDiaChuLangAm(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Handler to close GanhHatTrenSong overlay and reset all states
  const handleCloseGanhHatTrenSong = () => {
    setShowGanhHatTrenSong(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
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
            onClick={() => setShowGanhHatTrenSong(true)}
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

          {/* Lazy loaded GanhHatMaOverlay */}
          <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>}>
            {showNamCheo && (
              <GanhHatMaOverlay 
                onClose={handleCloseGanhHatMa}
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
            onClick={() => setShowCayDaThan(true)}
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
            onClick={() => setShowChoDuong(true)}
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
            onClick={() => setShowCauKhi(true)}
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
            onClick={() => setShowNgoaiDinhLangDuong(true)}
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
            onClick={() => setShowNgoaiNhaDiaChuLangAm(true)}
          ></div>
          {showText6 && (
            <div className="absolute top-[75%] left-[53%] w-40 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              nhà đại điền chủ làng âm
            </div>
          )}

          <div 
            className="absolute top-[63%] left-[36%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText7(true)}
            onMouseLeave={() => setShowText7(false)}
            onClick={() => setShowNgoaiNhaDiaChuLangDuong(true)}
          ></div>
          {showText7 && (
            <div className="absolute top-[75%] left-[35%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              nhà đại điền chủ làng dương
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
            onClick={() => setShowSanChoiLangDuong(true)}
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
            onClick={() => setShowSanChoiLangAm(true)}
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
            onClick={() => setShowGianGua(true)}
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
            onClick={() => setShowChoAm(true)}
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
            onClick={() => setShowNgoaiDinhLangAm(true)}
          ></div>
          {showText13 && (
            <div className="absolute top-[69%] left-[65%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '30px' }}>
              đình làng âm
            </div>
          )}
        </div>
      </div>

      {/* Add SanChoiLangAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showSanChoiLangAm && (
          <SanChoiLangAmOverlay 
            onClose={handleCloseSanChoiLangAm}
            onCloseCard={handleCloseCardSanChoiLangAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            showCardSanChoiLangAm={showCardSanChoiLangAm}
            setShowCardSanChoiLangAm={setShowCardSanChoiLangAm}
            showInfoSanChoiLangAm1={showInfoSanChoiLangAm1}
            setShowInfoSanChoiLangAm1={setShowInfoSanChoiLangAm1}
            isFlipped={isFlippedSanChoiLangAm}
            setIsFlipped={setIsFlippedSanChoiLangAm}
          />
        )}
      </Suspense>

      {/* Add GianGuaOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showGianGua && (
          <GianGuaOverlay 
            onClose={handleCloseGianGua}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add ChoAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showChoAm && (
          <ChoAmOverlay 
            onClose={handleCloseChoAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add CauKhiOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showCauKhi && (
          <CauKhiOverlay 
            onClose={handleCloseCauKhi}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add SanChoiLangDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showSanChoiLangDuong && (
          <SanChoiLangDuongOverlay 
            onClose={handleCloseSanChoiLangDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add ChoDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showChoDuong && (
          <ChoDuongOverlay 
            onClose={handleCloseChoDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add CayDaThanOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showCayDaThan && (
          <CayDaThanOverlay 
            onClose={handleCloseCayDaThan}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>

      {/* Add NgoaiDinhLangDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showNgoaiDinhLangDuong && (
          <NgoaiDinhLangDuongOverlay 
            onClose={handleCloseNgoaiDinhLangDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onShowInside={() => setShowTrongDinhLangDuong(true)}
          />
        )}
      </Suspense>

      {/* Add TrongDinhLangDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showTrongDinhLangDuong && (
          <TrongDinhLangDuongOverlay 
            onClose={handleCloseTrongDinhLangDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onGoBack={() => setShowNgoaiDinhLangDuong(true)}
          />
        )}
      </Suspense>

      {/* Add NgoaiDinhLangAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showNgoaiDinhLangAm && (
          <NgoaiDinhLangAmOverlay 
            onClose={handleCloseNgoaiDinhLangAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onShowInside={() => setShowTrongDinhLangAm(true)}
          />
        )}
      </Suspense>

      {/* Add TrongDinhLangAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showTrongDinhLangAm && (
          <TrongDinhLangAmOverlay 
            onClose={handleCloseTrongDinhLangAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onGoBack={() => setShowNgoaiDinhLangAm(true)}
          />
        )}
      </Suspense>

      {/* Add NgoaiNhaDiaChuLangDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showNgoaiNhaDiaChuLangDuong && (
          <NgoaiNhaDiaChuLangDuongOverlay 
            onClose={handleCloseNgoaiNhaDiaChuLangDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onShowInside={() => setShowTrongNhaDiaChuLangDuong(true)}
          />
        )}
      </Suspense>

      {/* Add TrongNhaDiaChuLangDuongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showTrongNhaDiaChuLangDuong && (
          <TrongNhaDiaChuLangDuongOverlay 
            onClose={handleCloseTrongNhaDiaChuLangDuong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onGoBack={() => setShowNgoaiNhaDiaChuLangDuong(true)}
          />
        )}
      </Suspense>

      {/* Add NgoaiNhaDiaChuLangAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showNgoaiNhaDiaChuLangAm && (
          <NgoaiNhaDiaChuLangAmOverlay 
            onClose={handleCloseNgoaiNhaDiaChuLangAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onShowInside={() => setShowTrongNhaDiaChuLangAm(true)}
          />
        )}
      </Suspense>

      {/* Add TrongNhaDiaChuLangAmOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showTrongNhaDiaChuLangAm && (
          <TrongNhaDiaChuLangAmOverlay 
            onClose={handleCloseTrongNhaDiaChuLangAm}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onGoBack={() => setShowNgoaiNhaDiaChuLangAm(true)}
          />
        )}
      </Suspense>

      {/* Add GanhHatTrenSongOverlay */}
      <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>}>
        {showGanhHatTrenSong && (
          <GanhHatTrenSongOverlay 
            onClose={handleCloseGanhHatTrenSong}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        )}
      </Suspense>
    </div>
  );
};

export default MapPage;
