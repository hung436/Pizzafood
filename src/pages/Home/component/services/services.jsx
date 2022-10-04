import css from "./services.module.scss"
import s1 from "../../../../assets/img/s1.png"
import s2 from "../../../../assets/img/s2.png"
import s3 from "../../../../assets/img/s3.png"

function Services() {
    return ( 
      <>
        <div className={css.heading}>
            <span>WHAT WE SERVE </span>
            <span>Your Favourite Food</span>
            <span>Delivery Partner</span>
        </div>

        {/* features */}

        <div className={css.services}>
            <div className={css.features}>
                <div className={css.imageWrapper}>
                    <img src={s1} alt="anh1"/>
                </div>
                    <span>Easy to Order</span>
                    <span>You only need a few steps in food ordering</span>
            </div>
            <div className={css.features}>
                <div className={css.imageWrapper}>
                <img src={s2} alt="anh2"/>
                  
                </div>
                <span>Easy to Order</span>
                    <span>Delivery that is always on time even faster</span>
            </div>
            <div className={css.features}>
                <div className={css.imageWrapper}>
                <img src={s3} alt="anh3"/>
                </div>
                    <span>Easy to Order</span>
                    <span>Not only fast for us, qulity is also number one</span>
            </div>

        </div>
      </>
     );
}

export default Services;