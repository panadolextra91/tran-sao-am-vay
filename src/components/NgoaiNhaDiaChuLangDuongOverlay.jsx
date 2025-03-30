import React, { useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
//Bg
import ngoaiNhaDiaChuLangDuongBg from '../assets/images/map lang duong/4A_NHA_DAI_DIEN_CHU_BEN_NGOAI.png';

const NgoaiNhaDiaChuLangDuongOverlay = ({ onClose, isMuted, onToggleMute, onShowInside, isActive }) => {
  // Ref for the container to request fullscreen mode
  const containerRef = useRef(null);

  // Request fullscreen when isActive becomes true (or on mount)
  useEffect(() => {
    if (isActive && containerRef.current) {
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
  }, [isActive]);

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

  /*const handleShowInside = () => {
  onShowInside();   
  e.stopPropagation();
  onClose();     
  };*/

const handleShowInside = () => {
    onShowInside();
    setTimeout(() => {
      onClose();
    }, 100);
  };
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 h-screen w-screen"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <LazyImage 
        src={ngoaiNhaDiaChuLangDuongBg} 
        alt="Ngoai Nha Dia Chu Lang Duong Background"
        className="fixed inset-0 w-full h-full object-fit"
      />
      
      {/* Vào trong Button */}
      <>
        <ul className="vao-trong-button absolute top-[70%] left-[45%] z-[10000]">
        <li onClick={handleShowInside}>
  &#x2799;
</li>
        </ul>
        <style jsx>{`
          .vao-trong-button li:nth-child(odd) {
            color: white;
            text-align: center;
            font-size: 200px;
            transform: perspective(500px) rotateX(45deg) rotateZ(-90deg);
            text-shadow: 0 0 10px black;
          }
          .vao-trong-button li:nth-child(odd):hover {
            transform: perspective(200px) rotateX(45deg) rotateZ(-90deg) rotateY(10deg);
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

export default NgoaiNhaDiaChuLangDuongOverlay;
