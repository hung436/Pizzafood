import css from "./ProductCategory.module.scss";
import p1 from "../../../../assets/img/p1.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import ListProduct from "../ListProduct";
import { dispatch } from "../../../../app/Store/store";
import { getProductList } from "../../../../app/Reducer/productSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ProductCategory() {
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getProductList({ pageSizes: 999, pageIndex: 0 }));
  }, []);
  const pizza = products
    .filter((product) => product.categoryId === 2)
    .slice(0, 3);
  const noodle = products
    .filter((product) => product.categoryId === 3)
    .slice(0, 3);
  const drink = products
    .filter((product) => product.categoryId === 5)
    .slice(0, 3);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span className={css.headingMain}> THỰC ĐƠN CỦA CHÚNG TÔI </span>
        <span className={css.headingProduct}>Pizza</span>
      </div>

      <ListProduct data={pizza} />

      <div className={css.heading}>
        <span className={css.headingProduct}>Mì Ý</span>
      </div>

      <ListProduct data={noodle} />

      <div className={css.heading}>
        <span className={css.headingProduct}>Đồ uống</span>
      </div>

      <ListProduct data={drink} />

      <div className={css.button}>
        <Link to='/menu'>
          <button className={`btn ${css.btn}`}>Xem Thêm Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCategory;
