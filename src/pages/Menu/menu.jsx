import ListProduct from "../Home/component/ListProduct";
import css from "./menu.module.scss";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
function Menu() {
  const fake = [
    { id: 1, image: "", name: "hungdt", price: "30000" },
    { id: 2, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
  ];
  const category = ["Pizza", "Mì Ý", "Salad", "Thức uống"];
  return (
    <div className={css.container}>
      <div className={css.right}>
        <nav className={css.category}>
          <h3 className={css.heading}>Danh mục</h3>
          <ul className={css.listCategory}>
            {category.map((item) => (
              <li className={`${css.categoryItem} ${css.ItemActi} `} key={item}>
                <Link to="" className={css.itemLink}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={css.left}>
        <div className={css.filter}>
          <span class={css.filterLabel}>Sắp xếp theo</span>
          <button className={`${css.filterBtn} ${css.btnPrimary}`}>
            Phổ biến
          </button>
          <button className={css.filterBtn}>Mới nhất</button>
          <button className={css.filterBtn}>Bán chạy</button>

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
