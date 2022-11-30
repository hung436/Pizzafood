import css from "./Order.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function Order() {
  return (
    <div className={css.container}>
      <span className={css.heading}>Đơn Hàng Của Bạn</span>
      <div className={css.details}>
        <div>
          <span>Mã đơn hàng</span>
          <span>111111111</span>
        </div>
        <div>
          <span>Tên Khách hàng</span>
          <span>Nguyễn Văn A</span>
        </div>
        <div>
          <span>Địa chỉ khách hàng </span>
          <span>Âu Cơ, phường 14, quận 11 thành phố HCM</span>
        </div>

        <div>
          <span>Số điện thoại</span>
          <span>111111111</span>
        </div>
        <div>
          <span>Tổng tiền</span>
          <span>111111111 đồng</span>
        </div>
      </div>
      <div className={css.btnOrder}>
        <Link to="/">
          <button className="btn">Trang chủ</button>
        </Link>
        <Link to="/menu">
          <button className="btn">Đặt Thêm</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
