import css from './ProductCategory.module.scss'
import p1 from "../../../../assets/img/p1.jpg";
import {MdFavoriteBorder} from "react-icons/md"
import {Link} from "react-router-dom"
function ProductCategory() {
    return ( 
        <div className={css.container}>
            <div className={css.heading}>
                <span className={css.headingMain}> THỰC ĐƠN CỦA CHÚNG TÔI  </span>
                <span className={css.headingProduct}>Pizza</span>
             
            </div>

            <div className={css.menu}>
                <div className={css.pizza}>
                <Link to="/product/id">
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                </Link>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                    
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
            </div>

            <div className={css.heading}>
                <span className={css.headingProduct}>Mì Ý</span>
             
            </div>

            <div className={css.menu}>
                <div className={css.pizza}>
                <Link to="/product/id">
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                </Link>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
            </div>



            <div className={css.heading}>
                <span className={css.headingProduct}>Đồ uống</span>
             
            </div>

            <div className={css.menu}>
                <div className={css.pizza}>
                <Link to="/product/id">
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                </Link>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
                <div className={css.pizza}>
                    <div className={css.ImageWrapper}>
                        <img src={p1} alt='P1'/>
                    
                    </div>
                    <span>Red Chilli Pizza</span>
                    <div className={css.price}>
                        <span><span style={{color: "var(--themeRed)"}}>$</span> 18</span>
                        <MdFavoriteBorder className={css.favorite}/>
                    </div>
                </div>
            </div>

            <div className={css.button}>
                <Link to="/menu">
                    <button className={`btn ${css.btn}`}>
                        Xem Thêm Menu
                    </button>
                </Link>
            </div>
       
            
        </div>

        

  
    
    
     );
}

export default ProductCategory;