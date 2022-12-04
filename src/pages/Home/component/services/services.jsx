import css from "./services.module.scss";
import s1 from "../../../../assets/img/s1.png";
import s2 from "../../../../assets/img/s2.png";
import s3 from "../../../../assets/img/s3.png";

function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>PIZZA NGON - GIÁ RẺ</span>
        <span>Món Ăn Yêu Thích</span>
        <span>Giao Hàng Tận Nơi</span>
      </div>

      {/* features */}

      <div className={css.services}>
        <div className={css.features}>
          <div className={css.imageWrapper}>
            <img src={s1} alt="anh1" />
          </div>
          <span>Đặt hàng dễ dàng</span>
          <span>Bạn chỉ cần vài cú chạm là có ngay món ăn yêu thích</span>
        </div>
        <div className={css.features}>
          <div className={css.imageWrapper}>
            <img src={s2} alt="anh2" />
          </div>
          <span>Vận chuyển nhanh chóng</span>
          <span>Giao hàng luôn đúng hẹn làm hài lòng khách hàng</span>
        </div>
        <div className={css.features}>
          <div className={css.imageWrapper}>
            <img src={s3} alt="anh3" />
          </div>
          <span>Chất lượng tốt</span>
          <span>
            Đối với chúng tôi không chỉ nhanh, chất lượng còn là số một
          </span>
        </div>
      </div>
    </>
  );
}

export default Services;
