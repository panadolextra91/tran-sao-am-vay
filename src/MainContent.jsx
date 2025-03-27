import React from 'react';
import TopBar from './components/TopBar';
import './index.css';
import Preloader from './components/Preloader';

function MainContent() {
  return (
    <div>
      <TopBar />
      <div>
        <div className="bg-[var(--custom-yellow)] h-[50vh] flex items-center justify-center animate-slide-down">
          <p
            className="m-0 text-[130px] mt-[170px]"
            style={{ fontFamily: 'LostType, sans-serif', color: 'var(--custom-red)' }}
          >
            Trần Sao
          </p>
        </div>
  
        <div className="bg-[var(--custom-red)] h-[50vh] flex items-center justify-center animate-slide-up">
          <p
            className="mb-[240px] text-white text-[130px]"
            style={{ fontFamily: 'LostType, sans-serif' }}
          >
            Âm Vậy
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;