import css from './Product.module.scss'
import p1 from "../../assets/img/p1.jpg"
import LeftArrow from "../../assets/img/arrowLeft.png"
import RightArrow from "../../assets/img/arrowRight.png"
function Product() {
    return(
        <div className={css.container}>
            <div className={css.imageWrapper}>
                <img src={p1} alt=""/>
            </div>
        {/* right side */}
            <div className={css.right}>
                <span>Pizza Bánh Xèo Tôm Nhảy</span>
                <span>Thổi bùng vị giác cùng sự kết hợp mới lạ đến từ hương vị bánh xèo truyền thống trên nền bánh pizza, hòa quyện xốt Mayonnaise, phô mai Mozzarella và nguyên liệu Tôm Nhảy cho khẩu vị cũng phải nhún nhảy từ lát bánh đầu tiên!</span>
                <span>149,000đ</span>
                <div className={css.size}>
                    <span>Size</span>
                    <div className={css.sizeVaraints}>
                        <div>Nhỏ</div>
                        <div>Trung Bình</div>
                        <div>Lớn</div>
                    </div>

                </div>
            {/* quantity counter */}
                <div className={css.quantity}>
                    <span>Quantity</span>
                    <div className={css.counter}>
                        <img className={css.leftArrow} src={LeftArrow}   alt=''/>
                        <span>1</span>
                        <img className={css.rightArrow} src={RightArrow}   alt=''/>
                    </div>
                </div>
                <div className={`btn ${css.btn}`}>
                    Thêm vào giỏ hàng 
                </div>
            </div>
            
        </div>
    )
}

export default Product;
