import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import yellow from './assets/images/yellow.png';
import orangeSmoke from './assets/images/orage-smoke.png';

const Contact = () => {
  return (
    <div className="relative">
      {/* Fixed TopBarWhite at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>

      {/* Full-screen background with custom-red color */}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen">
      <div className="absolute bottom-60 left-15 transform -translate-x-10">
          <div 
            className="relative w-[380px] h-[380px] bg-transparent"
            style={{ 
              backgroundImage: `url(${orangeSmoke})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[var(--custom-yellow)] text-7xl font-bold" style={{fontFamily: "LostType, sans-serif"}}>Liên</p>
              <p className="text-[var(--custom-yellow)] text-7xl font-bold" style={{fontFamily: "LostType, sans-serif"}}>Hệ</p>
            </div>
          </div>
        </div>
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

export default Contact;
