import React, { useState, useRef, useEffect } from "react";
import LazyImage from "./LazyImage";
// Background image
import cayDaThanBg from "../assets/images/map lang duong/2_CAY_DA_THAN.png";
// Card images
import cardOngTa from "../assets/images/the bai/card_ong_ta.png";
import cardMaGiau from "../assets/images/the bai/card_ma_giau.png";
// Info images
import infoOngTa1 from "../assets/images/info_card/ong_ta_1.png";
import infoOngTa2 from "../assets/images/info_card/ong_ta_2.png";
import infoMaGiau1 from "../assets/images/info_card/ma_giau_xac_1.png";
import infoMaGiau2 from "../assets/images/info_card/ma_giau_xac_2.png";
//Button
import closeButton from '../assets/images/dau_x.png';

const CayDaThanOverlay = ({ onClose, isMuted, onToggleMute }) => {
  // State for Ong Ta card
  const [showCardOngTa, setShowCardOngTa] = useState(false);
  const [showInfoOngTa1, setShowInfoOngTa1] = useState(false);
  const [isFlippedOngTa, setIsFlippedOngTa] = useState(false);

  // State for Ma Giau card
  const [showCardMaGiau, setShowCardMaGiau] = useState(false);
  const [showInfoMaGiau1, setShowInfoMaGiau1] = useState(false);
  const [isFlippedMaGiau, setIsFlippedMaGiau] = useState(false);

  // Close handlers for each card
  const handleCloseCardOngTa = () => {
    setShowCardOngTa(false);
    setShowInfoOngTa1(false);
    setIsFlippedOngTa(false);
  };

  const handleCloseCardMaGiau = () => {
    setShowCardMaGiau(false);
    setShowInfoMaGiau1(false);
    setIsFlippedMaGiau(false);
  };

  // Ref for the container to request fullscreen mode
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

  // Listen for fullscreen exit (e.g., when ESC is pressed) and close the overlay
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
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage
        src={cayDaThanBg}
        alt="Cay Da Than Background"
        className="fixed inset-0 w-full h-[100%] object-fit"
      />
      
      {/* Hotspots */}
      {/* Ong Ta Hotspot */}
      <div
        className="absolute top-[61%] left-[24%] w-46 h-60 hover:cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardMaGiau) {
            setShowCardOngTa(true);
          }
        }}
      />

      {/* Ma Giau Hotspots */}
      <div
        className="absolute top-[42%] left-[53%] w-24 h-10 hover:cursor-pointer "
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardOngTa) {
            setShowCardMaGiau(true);
          }
        }}
      />
      <div
        className="absolute top-[42%] left-[59%] w-5 h-25 hover:cursor-pointer [transform:perspective(500px)_rotateZ(-5deg)]"
        onClick={(e) => {
          e.stopPropagation();
          if (!showCardOngTa) {
            setShowCardMaGiau(true);
          }
        }}
      />

      {/* Ong Ta Card Overlay */}
      {showCardOngTa && (
        <>
          <LazyImage
            src={cardOngTa}
            alt="Card Ong Ta"
            className="absolute w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoOngTa1(true)}
          />
          <button
            onClick={handleCloseCardOngTa}
            className="absolute top-[20.5%] right-[10.5%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110 "
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoOngTa1 && (
            <div
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedOngTa(!isFlippedOngTa)}
            >
              <div className={`flip-card ${isFlippedOngTa ? "flipped" : ""} w-full h-full`}>
                <div className="flip-card-front absolute inset-0">
                  <LazyImage
                    src={infoOngTa1}
                    alt="Info Ong Ta 1"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="flip-card-back absolute inset-0">
                  <LazyImage
                    src={infoOngTa2}
                    alt="Info Ong Ta 2"
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
            className="absolute w-[90%] left-[31%] h-full object-contain cursor-pointer !opacity-90"
            onClick={() => setShowInfoMaGiau1(true)}
          />
          <button
            onClick={handleCloseCardMaGiau}
            className="absolute top-[20.5%] right-[10.5%] w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-110 "
          >
            <img src={closeButton} alt="Close" className="w-full h-full object-contain" />
          </button>
          {showInfoMaGiau1 && (
            <div
              className="absolute right-[17%] top-[4%] w-[100%] h-[100%] flip-container cursor-pointer"
              onClick={() => setIsFlippedMaGiau(!isFlippedMaGiau)}
            >
              <div className={`flip-card ${isFlippedMaGiau ? "flipped" : ""} w-full h-full`}>
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

export default CayDaThanOverlay;
