import React from "react";
import "./Home.scss";
import Services from "./component/services/services.jsx";
import Hero from "./component/Hero/Hero.jsx";
import ListProduct from "./component/ListProduct";
import Slide from "./component/Slide/Slide";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import ProductCategory from "./component/ProductCategory";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/contacts";
import About from "../About/about";
const ImageLink = [slide1, slide2, slide3];
const Home = () => {
  return (
    <div className=''>
      <div className='h-[67px] bg-[#F54748] flex md:justify-center font-semibold text-xs w-full'>
        <ul className='flex md:text-sm text-xs text-white md:justify-around items-center md:gap-0 gap-x-5  md:w-[1140px] overflow-x-auto whitespace-nowrap'>
          <li className='underline active w-fit'>TRANG CHỦ</li>
          <Link to='/menu' className='underline'>
            MENU
          </Link>
          <li className='underline'>YÊU THÍCH</li>
          <Link to='/cart'>
            <li className='underline'>GIỎ HÀNG</li>
          </Link>
          <Link to='/contacts' className='underline'>
            LIÊN HỆ
          </Link>
          <Link to='/about' className='underline'>
            VỀ CHÚNG TÔI
          </Link>
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
        <ProductCategory />
        {/* <ListProduct/> */}
      </div>
    </div>
  );
};

export default Home;
