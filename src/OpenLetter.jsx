import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import thuNgo from './assets/images/thu_ngo.png';
import yellow from './assets/images/yellow.png';

const OpenLetter = () => {
  return (
    <div className="relative">
      {/* Fixed TopBar at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>

      {/* Full-screen background with custom-red color */}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen flex flex-col items-center pt-[100px]">
        {/* Yellow smoke effects */}
        <img 
          src={yellow} 
          alt="Yellow" 
          className="absolute top-20 right-[-200px] w-[300px] h-auto" 
        />
        <img 
          src={yellow} 
          alt="Yellow" 
          className="absolute bottom-2 left-0 w-[300px] h-auto" 
        />

        <div className="container mx-auto px-4 pb-20 h-full flex items-center justify-center">
          <img 
            src={thuNgo} 
            alt="Thư ngỏ" 
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenLetter;