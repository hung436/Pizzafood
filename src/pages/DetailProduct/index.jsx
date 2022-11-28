import css from "./Product.module.scss";
import p2 from "../../assets/img/p2.png";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import productApi from "../../api/Product.js";
import { dispatch } from "../../app/Store/store";
import { addToCart } from "../../app/Reducer/cartSlice";
import QuantityRC from "../../components/Quantity";

function Product() {
  const { id } = useParams();
  const [Quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(0);
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [Size, setSize] = useState(null);
  const AddToCart = () => {
    try {
      const cart = {
        id: product.id,
        name: product.name,
        price: price,
        size: Size,
        quantity: Quantity,
        image: product?.images[0].imageLink,
      };
      dispatch(addToCart(cart));
      toast.success("Thêm thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Lỗi !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await productApi.getProductById(id);
      console.log(data);
      setActive(data.data.productToSizes[0].postToCategoryId);
      setPrice(data.data.productToSizes[0].price);
      setSize(data.data.productToSizes[0].size.name);

      setProduct(data.data);
      // ...
    }
    fetchData();
  }, [id]);

  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <img src={product?.images && product?.images[0].imageLink} alt='' />
      </div>
      {/* right side */}
      <div className={css.right}>
        <span>{product?.name}</span>
        <span>
          <p
            className='content'
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></p>
        </span>
        <span>
          {price?.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <div className={css.size}>
          <span>Size</span>
          <div className={css.sizeVaraints}>
            {product &&
              product.productToSizes &&
              product.productToSizes.map((size) => (
                <div
                  onClick={() => {
                    setActive(size.postToCategoryId);
                    setPrice(size.price);
                    setSize(size.size.name);
                  }}
                  className={` ${
                    active === size.postToCategoryId ? css.sizePrimary : ""
                  }`}
                >
                  {size.size.name}
                </div>
              ))}
          </div>
        </div>
        {/* quantity counter */}
        <div className={css.quantity}>
          <span>Quantity</span>
          <QuantityRC value={Quantity} onChange={setQuantity} />
        </div>
        <Link to='/cart'>
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
