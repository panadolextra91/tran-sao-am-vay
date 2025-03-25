import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent px-4 py-3 flex justify-center z-10">
      <div className="inline-flex items-center space-x-[90px]">
        <Link
          to="/open-letter"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          THƯ NGỎ
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/intro"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          BỐI CẢNH
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/map"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          BẢN ĐỒ
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/list"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          DANH LỤC
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/survey"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          KHẢO SÁT
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/contact"
          className="text-xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          LIÊN HỆ
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
