import React from 'react';
import './Home.scss';
const Home = () => {
  return (
    <div className="">
      <div className="h-[67px] bg-[#0b1a33] flex justify-center font-semibold text-xs w-full">
        <ul className="flex text-white items-center justify-start space-x-5 md:w-[1140px] overflow-x-auto whitespace-nowrap">
          <li className="underline active w-fit">NHÀ SÁNG TẠO NỘI DUNG</li>
          <li className="underline">MỚI NHẤT</li>
          <li className="underline">SERIES</li>
          <li className="underline">EDITOR' CHOICE</li>
          <li className="underline">TRENDING</li>
          <li className="underline">VIDEOS</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
