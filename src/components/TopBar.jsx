import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent items-center text-center flex justify-center z-10">
      <div className="inline-flex items-center space-x-[60px]">
      <Link
          to="/"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          TRANG CHỦ
        </Link>

        <span className="text-[avar(--custom-red)]">|</span>

        <Link
          to="/open-letter"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          THƯ NGỎ
        </Link>

        <span className="text-[avar(--custom-red)]">|</span>

        <Link
          to="/intro"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          BỐI CẢNH
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/map"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          BẢN ĐỒ
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/list"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          DANH LỤC
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/survey"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          KHẢO SÁT
        </Link>

        <span className="text-[var(--custom-red)]">|</span>

        <Link
          to="/contact"
          className="text-2xl text-[var(--custom-red)] hover:scale-110 transform transition cursor-pointer"
          style={{ fontFamily: 'LostType, sans-serif' }}
        >
          LIÊN HỆ
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
