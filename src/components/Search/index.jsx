import Tippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";
import { AiOutlineCloseCircle, AiOutlineLoading } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Logo from "../../assets/img/Logo.png";
import css from "./Search.module.scss";
// import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../Popper/index.jsx";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 1]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
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
            <div className={css.listProduct}>
              <img className={css.image} src={Logo} alt='Pizza' />
              <div className={css.info}>
                <p className={css.name}>Pizza thập cẩm</p>
                <span className={css.price}>50.000đ</span>
              </div>
            </div>
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
