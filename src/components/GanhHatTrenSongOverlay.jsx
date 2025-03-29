import React, { useRef, useEffect } from 'react';
import LazyImage from './LazyImage';
import ganhHatTrenSongBg from '../assets/images/map lang duong/1_GANH_HAT_TREN_SONG.png';

const GanhHatTrenSongOverlay = ({ onClose }) => {
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
          console.error('Error enabling fullscreen:', err);
        });
      }
    }
  }, []);

  // Listen for fullscreen exit (e.g. when the user presses ESC) and close the overlay
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
        src={ganhHatTrenSongBg} 
        alt="Ganh Hat Tren Song Background"
        className="fixed inset-0 w-full h-[100%] object-cover"
      />
    </div>
  );
};

export default GanhHatTrenSongOverlay;
