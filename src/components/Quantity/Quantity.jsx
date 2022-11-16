import React from "react";
import LeftArrow from "../../assets/img/arrowLeft.png";
import RightArrow from "../../assets/img/arrowRight.png";
import css from "./Quantiry.module.scss";
const Quantity = ({ value = 1, onChange }) => {
  return (
    <div className={css.counter}>
      <img
        className={css.leftArrow}
        src={LeftArrow}
        onClick={(e) => {
          e.stopPropagation();
          onChange(value <= 1 ? value : value - 1);
        }}
        alt=''
      />
      <input
        type='number'
        value={value}
        onChange={(e) => {
          const value = parseInt(e.target.value);

          if (value <= 0 || !value) return onChange(value);
          return onChange(value);
        }}
        onClick={(e) => e.stopPropagation()}
      />
      <img
        className={css.rightArrow}
        src={RightArrow}
        onClick={(e) => {
          e.stopPropagation();
          onChange(value + 1);
        }}
        alt=''
      />
    </div>
  );
};

export default Quantity;
