import css from "./ProductCategory.module.scss";
import p1 from "../../../../assets/img/p1.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import ListProduct from "../ListProduct";
const fake = [
  { id: 1, image: "", name: "hungdt", price: "30000" },
  { id: 2, image: "", name: "hungdt", price: "30000" },
  { id: 3, image: "", name: "hungdt", price: "30000" },
];
function ProductCategory() {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span className={css.headingMain}> THỰC ĐƠN CỦA CHÚNG TÔI </span>
        <span className={css.headingProduct}>Pizza</span>
      </div>

      <ListProduct data={fake} />

      <div className={css.heading}>
        <span className={css.headingProduct}>Mì Ý</span>
      </div>

      <ListProduct data={fake} />

      <div className={css.heading}>
        <span className={css.headingProduct}>Đồ uống</span>
      </div>

      <ListProduct data={fake} />

      <div className={css.button}>
        <Link to="/menu">
          <button className={`btn ${css.btn}`}>Xem Thêm Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCategory;
