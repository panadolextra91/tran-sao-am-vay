import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent px-4 py-3 flex justify-center z-10">
      <div className="inline-flex items-center space-x-[90px]">
        <Link
          to="/intro"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          Giới thiệu
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/map"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          Bản đồ
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/list"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          Mục lục
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/contact"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'Ale, serif' }}
        >
          Liên hệ
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
