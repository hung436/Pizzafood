import css from "./Order.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { dispatch } from "../../../app/Store/store";
import { getInfor } from "../../../app/Reducer/authSlice";
import { useSelector } from "react-redux";
function CartSucces() {
  const { userOrder, userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getInfor());
  }, []);
  return (
    <div className={css.container}>
      <span className={css.heading}>Đơn Hàng Của Bạn</span>
      <div className={css.details}>
        <div>
          <span>Mã đơn hàng</span>
          <span>{userOrder && userOrder[userOrder.length - 1]?.id}</span>
        </div>
        <div>
          <span>Tên Khách hàng</span>
          <span>{userInfo?.Name}</span>
        </div>
        <div>
          <span>Địa chỉ khách hàng </span>
          <span>{userOrder && userOrder[userOrder.length - 1]?.address}</span>
        </div>

        <div>
          <span>Số điện thoại</span>
          <span>{userOrder && userOrder[userOrder.length - 1]?.phone}</span>
        </div>
        <div>
          <span>Tổng tiền</span>
          <span>
            {userOrder && userOrder[userOrder.length - 1]?.totalPrice}
          </span>
        </div>
      </div>
      <div className={css.btnOrder}>
        <Link to='/'>
          <button className='btn'>Trang chủ</button>
        </Link>
        <Link to='/menu'>
          <button className='btn'>Đặt Thêm</button>
        </Link>
      </div>
    </div>
  );
}

export default CartSucces;
