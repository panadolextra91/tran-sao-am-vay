import React, { useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import trongNhaDiaChuLangDuongBg from '../assets/images/map lang duong/4B_NHA_DAI_DIEN_CHU_BEN_TRONG.png';

const TrongNhaDiaChuLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onGoBack }) => {

  // Ref for the container to request fullscreen mode
const containerRef = useRef(null);

// Also request fullscreen on mount (this may be redundant if isActive is always true when mounting)
useEffect(() => {
  if (containerRef.current) {
    const requestFullscreen =
      containerRef.current.requestFullscreen ||
      containerRef.current.webkitRequestFullscreen ||
      containerRef.current.msRequestFullscreen;
    if (requestFullscreen) {
      requestFullscreen.call(containerRef.current).catch((err) => {
        console.error('Error attempting to enable fullscreen mode:', err);
      });
    }
  }
}, []);

// Listen for fullscreen exit (e.g. when ESC is pressed) and close the overlay
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

  document.addEventListener('fullscreenchange', handleFullscreenExit);
  document.addEventListener('webkitfullscreenchange', handleFullscreenExit);
  document.addEventListener('msfullscreenchange', handleFullscreenExit);

  return () => {
    document.removeEventListener('fullscreenchange', handleFullscreenExit);
    document.removeEventListener('webkitfullscreenchange', handleFullscreenExit);
    document.removeEventListener('msfullscreenchange', handleFullscreenExit);
  };
}, [onClose]);


// New handler for the "Ra ngoài" button: explicitly exit fullscreen,
  // then call onClose and onGoBack so that NgoaiDinhLangAmOverlay re-opens (via parent) in fullscreen.
  const handleRaNgoaiButton = () => {
    onGoBack();  
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          onGoBack();
        }
      }}
    >
      <LazyImage 
        src={trongNhaDiaChuLangDuongBg} 
        alt="Trong Nha Dia Chu Lang Duong Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />

      {/* Ra ngoai Button */}
     <>
 <ul className="ra-ngoai-button absolute top-[75%] left-[15%] z-[10000]">
    <li onClick={handleRaNgoaiButton}>&#x2799;</li>
  </ul>
  <style jsx>{`
    .ra-ngoai-button li:nth-child(odd) {
      color: white;
      text-align: center;
      font-size: 200px;
      transform: perspective(500px) rotateZ(150deg) rotateY(45deg);
      text-shadow: 0 0 10px black;
    }
    .ra-ngoai-button li:nth-child(odd):hover {
      transform: perspective(200px) rotateZ(150deg) rotateY(45deg) rotateX(10deg);
      cursor: pointer;
      text-shadow: 0 0 10px black;
      font-weight: bold;
      transition: transform 0.3s ease-in-out;
    }
  `}</style>
</>
 </div>
  );
};

export default TrongNhaDiaChuLangDuongOverlay;


