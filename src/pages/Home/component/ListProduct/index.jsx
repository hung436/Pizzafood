import css from "./ListProduct.module.scss";
import p2 from "../../../../assets/img/p2.png";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
function ListProduct({ data }) {
  return (
    <div className={css.menu}>
      {data.map((item) => (
        <div key={item.id} className={css.pizza}>
          <Link to="/product/id">
            <div className={css.ImageWrapper}>
              <img src={p2} alt="P1" />
            </div>
          </Link>
          <span>{item.name}</span>
          <div className={css.price}>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> {item.price}
            </span>
            <MdFavoriteBorder className={css.favorite} />
            <Link to="/product/:id">
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
