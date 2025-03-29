import React, { useState, useEffect, useRef } from 'react';
import NgoaiDinhLangAmOverlay from './NgoaiDinhLangAmOverlay';
import TrongDinhLangAmOverlay from './TrongDinhLangAmOverlay';
import ngoaiDinhLangAmAudio from '../assets/audio/lang am audio/dinh_than_tho_quy_ben_ngoai.MP3'
import trongDinhLangAmAudio from '../assets/audio/lang am audio/dinh_lang_tho_quy_ben_trong.MP3'
const OverlayManager = () => {
  // "ngoai" or "trong" – which overlay is on top.
  const [activeOverlay, setActiveOverlay] = useState("ngoai");

  // References for audio elements (or you can manage audio inside each overlay)
  const ngoaiAudioRef = useRef(null);
  const trongAudioRef = useRef(null);

  // Example functions to control audio:
  const playNgoaiAudio = () => {
    if (ngoaiAudioRef.current) {
      ngoaiAudioRef.current.muted = false;
      ngoaiAudioRef.current.play();
    }
  };

  const pauseAndResetNgoaiAudio = () => {
    if (ngoaiAudioRef.current) {
      ngoaiAudioRef.current.pause();
      ngoaiAudioRef.current.currentTime = 0;
      ngoaiAudioRef.current.muted = true;
    }
  };

  const playTrongAudio = () => {
    if (trongAudioRef.current) {
      trongAudioRef.current.muted = false;
      trongAudioRef.current.play();
    }
  };

  const pauseAndResetTrongAudio = () => {
    if (trongAudioRef.current) {
      trongAudioRef.current.pause();
      trongAudioRef.current.currentTime = 0;
      trongAudioRef.current.muted = true;
    }
  };

  // Callback when user clicks "Vào trong" button (in Ngoai overlay)
  const handleVaoTrong = () => {
    pauseAndResetNgoaiAudio(); // Mute & reset Ngoai audio
    setActiveOverlay("trong");  // Bring Trong overlay to front
    playTrongAudio();          // Play Trong audio
  };

  // Callback when user clicks "Ra ngoài" button (in Trong overlay)
  const handleRaNgoai = () => {
    pauseAndResetTrongAudio(); // Mute & reset Trong audio
    setActiveOverlay("ngoai");  // Bring Ngoai overlay to front
    playNgoaiAudio();           // Play Ngoai audio
  };

  // Handle ESC key in either overlay to close both
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        pauseAndResetNgoaiAudio();
        pauseAndResetTrongAudio();
        setActiveOverlay(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      {/* Audio elements can be rendered here if not managed inside overlays */}
      <audio ref={ngoaiAudioRef} src={ngoaiDinhLangAmAudio} />
      <audio ref={trongAudioRef} src={trongDinhLangAmAudio} />

      {activeOverlay === "ngoai" && (
        <NgoaiDinhLangAmOverlay 
          isActive={true}
          onShowInside={handleVaoTrong} // Called when "Vào trong" is clicked
          onClose={() => setActiveOverlay(null)}
          // ... other props
        />
      )}

      {activeOverlay === "trong" && (
        <TrongDinhLangAmOverlay 
          isActive={true}
          onGoBack={handleRaNgoai} // Called when "Ra ngoài" is clicked
          onClose={() => setActiveOverlay(null)}
          // ... other props
        />
      )}
    </div>
  );
};

export default OverlayManager;
