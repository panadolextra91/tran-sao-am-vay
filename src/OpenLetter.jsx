import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import thuNgo from './assets/images/thu_ngo.png';
import yellow from './assets/images/yellow.png';

const OpenLetter = () => {
  return (
    <div className="relative h-screen bg-[var(--custom-red)]">
      {/* Fixed TopBar at the top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBarWhite />
      </div>

      {/* Full-screen container with background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thuNgo})` }}
      >
        {/* Optional: Yellow smoke effects */}
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
      </div>
    </div>
  );
};

export default OpenLetter;
