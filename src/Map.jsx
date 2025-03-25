import React, { useState, useEffect, useRef } from 'react';
import TopBarWhite from './components/TopBarWhite';
import mapDetailedImage from './assets/images/map_chung.png';
import namCheo from './assets/images/ong_nam_cheo.jpg'
import ganhHatMaAudio from './assets/audio/lang am audio/làng âm - gánh hát ma.MP3'
import cardNamCheo from './assets/images/the bai/THẺ BÀI ÔNG NĂM CHÈO.png'
import infoNamCheo1 from './assets/images/info cho the bai/ong_nam_cheo_1.png'
import infoNamCheo2 from './assets/images/info cho the bai/ong_nam_cheo_2.png'

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

  useEffect(() => {
    if (showNamCheo && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [showNamCheo]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        // If unmuting, restart the audio
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="relative">
      {/* Audio element */}
      <audio ref={audioRef} src={ganhHatMaAudio} />
      
      {/* Fixed TopBar - only show when namCheo is not showing */}
      {!showNamCheo && (
        <div className="fixed top-0 left-0 w-full z-25">
          <TopBarWhite />
        </div>
      )}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen">
        <div className="relative flex items-center justify-center h-screen mt-2">
          <img 
            src={mapDetailedImage} 
            alt="Detailed Map" 
            className="w-max-full h-[90%] object-contain animate-fade-in-no-delay" 
          />
          {/* Hotspot 1 */}
          <div 
            className="absolute top-[33%] left-[17%] w-15 h-10 hover:cursor-pointer"
            onMouseEnter={() => setShowText1(true)}
            onMouseLeave={() => setShowText1(false)}
          ></div>
          {showText1 && (
            <div className="absolute top-[23%] left-[14%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              Gánh Hát Trên Sông
            </div>
          )}

          {/* Nam Cheo Image Overlay */}
          {showNamCheo && (
            <div 
              className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowNamCheo(false);
                }
              }}
            >
              <img 
                src={namCheo} 
                alt="Nam Cheo" 
                className="fixed inset-0 w-full h-[100%] object-fill"
              />
              {/* Hotspot for card */}
              <div 
                className="absolute top-[66%] left-[34%] w-250 h-70 hover:cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCardNamCheo(true);
                }}
              ></div>
              <div className="absolute top-4 right-4 flex gap-2 z-[10000]">
                <button 
                  onClick={toggleMute}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
                <button 
                  onClick={() => setShowNamCheo(false)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Card Nam Cheo Overlay */}
              {showCardNamCheo && (
                <>
                  <img 
                    src={cardNamCheo} 
                    alt="Card Nam Cheo"
                    className="absolute w-full left-[35%] h-full object-contain cursor-pointer"
                    onClick={() => setShowInfoNamCheo1(true)}
                  />
                  <button 
                    onClick={() => {
                      setShowCardNamCheo(false);
                      setShowInfoNamCheo1(false);
                      setIsFlipped(false);
                    }}
                    className="absolute top-[17%] right-[2%] w-8 h-8 bg-white opacity-70 rounded-full flex items-center justify-center text-black cursor-pointer hover:opacity-100"
                  >
                    ✕
                  </button>
                  {showInfoNamCheo1 && (
                    <div 
                      className="absolute left-[5%] top-[10%] w-[50%] h-[80%] flip-container cursor-pointer"
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                        <div className="flip-card-front">
                          <img 
                            src={infoNamCheo1} 
                            alt="Info Nam Cheo 1"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flip-card-back">
                          <img 
                            src={infoNamCheo2} 
                            alt="Info Nam Cheo 2"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Hotspot 2 */}
          <div 
            className="absolute top-[40%] left-[20%] w-25 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText2(true)}
            onMouseLeave={() => setShowText2(false)}
          ></div>
          {showText2 && (
            <div className="absolute top-[52%] left-[13%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              Cây da thần
            </div>
          )}

          {/* Hotspot 3 */}
          <div 
            className="absolute top-[37%] left-[33%] w-30 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText3(true)}
            onMouseLeave={() => setShowText3(false)}
          ></div>
          {showText3 && (
            <div className="absolute top-[48%] left-[30%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              chợ dương
            </div>
          )}

          {/* Hotspot 4 */}
          <div 
            className="absolute top-[31%] left-[45%] w-30 h-45 hover:cursor-pointer"
            onMouseEnter={() => setShowText4(true)}
            onMouseLeave={() => setShowText4(false)}
          ></div>
          {showText4 && (
            <div className="absolute top-[54%] left-[45%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              cầu khỉ
            </div>
          )}

          {/* Hotspot 5 */}
          <div 
            className="absolute top-[52%] left-[25%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText5(true)}
            onMouseLeave={() => setShowText5(false)}
          ></div>
          {showText5 && (
            <div className="absolute top-[62%] left-[24%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              đình làng dương
            </div>
          )}

          {/* Hotspot 6 */}
          <div 
            className="absolute top-[62%] left-[53%] w-40 h-25 hover:cursor-pointer"
            onMouseEnter={() => setShowText6(true)}
            onMouseLeave={() => setShowText6(false)}
          ></div>
          {showText6 && (
            <div className="absolute top-[75%] left-[53%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              nhà đại điền chủ
            </div>
          )}

          {/* Hotspot 7 */}
          <div 
            className="absolute top-[63%] left-[36%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText7(true)}
            onMouseLeave={() => setShowText7(false)}
          ></div>
          {showText7 && (
            <div className="absolute top-[75%] left-[35%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              nhà đại điền chủ 
            </div>
          )}

          {/* Hotspot 8 */}
          <div 
            className="absolute top-[30%] left-[79%] w-18 h-10 hover:cursor-pointer"
            onMouseEnter={() => setShowText8(true)}
            onMouseLeave={() => setShowText8(false)}
            onClick={() => setShowNamCheo(true)}
          ></div>
          {showText8 && (
            <div className="absolute top-[20%] left-[73%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              gánh hát ma
            </div>
          )}

          {/* Hotspot 9 */}
          <div 
            className="absolute top-[20%] left-[38%] w-33 h-27 hover:cursor-pointer"
            onMouseEnter={() => setShowText9(true)}
            onMouseLeave={() => setShowText9(false)}
          ></div>
          {showText9 && (
            <div className="absolute top-[20%] left-[26%] w-40 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              sân chơi làng dương
            </div>
          )}

          {/* Hotspot 10 */}
          <div 
            className="absolute top-[21%] left-[52%] w-40 h-25 hover:cursor-pointer"
            onMouseEnter={() => setShowText10(true)}
            onMouseLeave={() => setShowText10(false)}
          ></div>
          {showText10 && (
            <div className="absolute top-[17%] left-[62%] w-30 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              sân chơi làng âm
            </div>
          )}

          {/* Hotspot 11 */}
          <div 
            className="absolute top-[39%] left-[72%] w-38 h-20 hover:cursor-pointer"
            onMouseEnter={() => setShowText11(true)}
            onMouseLeave={() => setShowText11(false)}
          ></div>
          {showText11 && (
            <div className="absolute top-[49%] left-[72%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              giàn gừa
            </div>
          )}

          {/* Hotspot 12 */}
          <div 
            className="absolute top-[36%] left-[59%] w-40 h-26 hover:cursor-pointer"
            onMouseEnter={() => setShowText12(true)}
            onMouseLeave={() => setShowText12(false)}
          ></div>
          {showText12 && (
            <div className="absolute top-[50%] left-[59%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              chợ âm
            </div>
          )}

          {/* Hotspot 13 */}
          <div 
            className="absolute top-[57%] left-[65%] w-43 h-22 hover:cursor-pointer"
            onMouseEnter={() => setShowText13(true)}
            onMouseLeave={() => setShowText13(false)}
          ></div>
          {showText13 && (
            <div className="absolute top-[69%] left-[65%] w-50 text-center leading-[1] animate-fade-in-no-delay" style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red-2)', textShadow: 'var(--custom-yellow-2) 4px 4px 7px', fontSize: '35px' }}>
              đình làng âm
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
