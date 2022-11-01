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
const ImageLink = [slide1, slide2, slide3];
const Home = () => {
  return (
    <div className="">
      <div className="h-[67px] bg-[#F54748] flex justify-center font-semibold text-xs w-full">
        <ul className="flex text-sm text-white items-center justify-around  md:w-[1140px] overflow-x-auto whitespace-nowrap">
          <li className="underline active w-fit">TRANG CHỦ</li>
          <Link to="/menu" className="underline">
            MENU
          </Link>
          <li className="underline">YÊU THÍCH</li>
          <Link to="/cart">
            <li className="underline">GIỎ HÀNG</li>
          </Link>
          <li className="underline">LIÊN HỆ</li>
          <li className="underline">VỀ CHÚNG TÔI</li>
        </ul>
      </div>
      <div className="">
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
