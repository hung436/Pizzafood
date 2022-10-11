import React from "react";
import "./Home.scss";
import Services from "./component/services/services.jsx";
import Hero from "./component/Hero/Hero.jsx";
import ListProduct from "./component/ListProduct"
import Slide from "./component/Slide/Slide";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
const ImageLink = [slide1, slide2, slide3];
const Home = () => {
  return (
    <div className="">
      <div className='h-[67px] bg-[#0b1a33] flex justify-center font-semibold text-xs w-full'>
        <ul className='flex text-white items-center justify-start space-x-5 md:w-[1140px] overflow-x-auto whitespace-nowrap'>
          <li className='underline active w-fit'>TRANG CHỦ</li>
          <li className='underline'>MENU</li>
          <li className='underline'>VỀ CHÚNG TÔI</li>
          <li className='underline'>lIÊN HỆ</li>
          <li className='underline'>TRENDING</li>
          <li className='underline'>VIDEOS</li>
        </ul>
      </div>
      <div className=''>
        <Slide ImageLink={ImageLink} />
      </div>
    <div>
    <Hero />
    </div>
    <div>
    <Services />
    </div>
    <div>
      <ListProduct/>
    </div>
    </div>
  );
};

export default Home;
