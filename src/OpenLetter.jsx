import React from 'react';
import TopBarWhite from './components/TopBarWhite';

const OpenLetter = () => {
  return (
    <div className="relative">
      {/* Fixed TopBar at the top */}
      <div className="fixed top-0 left-0 w-full z-25">
        <TopBarWhite />
      </div>

      {/* Full-screen background with custom-red color */}
      <div className="bg-[var(--custom-red)] fixed h-screen w-screen">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-3xl mx-auto bg-[var(--custom-yellow)] p-8 rounded-lg shadow-lg">
            <div className="space-y-6 text-[var(--custom-red)]" style={{ fontFamily: 'Ale, serif' }}>
              <p className="text-xl leading-relaxed">
                Kính chào quý bạn thập phương,
              </p>
              
              <p className="text-lg leading-relaxed">
                "Trần Sao Âm Vậy" là một dự án phi thương mại phát triển bởi sinh viên Nguyễn Minh Khuê, hiện tại đang theo học tại Trường Đại học Quốc tế - ĐHQG TPHCM, với mục đích hỗ trợ  cho đề tài nghiên cứu "Factors influencing intention to attend at a Southern Vietnamese ghost and spirituality interactive exhibition" (tạm dịch: "Những yếu tố ảnh hưởng đến quyết định tham dự buổi triển lãm tương tác có chủ đề ma quỷ dân gian Nam Bộ").  
              </p>

              <p className="text-lg leading-relaxed">
                Thông qua website giả lập này, mình mong muốn đem đến cho quý bạn - đối tượng khảo sát của đề tài - một cái nhìn thực tế về buổi triển lãm tương tác "Trần Sao Âm Vậy", qua đó hy vọng sẽ nhận được những nhận xét công tâm nhất trong phần Khảo Sát bên dưới.
              </p>

              <p className="text-lg leading-relaxed">
                Vui lòng sử dụng tai nghe trong suốt quá trình tham quan Làng Dương - Làng Âm để mang lại trải nghiệm chân thật hơn. 
              </p>

              <p className="text-lg leading-relaxed">
                Xin chân thành cảm ơn sự quan tâm của quý bạn và rất mong chúng ta sẽ gặp nhau tại buổi triển lãm tương tác "Trần Sao Âm Vậy: Ma quỷ dân gian Nam Bộ" vào một ngày không xa.
              </p>

              <div className="mt-8">
                <p className="text-lg">Trân trọng,</p>
                <p className="text-lg mt-2">Minh Khuê</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLetter;