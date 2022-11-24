import css from "./Cart.module.scss";
import p2 from "../../assets/img/p2.png";
import { useSelector } from "react-redux";
import { dispatch } from "../../app/Store/store";
import { changeToCart, deleteItemCart } from "../../app/Reducer/cartSlice";

import { Button, Empty, InputNumber } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import OrderModal from "../../components/OrderModal/OrderModal";
export default function Cart() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const carts = useSelector((state) => state.cart.carts);
  // const [quantity, setQuantity] = useState(null);
  const handleChangeQuantity = (id, size, value) => {
    console.log(id, value);
    dispatch(changeToCart({ id, size: size, quantity: value }));
  };
  const handleOnDelivery = () => {
    setShowModal(true);
  };
  return (
    <div className={css.container}>
      {/* details */}
      {carts && carts.length > 0 ? (
        <>
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
                {carts &&
                  carts.map((cart) => (
                    <tr key={cart.id}>
                      <td
                        className={css.imageTd}
                        onClick={() => navigate(`/product/${cart.id}`)}
                      >
                        <img src={cart.image} alt='logo product' />
                      </td>
                      <td onClick={() => navigate(`/product/${cart.id}`)}>
                        {cart.name}
                      </td>
                      <td>{cart.size}</td>
                      <td>
                        {cart.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </td>
                      <td className=''>
                        <InputNumber
                          min={1}
                          max={10}
                          defaultValue={cart.quantity}
                          onChange={(value) =>
                            handleChangeQuantity(cart.id, cart.size, value)
                          }
                        />
                      </td>
                      <td>
                        {(cart.price * cart.quantity).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                      </td>
                      <td
                        onClick={() =>
                          dispatch(
                            deleteItemCart({ id: cart.id, size: cart.size })
                          )
                        }
                        style={{
                          color: "var(--themeRed)",
                          cursor: "pointer",
                        }}
                      >
                        <FiDelete />
                      </td>
                    </tr>
                  ))}
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
              <button className='btn' onClick={handleOnDelivery}>
                Thanh toán khi giao hàng
              </button>
              <button className='btn'>Thanh toán ngay</button>
            </div>
            <OrderModal
              opened={showModal === true}
              setOpened={setShowModal}
              showModal={showModal}
            />
          </div>
          <div className={css.cartMobile}>
            {/* chưa có sản phẩm */}
            {/* <image
       </div>

      
      </div>
      {/* Modal */}

            <image
              src='./assets/img/no_cart.png'
              alt=''
              class='header__cart-no-cart-img'
            />
            <span class='header__cart-list--no-cart-msg'>Chưa có sản phẩm</span>

            <h4 className={css.headingMobile}>Sản phẩm đã thêm </h4>
            {/* <!-- giỏ hàng --> */}
            <ul className={css.listItemMobile}>
              {/* <!-- cart item --> */}
              {carts.map((cart) => (
                <li key={cart.id} className={css.cartItemMobile}>
                  <img src={cart.image} alt='' className={css.imgCartMobile} />
                  <div className={css.itemInfoMobile}>
                    <div className={css.itemHeadMobile}>
                      <h5 className={css.itemNameMobile}>{cart.name}</h5>
                      <div className={css.priceWrapMobile}>
                        <span className={css.itemPriceMobile}>
                          {cart.price}{" "}
                        </span>
                        <span className={css.itemMultiply}>x </span>
                        <span className={css.itemQnt}>{cart.quantity}</span>
                      </div>
                    </div>
                    <div className={css.body}>
                      <span className={css.description}>
                        Size: {cart.size}{" "}
                      </span>
                      <span
                        className={css.remove}
                        onClick={() => dispatch(deleteItemCart(cart.id))}
                      >
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* <a href="#" class="header__cart-view-cart btn btn--primary">
          Xem giỏ hàng
        </a> */}
          </div>
        </>
      ) : (
        <div className='flex items-center justify-center'>
          <Empty
            image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
            imageStyle={{
              height: 60,
            }}
            description={
              <span>
                Customize <a href='#API'>Description</a>
              </span>
            }
          >
            <Button type='primary'>Create Now</Button>
          </Empty>
        </div>
      )}
    </div>
  );
}
