import React, { useState } from 'react';
import TopBarWhite from './components/TopBarWhite';
import backgroundImage from './assets/images/langduong.png';
import backgroundImage2 from './assets/images/langam.png'; // Second background image
import whiteSmoke from './assets/images/white-smoke.png';
import redSmoke from './assets/images/red-smoke.png';
import duongImage from './assets/images/duong.png'; // Image for original state
import amImage from './assets/images/am.png';       // Image for switched state

const Intro = () => {
  const [switched, setSwitched] = useState(false);

  // Original text (for Làng Dương)
  const originalText =
    'Là nơi sinh sống của người dương, với một cuộc sống êm đềm và trù phú dưới sự cai quản và chở che của các vị thần linh. Người dân bản địa và khách thập phương còn được hướng dẫn những cách đối phó với ma quỷ - những thế lực tà ác.';

  // New text (for Làng Âm)
  const switchedText =
    'Nơi trú ngụ của ma quỷ và yêu quái, được cai trị bởi Lệ Quỷ - vị dâu trưởng chết oan của gia đình địa chủ, khi chết vì oán khí quá lớn mà biến thành quỷ dữ, tạo ra cả một ngôi làng giống hệt làng Dương và sai khiến lũ ma quỷ dụ dỗ người dương cống mạng. Đủ loại ma quỷ thường xuyên trà trộn vào làng người Dương hoặc dụ dỗ người Dương bỏ mạng khi bước qua đất làng Âm.';

  return (
    <div className="relative">
      {/* Fixed Top Bar Background */}
      <div className="fixed top-0 left-0 w-full h-[70px] bg-linear-to-b from-black opacity-75 to-transparent z-20"></div>
      
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>
      
      {/* Fixed Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-10" 
        style={{ backgroundImage: `url(${switched ? backgroundImage2 : backgroundImage})` }}
      >
        {/* Smoke Container (switches sides and animates) */}
        <div 
          className={`absolute ${switched ? 'right-0 animate-slideRightToLeft' : 'left-0 animate-slideLeftToRight'} top-[60px] w-[500px] h-[400px] z-40 flex items-center justify-center`}
          style={{ 
            backgroundImage: `url(${switched ? redSmoke : whiteSmoke})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex flex-col items-center">
            {/* "Làng" */}
            <p 
              className={`text-7xl font-bold ${switched ? 'animate-slideRightToLeft' : 'animate-slideLeftToRight'}`}
              style={{ 
                fontFamily: 'LostType, sans-serif', 
                color: switched ? '#fff' : '#164a0a'
              }}
            >
              Làng
            </p>
            {/* "Dương" or "Âm" */}
            <p 
              className={`text-7xl font-bold ${switched ? 'animate-slideRightToLeft' : 'animate-slideLeftToRight'}`}
              style={{ 
                fontFamily: 'LostType, sans-serif', 
                color: switched ? '#fff' : '#164a0a'
              }}
            >
              {switched ? 'Âm' : 'Dương'}
            </p>
          </div>
        </div>
        
        {/* Long Paragraph Container (switches sides and animates) */}
        <div
          className={`absolute z-42 flex items-center justify-center w-[940px] p-[30px] ${
            switched ? 'left-[50px] top-[200px] animate-slideLeftToRight' : 'right-[50px] top-[300px] animate-slideRightToLeft'
          }`}
          style={{
            backgroundColor: switched ? 'rgba(0,0,0,0.6)' : 'rgba(228,238,202,0.6)',
          }}
        >
          <p
            className={`text-4xl text-center leading-relaxed ${
              switched ? 'text-red-400' : 'text-[var(--custom-red)]'
            }`}
            style={{ fontFamily: 'Ale, serif' }}
          >
            {switched ? switchedText : originalText}
          </p>
        </div>

        {/* Switch Button at Bottom Right */}
        <button 
          className="fixed z-50 bottom-4 right-4"
          onClick={() => setSwitched(!switched)}
        >
          <img 
            src={switched ? amImage : duongImage} 
            alt="Switch" 
            className="w-10 h-10 cursor-pointer hover:scale-110 transform transition" 
          />
        </button>
      </div>
    </div>
  );
};

export default Intro;
