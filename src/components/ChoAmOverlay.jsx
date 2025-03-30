import React, { useState, useRef, useEffect } from "react";
import LazyImage from "./LazyImage";
// Bg
import choAmBg from "../assets/images/map lang am/10_CHO_AM.png";
// Cards
import cardMaTocDai from "../assets/images/the bai/card_ma_toc_dai.png";
import cardNgai from "../assets/images/the bai/card_ngai.png";
import cardMaDoi from "../assets/images/the bai/card_ma_doi.png";
import cardMaVuDai from "../assets/images/the bai/card_ma_vu_dai.png";
import cardMaCutDau from "../assets/images/the bai/card_ma_cut_dau.png";
import cardMaLai from "../assets/images/the bai/card_ma_lai.png";
import cardMaMatMam from "../assets/images/the bai/card_ma_mat_mam.png";
import cardMaLe from "../assets/images/the bai/card_ma_le.png";
import cardQuyMotGio from "../assets/images/the bai/card_quy_mot_gio.png";
import cardMaLon from "../assets/images/the bai/card_ma_lon.png";
import cardOngBaBi from "../assets/images/the bai/card_ong_ba_bi.png";
// Info
import infoMaTocDai1 from "../assets/images/info_card/ma_toc_dai_1.png";
import infoMaTocDai2 from "../assets/images/info_card/ma_toc_dai_2.png";
import infoNgai1 from "../assets/images/info_card/ngai_1.png";
import infoNgai2 from "../assets/images/info_card/ngai_2.png";
import infoMaDoi1 from "../assets/images/info_card/co_hon_1.png";
import infoMaDoi2 from "../assets/images/info_card/co_hon_2.png";
import infoMaVuDai1 from "../assets/images/info_card/ma_vu_dai_1.png";
import infoMaVuDai2 from "../assets/images/info_card/ma_vu_dai_2.png";
import infoMaVuDai3 from "../assets/images/info_card/ma_vu_dai_3.png";
import infoMaCutDau1 from "../assets/images/info_card/ma_cut_dau_1.png";
import infoMaCutDau2 from "../assets/images/info_card/ma_cut_dau_2.png";
import infoMaLai1 from "../assets/images/info_card/ma_lai_1.png";
import infoMaLai2 from "../assets/images/info_card/ma_lai_2.png";
import infoMaMatMam1 from "../assets/images/info_card/ma_mat_mam_1.png";
import infoMaMatMam2 from "../assets/images/info_card/ma_mat_mam_2.png";
import infoMaLe from "../assets/images/info_card/ma_le.png";
import infoQuyMotGio1 from "../assets/images/info_card/quy_mot_gio_1.png";
import infoQuyMotGio2 from "../assets/images/info_card/quy_mot_gio_2.png";
import infoMaLon1 from "../assets/images/info_card/ma_lon_1.png";
import infoMaLon2 from "../assets/images/info_card/ma_lon_2.png";
import infoOngBaBi1 from "../assets/images/info_card/ong_ba_bi_1.png";
import infoOngBaBi2 from "../assets/images/info_card/ong_ba_bi_2.png";
// Button
import closeButton from '../assets/images/dau_x.png';

const ChoAmOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // States for various cards and info panels
  const [showCardMaTocDai, setShowCardMaTocDai] = useState(false);
  const [showInfoMaTocDai1, setShowInfoMaTocDai1] = useState(false);
  const [isFlippedMaTocDai, setIsFlippedMaTocDai] = useState(false);

  const [showCardNgai, setShowCardNgai] = useState(false);
  const [showInfoNgai1, setShowInfoNgai1] = useState(false);
  const [isFlippedNgai, setIsFlippedNgai] = useState(false);

  const [showCardMaDoi, setShowCardMaDoi] = useState(false);
  const [showInfoMaDoi1, setShowInfoMaDoi1] = useState(false);
  const [isFlippedMaDoi, setIsFlippedMaDoi] = useState(false);

  const [showCardMaVuDai, setShowCardMaVuDai] = useState(false);
  const [showInfoMaVuDai1, setShowInfoMaVuDai1] = useState(false);
  const [flipState, setFlipState] = useState(0); // 0: first image, 1: second image, 2: third image

  const [showCardMaCutDau, setShowCardMaCutDau] = useState(false);
  const [showInfoMaCutDau1, setShowInfoMaCutDau1] = useState(false);
  const [isFlippedMaCutDau, setIsFlippedMaCutDau] = useState(false);

  const [showCardMaLai, setShowCardMaLai] = useState(false);
  const [showInfoMaLai1, setShowInfoMaLai1] = useState(false);
  const [isFlippedMaLai, setIsFlippedMaLai] = useState(false);

  const [showCardMaMatMam, setShowCardMaMatMam] = useState(false);
  const [showInfoMaMatMam1, setShowInfoMaMatMam1] = useState(false);
  const [isFlippedMaMatMam, setIsFlippedMaMatMam] = useState(false);

  const [showCardMaLe, setShowCardMaLe] = useState(false);
  const [showInfoMaLe1, setShowInfoMaLe1] = useState(false);

  const [showCardQuyMotGio, setShowCardQuyMotGio] = useState(false);
  const [showInfoQuyMotGio1, setShowInfoQuyMotGio1] = useState(false);
  const [isFlippedQuyMotGio, setIsFlippedQuyMotGio] = useState(false);

  const [showCardMaLon, setShowCardMaLon] = useState(false);
  const [showInfoMaLon1, setShowInfoMaLon1] = useState(false);
  const [isFlippedMaLon, setIsFlippedMaLon] = useState(false);

  const [showCardOngBaBi, setShowCardOngBaBi] = useState(false);
  const [showInfoOngBaBi1, setShowInfoOngBaBi1] = useState(false);
  const [isFlippedOngBaBi, setIsFlippedOngBaBi] = useState(false);

  // Close handlers for each card
  const handleCloseCardMaTocDai = () => {
    setShowCardMaTocDai(false);
    setShowInfoMaTocDai1(false);
    setIsFlippedMaTocDai(false);
  };

  const handleCloseCardNgai = () => {
    setShowCardNgai(false);
    setShowInfoNgai1(false);
    setIsFlippedNgai(false);
  };

  const handleCloseCardMaDoi = () => {
    setShowCardMaDoi(false);
    setShowInfoMaDoi1(false);
    setIsFlippedMaDoi(false);
  };

  const handleCloseCardMaVuDai = () => {
    setShowCardMaVuDai(false);
    setShowInfoMaVuDai1(false);
    setFlipState(0);
  };

  const handleCloseCardMaCutDau = () => {
    setShowCardMaCutDau(false);
    setShowInfoMaCutDau1(false);
    setIsFlippedMaCutDau(false);
  };

  const handleCloseCardMaLai = () => {
    setShowCardMaLai(false);
    setShowInfoMaLai1(false);
    setIsFlippedMaLai(false);
  };

  const handleCloseCardMaMatMam = () => {
    setShowCardMaMatMam(false);
    setShowInfoMaMatMam1(false);
    setIsFlippedMaMatMam(false);
  };

  const handleCloseCardMaLe = () => {
    setShowCardMaLe(false);
    setShowInfoMaLe1(false);
  };

  const handleCloseCardQuyMotGio = () => {
    setShowCardQuyMotGio(false);
    setShowInfoQuyMotGio1(false);
    setIsFlippedQuyMotGio(false);
  };

  const handleCloseCardMaLon = () => {
    setShowCardMaLon(false);
    setShowInfoMaLon1(false);
    setIsFlippedMaLon(false);
  };

  const handleCloseCardOngBaBi = () => {
    setShowCardOngBaBi(false);
    setShowInfoOngBaBi1(false);
    setIsFlippedOngBaBi(false);
  };

  // --- Fullscreen Logic ---
  const containerRef = useRef(null);

  // Request fullscreen on mount
  useEffect(() => {
    if (containerRef.current) {
      const requestFullscreen =
        containerRef.current.requestFullscreen ||
        containerRef.current.webkitRequestFullscreen ||
        containerRef.current.msRequestFullscreen;
      
      if (requestFullscreen) {
        requestFullscreen.call(containerRef.current).catch((err) => {
          console.error("Error attempting to enable fullscreen mode:", err);
        });
      }
    }
  }, []);

  // Listen for fullscreen exit (e.g. ESC) and close overlay
  useEffect(() => {
    const handleFullscreenExit = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        onClose();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenExit);
    document.addEventListener("webkitfullscreenchange", handleFullscreenExit);
    document.addEventListener("msfullscreenchange", handleFullscreenExit);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenExit);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenExit);
      document.removeEventListener("msfullscreenchange", handleFullscreenExit);
    };
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] h-screen w-screen bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage
        src={choAmBg}
        alt="Cho Am Background"
        className="fixed inset-0 w-full h-full object-fit"
      />

      {/* --- Hotspots with distinct background colors (opacity-50) --- */}

      {/* Ma Toc Dai Hotspot */}
      <div
        className="absolute z-[10000] top-[32vh] left-[0vw] w-[11vw] h-[12vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(-20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaTocDai(true);
          }
        }}
      />

      {/* Ngai Hotspot */}
      <div
        className="absolute z-[10000] top-[49vh] left-[11.75vw] w-[4vw] h-[8vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardNgai(true);
          }
        }}
      />

      {/* Ma Doi Hotspots */}
      <div
        className="absolute z-[10000] top-[55vh] left-[5vw] w-[6vw] h-[20vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaDoi(true);
          }
        }}
      />
      <div
        className="absolute z-[10000] top-[27vh] left-[24vw] w-[7vw] h-[26vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaDoi(true);
          }
        }}
      />
      <div
        className="absolute z-[10000] top-[11vh] left-[70vw] w-[5vw] h-[20vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaDoi(true);
          }
        }}
      />

      {/* Ma Vu Dai Hotspot */}
      <div
        className="absolute z-[10000] top-[57vh] left-[18.5vw] w-[10vw] h-[35vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaVuDai(true);
          }
        }}
      />

      {/* Ma Cut Dau Hotspots */}
      <div
        className="absolute z-[10000] top-[59vh] left-[44.5vw] w-[11vw] h-[28vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaCutDau(true);
          }
        }}
      />
      <div
        className="absolute z-[10000] top-[73vh] left-[35vw] w-[7vw] h-[11vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaCutDau(true);
          }
        }}
      />

      {/* Ma Lai Hotspot */}
      <div
        className="absolute z-[10000] top-[40vh] left-[34vw] w-[8vw] h-[25vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(-20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaLai(true);
          }
        }}
      />

      {/* Ma Mat Mam Hotspot */}
      <div
        className="absolute z-[10000] top-[39vh] left-[42vw] w-[10vw] h-[10vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaMatMam(true);
          }
        }}
      />

      {/* Ma Le Hotspot */}
      <div
        className="absolute z-[10000] top-[10vh] left-[44vw] w-[5vw] h-[15vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(20deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardQuyMotGio &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardMaLe(true);
          }
        }}
      />

      {/* Quy Mot Gio Hotspot */}
      <div
        className="absolute z-[10000] top-[10vh] left-[53vw] w-[6vw] h-[25vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardMaLon &&
            !showCardOngBaBi
          ) {
            setShowCardQuyMotGio(true);
          }
        }}
      />

      {/* Ma Lon Hotspot */}
      <div
        className="absolute z-[10000] top-[33vh] left-[70vw] w-[4vw] h-[8vh] rounded-full hover:cursor-pointer [transform:perspective(500px)_rotateZ(7deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardOngBaBi
          ) {
            setShowCardMaLon(true);
          }
        }}
      />

      {/* Ong Ba Bi Hotspot */}
      <div
        className="absolute z-[10000] top-[42vh] left-[66vw] w-[17vw] h-[25vh] rounded-full hover:cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (
            !showCardMaTocDai &&
            !showCardNgai &&
            !showCardMaDoi &&
            !showCardMaVuDai &&
            !showCardMaCutDau &&
            !showCardMaLai &&
            !showCardMaMatMam &&
            !showCardMaLe &&
            !showCardQuyMotGio &&
            !showCardMaLon
          ) {
            setShowCardOngBaBi(true);
          }
        }}
      />

      {/* --- Card Overlays --- */}

      {/* Ma Toc Dai Card Overlay */}
      {showCardMaTocDai && (
        <>
          <LazyImage
            src={cardMaTocDai}
            alt="Card Ma Toc Dai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaTocDai1(true)}
          />
          <button
            onClick={handleCloseCardMaTocDai}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaTocDai1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaTocDai(!isFlippedMaTocDai)}
            >
              <div className={`flip-card ${isFlippedMaTocDai ? "flipped" : ""} w-full h-full`}>
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

      {/* Ngai Card Overlay */}
      {showCardNgai && (
        <>
          <LazyImage
            src={cardNgai}
            alt="Card Ngai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoNgai1(true)}
          />
          <button
            onClick={handleCloseCardNgai}
            className="absolute z-[11100] top-[22vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoNgai1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedNgai(!isFlippedNgai)}
            >
              <div className={`flip-card ${isFlippedNgai ? "flipped" : ""} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage
                    src={infoNgai1}
                    alt="Info Ngai 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage
                    src={infoNgai2}
                    alt="Info Ngai 2"
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaDoi1(true)}
          />
          <button
            onClick={handleCloseCardMaDoi}
            className="absolute z-[11100] top-[21.5vh] right-[10.25vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaDoi1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaDoi(!isFlippedMaDoi)}
            >
              <div className={`flip-card ${isFlippedMaDoi ? "flipped" : ""} w-full h-full`}>
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

      {/* Ma Vu Dai Card Overlay */}
      {showCardMaVuDai && (
        <>
          <LazyImage
            src={cardMaVuDai}
            alt="Card Ma Vu Dai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaVuDai1(true)}
          />
          <button
            onClick={handleCloseCardMaVuDai}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaVuDai1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => {
                setFlipState((prevState) => (prevState + 1) % 3);
              }}
            >
              <div className="flip-card" data-state={flipState}>
                <div className="flip-card-face flip-card-face-1">
                  <LazyImage
                    src={infoMaVuDai1}
                    alt="Info Ma Vu Dai 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-face flip-card-face-2">
                  <LazyImage
                    src={infoMaVuDai2}
                    alt="Info Ma Vu Dai 2"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-face flip-card-face-3">
                  <LazyImage
                    src={infoMaVuDai3}
                    alt="Info Ma Vu Dai 3"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Cut Dau Card Overlay */}
      {showCardMaCutDau && (
        <>
          <LazyImage
            src={cardMaCutDau}
            alt="Card Ma Cut Dau"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaCutDau1(true)}
          />
          <button
            onClick={handleCloseCardMaCutDau}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaCutDau1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaCutDau(!isFlippedMaCutDau)}
            >
              <div className={`flip-card ${isFlippedMaCutDau ? "flipped" : ""} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage
                    src={infoMaCutDau1}
                    alt="Info Ma Cut Dau 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage
                    src={infoMaCutDau2}
                    alt="Info Ma Cut Dau 2"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Lai Card Overlay */}
      {showCardMaLai && (
        <>
          <LazyImage
            src={cardMaLai}
            alt="Card Ma Lai"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaLai1(true)}
          />
          <button
            onClick={handleCloseCardMaLai}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaLai1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaLai(!isFlippedMaLai)}
            >
              <div className={`flip-card ${isFlippedMaLai ? "flipped" : ""} w-full h-full`}>
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

      {/* Ma Mat Mam Card Overlay */}
      {showCardMaMatMam && (
        <>
          <LazyImage
            src={cardMaMatMam}
            alt="Card Ma Mat Mam"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaMatMam1(true)}
          />
          <button
            onClick={handleCloseCardMaMatMam}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaMatMam1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaMatMam(!isFlippedMaMatMam)}
            >
              <div className={`flip-card ${isFlippedMaMatMam ? "flipped" : ""} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage
                    src={infoMaMatMam1}
                    alt="Info Ma Mat Mam 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage
                    src={infoMaMatMam2}
                    alt="Info Ma Mat Mam 2"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Ma Le Card Overlay */}
      {showCardMaLe && (
        <>
          <LazyImage
            src={cardMaLe}
            alt="Card Ma Le"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaLe1(true)}
          />
          <button
            onClick={handleCloseCardMaLe}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaLe1 && (
            <div className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer">
              <LazyImage
                src={infoMaLe}
                alt="Info Ma Le"
                className="w-full h-full object-fit"
              />
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoQuyMotGio1(true)}
          />
          <button
            onClick={handleCloseCardQuyMotGio}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoQuyMotGio1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedQuyMotGio(!isFlippedQuyMotGio)}
            >
              <div className={`flip-card ${isFlippedQuyMotGio ? "flipped" : ""} w-full h-full`}>
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

      {/* Ma Lon Card Overlay */}
      {showCardMaLon && (
        <>
          <LazyImage
            src={cardMaLon}
            alt="Card Ma Lon"
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaLon1(true)}
          />
          <button
            onClick={handleCloseCardMaLon}
            className="absolute z-[11100] top-[21.5vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaLon1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaLon(!isFlippedMaLon)}
            >
              <div className={`flip-card ${isFlippedMaLon ? "flipped" : ""} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage
                    src={infoMaLon1}
                    alt="Info Ma Lon 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage
                    src={infoMaLon2}
                    alt="Info Ma Lon 2"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
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
            className="absolute z-[11000] w-[80vw] top-[11vh] left-[36vw] h-[80vh] object-fit cursor-pointer !opacity-90"
            onClick={() => setShowInfoOngBaBi1(true)}
          />
          <button
            onClick={handleCloseCardOngBaBi}
            className="absolute z-[11100] top-[21vh] right-[11vw] w-[4.5vw] h-[6vh] flex items-center justify-center cursor-pointer hover:scale-110"
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoOngBaBi1 && (
            <div
              className="absolute z-[11000] right-[17vw] top-[4vh] w-[45vw] h-[80vh] flip-container cursor-pointer"
              onClick={() => setIsFlippedOngBaBi(!isFlippedOngBaBi)}
            >
              <div className={`flip-card ${isFlippedOngBaBi ? "flipped" : ""} w-full h-full`}>
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
    </div>
  );
};

export default ChoAmOverlay;
