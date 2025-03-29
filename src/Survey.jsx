import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import yellow from './assets/images/yellow.png';
import khaoSat from './assets/images/khao_sat.png';

const Survey = () => {
  return (
    <div className="relative h-screen bg-[var(--custom-red)]">
      {/* Fixed TopBarWhite at the top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBarWhite />
      </div>

      {/* Full-screen container with background image */}
      <div 
        className="fixed inset-0"
        style={{ 
          backgroundImage: `url(${khaoSat})`, 
          backgroundSize: '81%',    // scales down the image
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
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
        {/* Hotspot that navigates to the survey link in a new tab */}
        <a 
          href="https://forms.gle/DTxfcyFRm4zKizJ96" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute rounded-4xl"
          style={{
            left: '33.1%',        // Adjust this value to position the hotspot horizontally
            top: '43.5%',         // Adjust this value to position the hotspot vertically
            width: '490px',     // Adjust the hotspot width as needed
            height: '102px',    // Adjust the hotspot height as needed
            cursor: 'pointer'
          }}
        >
        </a>
      </div>
    </div>
  );
};

export default Survey;
