import ListProduct from "../Home/component/ListProduct";
import css from "./menu.module.scss";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
function Menu() {
  const fake = [
    { id: 1, image: "", name: "hungdt", price: "30000" },
    { id: 2, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
  ];
  const category = ["Pizza", "Mì Ý", "Salad", "Thức uống"];
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <div className={css.container}>
      <div className={css.left}>
        <nav className={css.category}>
          <h3 className={css.heading}>Danh mục</h3>
          <ul className={css.listCategory}>
            {category.map((item, index) => (
              <li
                className={css.categoryItem}
                key={index}
                onClick={() => setActiveCategory(index)}
              >
                <Link
                  to=""
                  className={`${css.itemLink} ${
                    activeCategory === index ? css.itemActi : ""
                  }`}
                >
                  {item}
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
                  to=""
                  className={`${css.itemLink} ${
                    activeCategory === index ? css.itemActi : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.filter}>
          <span class={css.filterLabel}>Sắp xếp theo</span>
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

          <div className={css.selectInput}>
            <span className={css.selectInputLabel}>Giá</span>
            <BsChevronDown className={css.selectInputIcon} />

            <ul className={css.selectInputList}>
              <li className={css.selectInputItem}>
                <Link to="" className={css.selectInputLink}>
                  Giá: Thấp đến Cao
                </Link>
              </li>
              <li className={css.selectInputItem}>
                <Link to="" className={css.selectInputLink}>
                  Giá: Cao đến thấp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.listProduct}>
          <ListProduct data={fake} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
