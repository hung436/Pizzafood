import HeroImage from "../../../../assets/img/HeroImage.png";
import Pizzal from "../../../../assets/img/p1.jpg";
import css from "./Hero.module.css";
import Cherry from "../../../../assets/img/Cherry.png";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <img src={Cherry} alt="ảnh lỗi" />
        </div>

        <div className={css.heroText}>
          <span>Đặt Hàng Nhanh</span>
          <span>Dịch Vụ Tốt</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>FUDO</span> Pizza
          </span>
        </div>

        <span className={css.miniText}>
          Với sứ mệnh “Mang đến niềm vui, sẻ chia hạnh phúc”, chúng tôi đã và
          đang nỗ lực từng ngày để mang đến những trải nghiệm ẩm thực tốt nhất
          cho tất cả những vị khách thân yêu của mình bằng những món ăn ngon và
          giao hàng nhanh chóng.
        </span>

        <Link to="/menu">
          <button className={`btn ${css.btn}`}>Đặt hàng ngay</button>
        </Link>
      </div>
      {/* right side */}
      <div className={css.right}>
        <div className={css.imagerContainer}>
          <img src={HeroImage} alt="anhloi" />
        </div>

        <div className={css.ContactUs}>
          <Link to="/contacts">
            <span>Liên hệ chúng tôi</span>
          </Link>
          <div>
            <AiOutlinePhone color="white" />
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <img src={Pizzal} alt="anhloi" />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span>7.39
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
