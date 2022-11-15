import css from "./ListProduct.module.scss";
import p2 from "../../../../assets/img/p2.png";
import p3 from "../../../../assets/img/3.jpg";
import slide3 from "../../../../assets/img/slide3.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
function ListProduct({ data }) {
  return (
    <div className={css.menu}>
      {data &&
        data.map((item) => (
          <div key={item.id} className={css.pizza}>
            <Link to={`/product/${item.id}`}>
              <div className={css.ImageWrapper}>
                <img src={item?.images[0]?.imageLink} alt='P1' />
              </div>
            </Link>
            <span>{item.name}</span>
            <div className={css.price}>
              <span>
                <span style={{ color: "var(--themeRed)" }}>₫</span>{" "}
                {item?.productToSizes[0]?.price.toLocaleString("it-IT")}
              </span>
              <MdFavoriteBorder className={css.favorite} />
              <Link to={`/product/${item.id}`}>
                <button className={css.buy}>
                  Mua ngay
                  <BsArrowRightShort />
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListProduct;
