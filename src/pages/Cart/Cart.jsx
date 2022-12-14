import css from "./Cart.module.scss";
import p2 from "../../assets/img/p2.png";
import noCart from "../../assets/img/no-cart.png";
import { useSelector } from "react-redux";
import { dispatch } from "../../app/Store/store";
import { changeToCart, deleteItemCart } from "../../app/Reducer/cartSlice";

import { Button, Empty, InputNumber, message, Steps } from "antd";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import OrderModal from "../../components/OrderModal/OrderModal";
import {
  cartItemsCountSelector,
  cartTotalSelector,
} from "../../app/Reducer/selector";
import { toast } from "react-toastify";
const steps = [
  {
    title: "Giỏ hàng của tôi",
    content: <Button>asdds</Button>,
  },
  {
    title: "Thanh toán",
    content: "Second-content",
  },
  {
    title: "Hoàn tất",
    content: "Last-content",
  },
];
export default function Cart() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const { carts } = useSelector((state) => state.cart);
  // const [quantity, setQuantity] = useState(null);
  const handleChangeQuantity = (id, size, value) => {
    console.log(id, value);
    dispatch(changeToCart({ id, size: size, quantity: value }));
  };
  const handleOnDelivery = () => {
    setShowModal(true);
  };
  ///=========Steps
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const price = useSelector(cartTotalSelector);
  const total = useSelector(cartItemsCountSelector);
  if (carts && carts.length < 1)
    return (
      <div className='flex items-center justify-center ml-300'>
        <Empty
          image={noCart}
          imageStyle={{
            height: 300,
            width: 500,
          }}
          description={<span className={css.textEmpty}>Giỏ hàng trống</span>}
        >
          <Button type='primary'>Create Now</Button>
        </Empty>
      </div>
    );
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <div className={css.container}>
      {/* details */}

      <>
        <div className={css.details}>
          {/* <Steps current={current} items={items} />
          <div className='steps-content'>{steps[current].content}</div> */}
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
          <div className='steps-action'>
            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type='primary'
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
        {/* summart */}
        <div className={css.cart}>
          <span>Tổng tiền</span>
          <div className={css.CartDetails}>
            <div>
              <span>Items</span>
              <span>{total}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{price} đồng</span>
            </div>
          </div>

          <div className={css.buttons}>
            <button
              className='btn'
              onClick={() => {
                userInfo
                  ? handleOnDelivery()
                  : toast.warn("Đăng nhập để thanh toán");
              }}
            >
              Thanh toán khi giao hàng
            </button>
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
          {/* <span class='header__cart-list--no-cart-msg'>Chưa có sản phẩm</span> */}

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
                      <span className={css.itemPriceMobile}>{cart.price} </span>
                      <span className={css.itemMultiply}>x </span>
                      <span className={css.itemQnt}>{cart.quantity}</span>
                    </div>
                  </div>
                  <div className={css.body}>
                    <span className={css.description}>Size: {cart.size} </span>
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
    </div>
  );
}
