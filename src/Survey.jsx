import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import yellow from './assets/images/yellow.png';

const Survey = () => {
  return (
    <div className="relative">
      {/* Fixed TopBarWhite at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>
      
      {/* Background with custom-red color */}
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

        {/* Rest of the content */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-3xl mx-auto bg-[var(--custom-yellow)] p-8 rounded-lg shadow-lg">
            <div className="text-center text-[var(--custom-red)]" style={{ fontFamily: 'Ale, serif' }}>
              <h1 className="text-3xl font-bold mb-4">The survey will be available here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
