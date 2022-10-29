import css from "./Product.module.scss";
import p2 from "../../assets/img/p2.png";
import LeftArrow from "../../assets/img/arrowLeft.png";
import RightArrow from "../../assets/img/arrowRight.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function Product() {
  const [Quantity, setQuantity] = useState(1);

  const handleQuanDec = () => {
    if (Quantity > 1) {
      setQuantity((prev) => prev * 1 - 1);
    }
  };
  const handleQuanCre = () => {
    setQuantity((prev) => prev * 1 + 1);
  };
  const AddToCart = () => {
    toast.success("Thêm thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <img src={p2} alt="" />
      </div>
      {/* right side */}
      <div className={css.right}>
        <span>Pizza Bánh Xèo Tôm Nhảy</span>
        <span>
          Thổi bùng vị giác cùng sự kết hợp mới lạ đến từ hương vị bánh xèo
          truyền thống trên nền bánh pizza, hòa quyện xốt Mayonnaise, phô mai
          Mozzarella và nguyên liệu Tôm Nhảy cho khẩu vị cũng phải nhún nhảy từ
          lát bánh đầu tiên!
        </span>
        <span>149,000đ</span>
        <div className={css.size}>
          <span>Size</span>
          <div className={css.sizeVaraints}>
            <div>Nhỏ</div>
            <div>Trung Bình</div>
            <div>Lớn</div>
          </div>
        </div>
        {/* quantity counter */}
        <div className={css.quantity}>
          <span>Quantity</span>
          <div className={css.counter}>
            <img
              className={css.leftArrow}
              src={LeftArrow}
              onClick={handleQuanDec}
              alt=""
            />
            <input
              type="number"
              value={Quantity}
              onChange={(e) => {
                if (e.target.value > 1 || e.target.value == "")
                  setQuantity(e.target.value);
              }}
            />
            <img
              className={css.rightArrow}
              src={RightArrow}
              onClick={handleQuanCre}
              alt=""
            />
          </div>
        </div>
        <Link to="/cart">
          <div onClick={AddToCart} className={`btn ${css.btn}`}>
            Thêm vào giỏ hàng
          </div>
        </Link>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Product;
