import ListProduct from "../Home/component/ListProduct";
import css from "./menu.module.scss";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dispatch } from "../../app/Store/store";
import { getCategoryList } from "../../app/Reducer/categorySlice";
import { getProductList } from "../../app/Reducer/productSlice";
function Menu() {
  const category = useSelector((state) => state.category.categories);
  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  const [activeCategory, setActiveCategory] = useState(category[0]?.id);
  const [activeFilter, setActiveFilter] = useState(0);
  const [fillterPrice, setFillterPrice] = useState("+");
  //==================================
  useEffect(() => {
    dispatch(getCategoryList());

    dispatch(
      getProductList({
        params: { categoryId: activeCategory },
        orderBy: "price" + fillterPrice,
      })
    );
  }, [activeCategory, fillterPrice]);
  return (
    <div className={css.container}>
      <div className={css.left}>
        <nav className={css.category}>
          <h3 className={css.heading}>Danh mục</h3>
          <ul className={css.listCategory}>
            {category.map((item) => (
              <li
                className={css.categoryItem}
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
              >
                <Link
                  to=''
                  className={`${css.itemLink} ${
                    activeCategory === item.id ? css.itemActi : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={css.right}>
        <div className={css.menuCategory}>
          <h2 className={css.headingMobile}>THỰC ĐƠN</h2>
          <ul className={css.listCategory}>
            {category.map((item, index) => (
              <li
                className={css.categoryItem}
                key={index}
                onClick={() => setActiveCategory(index)}
              >
                <Link
                  to=''
                  className={`${css.itemLink} ${
                    activeCategory === index ? css.itemActi : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.filter}>
          <span className={css.filterLabel}>Sắp xếp theo</span>
          <div className={css.button}>
            <button
              className={`${css.filterBtn} ${
                activeFilter === 0 ? css.btnPrimary : ""
              }`}
              onClick={() => setActiveFilter(0)}
            >
              Phổ biến
            </button>
            <button
              className={`${css.filterBtn} ${
                activeFilter === 1 ? css.btnPrimary : ""
              }`}
              onClick={() => setActiveFilter(1)}
            >
              Mới nhất
            </button>
            <button
              className={`${css.filterBtn} ${
                activeFilter === 2 ? css.btnPrimary : ""
              }`}
              onClick={() => setActiveFilter(2)}
            >
              Bán chạy
            </button>
          </div>

          <div className={""}>
            <select
              name=''
              id=''
              value={fillterPrice}
              onChange={(e) => setFillterPrice(e.target.value)}
            >
              <option value='+'>Thấp đến Cao</option>
              <option value='-'>Cao đến thấp</option>
            </select>
            {/* <span className={css.selectInputLabel}>Giá</span>
            <BsChevronDown className={css.selectInputIcon} /> */}

            {/* <ul className={css.selectInputList}>
              <li className={css.selectInputItem}>
                <Link to='' className={css.selectInputLink}>
                  Giá: Thấp đến Cao
                </Link>
              </li>
              <li className={css.selectInputItem}>
                <Link to='' className={css.selectInputLink}>
                  Giá: Cao đến thấp
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

        <div className={css.listProduct}>
          <ListProduct data={products} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
