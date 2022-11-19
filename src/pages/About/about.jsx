import React from "react";
import css from "./about.module.scss";
import pic1 from "./workplace.jpg";
import pic2 from "./tamnhin.jpg";
import pic3 from "./muctieu.jpg";
import pic4 from "./sumenh.jpg";

const About = () => {
  return (
    <div className={css.about}>
      <div className={css.content__top}>
        <div className="content">
          <h1 className={css.aboutus}>Về chúng tôi</h1>
          <p>
            FUHO Pizza Việt Nam - nơi bạn được thỏa sức thể hiện chính mình với
            cơ hội hấp dẫn để phát triển cá nhân lẫn nghề nghiệp toàn diện!
            Chúng tôi tân tâm mang đến một môi trường làm việc thân thiện và
            chuyên nghiệp cho từng nhân viên, nỗ lực hoàn thiện giá trị “Cùng
            nhau hướng đến một FUHO Pizza TUYỆT VỜI!”
          </p>
        </div>
      </div>
      <div className={css.contents}>
        <div className={css.content}>
          <div className={css.icon}>
            <img src={pic2} alt="Tam nhin" />
          </div>
          <h2>Tầm nhìn</h2>
          <p>
            Trở thành thương hiệu tăng trưởng nhanh nhất trong thị trường ăn
            uống Việt Nam, thông qua sự vượt trội về phát triển con người và cải
            tiến đột phá
          </p>
        </div>
        <div className={css.content}>
          <div className={css.icon}>
            <img src={pic4} alt="Su menh" />
          </div>
          <h2>Sứ mệnh</h2>
          <p>
            Đem lại những khoảnh khắc sẻ chia hạnh phúc đến tất cả mọi người.
            Chúng tôi không ngừng nỗ lực đem lại niềm vui đến khách hàng với
            dịch vụ nhanh chóng, dễ dàng và đồ ăn ngon, giá hợp lý cùng tiêu
            chuẩn cao về an toàn và chất lượng.
          </p>
        </div>
        <div className={css.content}>
          <div className={css.icon}>
            <img src={pic3} alt="Muc tieu" />
          </div>
          <h2>Mục tiêu</h2>
          <p>
            Luôn xây dựng và phát triển là điều tiên quyết của việc kinh doanh
            chúng tôi, nhằm thúc đẩy thị trường và trở thành thương hiệu hàng
            đầu Việt Nam
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
