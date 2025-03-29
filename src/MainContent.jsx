import React from 'react';
import TopBarWhite from './components/TopBarWhite';
import trangChuBg from './assets/images/trang_chu.jpg';
import './index.css';

function MainContent() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${trangChuBg})` }}
      ></div>

      {/* Fixed Top Bar Background */}
      <div className="fixed top-0 left-0 w-full h-[70px] bg-linear-to-b from-black opacity-75 to-transparent z-20"></div>
      
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>    </div>
  );
}

export default MainContent;
