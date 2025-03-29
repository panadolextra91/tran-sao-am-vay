import React, { useState } from 'react';
import TopBarWhite from './components/TopBarWhite';
import backgroundImage from './assets/images/duong.jpg';
import backgroundImage2 from './assets/images/am.jpg'; // Second background image
import whiteSmoke from './assets/images/white-smoke.png';
import redSmoke from './assets/images/red-smoke.png';
import duongImage from './assets/images/duong.png'; // Image for original state
import amImage from './assets/images/am.png';       // Image for switched state

const Intro = () => {
  const [switched, setSwitched] = useState(false);

  // Original text (for Làng Dương)
  const originalText =
    'Ở miệt Nam Kỳ lục tỉnh năm xưa,  có một ngôi làng trù phú, dân gian quen gọi là làng Dương. Người ta truyền miệng nhau rằng, sở dĩ có tên ấy cũng là vì nơi này quanh năm chan hòa nắng ấm, như thể ánh dương chưa bao giờ phai. Không ai biết ngôi làng đã có từ bao giờ, chỉ biết con cháu làng Dương đã đời đời thừa hưởng những thửa ruộng xanh mướt bạt ngàn, đến độ cò đậu rồi cũng chẳng buồn bay đi. Cuộc sống ngó chừng là no ấm lắm.\n\nMỗi năm, cứ đến tiết Hạ Chí, đại điền chủ lớn nhất trong làng sẽ đứng ra tổ chức lễ hội, vừa là để tạ lễ thần linh đã phù hộ cho mảnh đất này được sung túc, vừa là dịp ân xá cho những kẻ trót mang tội vạ trong làng. Ban đầu chỉ là hội hè của người làng Dương, lâu dần lại nổi tiếng khắp cả một vùng sông nước, khiến cho nam thanh nữ tú từ khắp nơi nô nức về đây trẩy hội.\n\nÍt người biết đằng sau vẻ ngoài yên bình đó, là một bí mật kinh hoàng…';

  // New text (for Làng Âm)
  const switchedText =
    'Dưới ánh trăng lạnh lẽo, phía bên kia con rạch sương mù giăng kín bóng dáng của một ngôi làng kỳ dị dần dần lộ ra - làng Âm. Lệ Quỷ - oan hồn người con dâu trưởng nhà đại điền chủ, kẻ bị hành hạ đến quẫn bách phải treo cổ tự vẫn, lại bị vùi xác tức tưởi dưới đáy giếng năm nào , cùng với lũ quỷ quái lâu la của ả đã thành công dựng lại một ảo ảnh phản chiếu chính xác làng Dương, ngay khi trăng rằm tháng Bảy vừa tròn vành vạnh. \n\nRằm tháng Bảy - ngày làng Dương tưng bừng mở hội trong năm nay, vừa hay cũng là lúc Quỷ Môn quan mở cửa. Lệ Quỷ chẳng thể bỏ lỡ cơ hội trả thù ngàn năm có một, lập tức lệnh cho lũ yêu ma giả dạng người trần lẻn sang làng Dương từ sớm, trà trộn vào đám đông, lôi kéo người ta vào chốn ma quỷ ngự trị, đặng dễ dàng chiếm hồn đoạt phách.\n\nNhà đại điền chủ giết bao nhiêu người, ả sẽ bắt bọn chúng đền bấy nhiêu mạng…';

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
              className={`text-8xl font-bold ${switched ? 'animate-slideRightToLeft' : 'animate-slideLeftToRight'}`}
              style={{ 
                fontFamily: 'LostType, sans-serif', 
                color: switched ? '#fff' : '#164a0a'
              }}
            >
              Làng
            </p>
            {/* "Dương" or "Âm" */}
            <p 
              className={`text-8xl font-bold ${switched ? 'animate-slideRightToLeft' : 'animate-slideLeftToRight'}`}
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
  className={`absolute z-42 rounded-3xl flex flex-col items-left justify-left w-[950px] p-[30px] !pr-[20px] !pl-[20px] ${
    switched ? 'left-[50px] top-[150px] animate-slideLeftToRight' : 'right-[50px] top-[200px] animate-slideRightToLeft'
  }`}
  style={{
    backgroundColor: switched ? 'rgba(0,0,0,0.3)' : 'rgba(228, 238, 202, 0.6)',
  }}
>
  { (switched ? switchedText : originalText)
      .split('\n\n')
      .map((paragraph, index) => (
        <p
          key={index}
          className={`text-2xl text-left leading-relaxed mb-4 ${
            switched ? 'text-red-400' : 'text-[var(--custom-red)]'
          }`}
          style={{ fontFamily: 'Ale, serif' }}
        >
          {paragraph}
        </p>
      ))
  }
</div>


        {/* Switch Button at Bottom Right */}
        <button 
          className="fixed z-50 bottom-4 left-4"
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
