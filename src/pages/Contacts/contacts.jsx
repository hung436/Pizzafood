import React from "react";
import css from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={css.container}>
      <p className={css.our}>Liên hệ với chúng tôi</p>
      <p className={css.feedback}>
        {" "}
        Mọi thắc mắc, ý kiến góp ý phản hồi, đề xuất xin vui lòng liên hệ với
        chúng tôi theo form bên dưới:
      </p>
      <form className={css.lb}>
        <label className={css.name}>Họ tên</label>
        <input className={css.ipt} type="text" required name=""></input>
        <label>Email của bạn</label>
        <input className={css.ipt} type="email" required name="email"></input>
        <label>Chủ đề</label>
        <input className={css.ipt} type="text"></input>
        <label>Nội dung phản hồi</label>
        <textarea></textarea>
        <div className={css.accept}>
          <input type="checkbox" className={css.checkbox}></input>
          <label>
            I accept and agree to the <a href="#">Terms Of Use</a>
          </label>
        </div>
        <button className={css.bt}>Submit</button>
      </form>
    </div>
  );
};

export default Contacts;