import Tippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
import { AiOutlineCloseCircle, AiOutlineLoading } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import css from "./Search.module.scss";
// import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../Popper/index.jsx";
import { SearchResult } from "../../app/Reducer/productSlice";
import { dispatch } from "../../app/Store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Search() {
  const { searchResult } = useSelector((state) => state.product);
  const [searchValue, setSearchValue] = useState(null);
  // const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    dispatch(SearchResult(searchValue));
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");

    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={css.searchResult} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            <h4 className={css.searchTitle}>Sản phẩm</h4>
            {searchResult.map((product) => (
              <div
                key={product.id}
                className={css.listProduct}
                onClick={() => {
                  navigate("/product/" + product.id);
                  setShowResult(false);
                }}
              >
                <img
                  className={css?.image}
                  src={product?.images[0]?.imageLink}
                  alt='Pizza'
                />
                <div className={css?.info}>
                  <p className={css?.name}>{product?.name}</p>
                  <span className={css.price}>
                    {product?.productToSizes[0]?.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={css.search}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder='Nhập để tìm kiếm sản phẩm '
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {/* khi có searchValue mới hiện button clear */}
        {!!searchValue && (
          <button className={css.clear} onClick={handleClear}>
            <AiOutlineCloseCircle />
          </button>
        )}
        {/* <AiOutlineLoading className={css.loading}/> */}
        <button className={css.searchBtn}>
          <BsSearch />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
