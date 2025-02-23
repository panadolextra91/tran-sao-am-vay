import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import mapImage from './assets/images/map.png';

const MapPage = () => {
  return (
    <div className="relative">
      {/* TopBarWhite stays at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>
      <div className='bg-[var(--custom-red)] fixed h-screen w-screen'>
      <div className="flex items-center justify-center h-screen mt-2">
        <img 
          src={mapImage} 
          alt="Map" 
          className="max-w-full max-h-full animate-fade-in-no-delay" 
        />
      </div>
    </div>
      </div>
  );
};

export default MapPage;
