import css from "./Product.module.css"
import p1 from "../../assets/img/p1.jpg";
function Product() {
    return ( 
        <div className={css.container}>
            <div className={css.heading}>
                <span> OUR MENU </span>
                <span>Menu That Always</span>
                <span>Make You Fall in Love</span>
            </div>

            <div className={css.menu}>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span>18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            <div className={css.pizza}>
                <div className={css.ImageWrapper}>
                    <img src={p1} alt='P1'/>
                  
                </div>
                <span>Red Chilli Pizza</span>
                <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
            </div>
            </div>
        </div>

      

     );
}

export default Product;
