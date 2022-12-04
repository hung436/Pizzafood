import React from "react";
import Logo from "../../assets/img/Logo.png";
import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.col1}>
            <div className={css.logo}>
              <img src={Logo} alt="logo" />
            </div>

            <div className={css.desc}>
              <div className={css.contact}>
                <BsFillTelephoneInboundFill />
                <span>Hotline đặt hàng </span>
              </div>
              <a href="tel:19006099" className={css.hotline}>
                1900 9999
              </a>
            </div>
            <div className={css.socials}>
              <h4 className={css.socialsTitle}>THEO DÕI CHÚNG TÔI</h4>
              <ol>
                <li>
                  <Link to="/">
                    <AiFillFacebook width={500} height={200} />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagramSquare />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsFillTelephoneInboundFill />
                  </Link>
                </li>
              </ol>
            </div>
          </div>
          <div className={css.col2}>
            <h3 className={css.textTitle}>DANH MỤC</h3>
            <ol className={css.text}>
              <li>
                <Link to="#">Trang chủ</Link>
              </li>
              <li>
                <Link to="./menu">Menu</Link>
              </li>
              <li>
                <Link to="./booking.html">Yêu thích</Link>
              </li>
              <li>
                <Link to="./cart">Giỏ hàng </Link>
              </li>
              <li>
                <Link to="./conta">Liên hệ </Link>
              </li>
              <li>
                <Link to="#">Về chúng tôi </Link>
              </li>
            </ol>
          </div>

          <div className={css.col3}>
            <h3 className={css.textTitle}>CHĂM SÓC KHÁCH HÀNG </h3>
            <ol className={css.text}>
              <li>
                <Link to="./contact.html">Liên hệ</Link>
              </li>
              <li>
                <Link to="#">Hỗ trợ</Link>
              </li>
              <li>
                <Link to="#">Phản hồi</Link>
              </li>
            </ol>
          </div>

          <div className={css.col4}>
            <h3 className={css.textTitle}>Contact</h3>
            <ol className={css.text}>
              <li>
                <Link to="tel:0374954603">0374954603</Link>
              </li>
              <li>
                <Link to="#">Đoàn Văn Thắng</Link>
              </li>
              <li>
                <Link to="#">Huỳnh Thanh Hưng</Link>
              </li>
              <li>
                <Link to="mailto:Fodu@gmail.com">Fodu@gmail.com</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
