import css from "./Cart.module.scss";
import p2 from "../../assets/img/p2.png";
// const fake = [
//   { id: 1, image: "", name: "hungdt", price: "30000" },
//   { id: 2, image: "", name: "hungdt", price: "30000" },
//   { id: 3, image: "", name: "hungdt", price: "30000" },
// ];
function Cart() {
  return (
    <div className={css.container}>
      {/* details */}
      <div className={css.details}>
        <table className={css.table}>
          <thead>
            <th>Pizza</th>
            <th>Tên sản phẩm</th>
            <th>Size</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền </th>
            <th></th>
          </thead>

          <tbody className={css.tbody}>
            <tr>
              <td className={css.imageTd}>
                <img src={p2} />
              </td>
              <td>Pizza bánh xèo tôm nhảy</td>
              <td>Nhỏ</td>
              <td>49.000 đồng</td>
              <td>2</td>
              <td>49.000 đồng </td>
              <td
                style={{
                  color: "var(--themeRed)",
                  cursor: "pointer",
                }}
              >
                x
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* summart */}
      <div className={css.cart}>
        <span>Cart</span>
        <div className={css.CartDetails}>
          <div>
            <span>Items</span>
            <span>2</span>
          </div>

          <div>
            <span>Total</span>
            <span>80.000 đồng</span>
          </div>
        </div>

        <div className={css.buttons}>
          <button className="btn">Pay on Delivery</button>
          <button className="btn">Pay Now</button>
        </div>
      </div>

      <div className={css.cartMobile}>
        {/* chưa có sản phẩm */}
        {/* <image
          src="./assets/img/no_cart.png"
          alt=""
          class="header__cart-no-cart-img"
        />
        <span class="header__cart-list--no-cart-msg">Chưa có sản phẩm</span> */}

        <h4 className={css.headingMobile}>Sản phẩm đã thêm </h4>
        {/* <!-- giỏ hàng --> */}
        <ul className={css.listItemMobile}>
          {/* <!-- cart item --> */}

          <li className={css.cartItemMobile}>
            <img src={p2} alt="" className={css.imgCartMobile} />
            <div className={css.itemInfoMobile}>
              <div className={css.itemHeadMobile}>
                <h5 className={css.itemNameMobile}>
                  Pizza Hải Sản Pesto Xanh aaaaaaaaaa
                </h5>
                <div className={css.priceWrapMobile}>
                  <span className={css.itemPriceMobile}>65.000 </span>
                  <span className={css.itemMultiply}>x </span>
                  <span className={css.itemQnt}>1</span>
                </div>
              </div>
              <div className={css.body}>
                <span className={css.description}>Size: Nhỏ </span>
                <span className={css.remove}>Xóa</span>
              </div>
            </div>
          </li>
        </ul>
        {/* <a href="#" class="header__cart-view-cart btn btn--primary">
          Xem giỏ hàng
        </a> */}
      </div>
    </div>
  );
}

export default Cart;
