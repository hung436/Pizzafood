import HeroImage  from "../../../../assets/img/HeroImage.png"
import Pizzal from "../../../../assets/img/p1.jpg"
import css from "./Hero.module.css"
import Cherry from "../../../../assets/img/Cherry.png"
import {AiOutlinePhone} from "react-icons/ai"
function Hero(){
    return (
        <div className={css.container}>
           {/* left side */}
         <div className={css.left}>
            <div className={css.cherryDiv}>
               <span>More than Faster</span>
               <img src={Cherry } alt="ảnh lỗi" />
           </div>

            <div className={css.heroText}>
                <span>Be the Fastest</span>
                <span>In Delivering</span>
                <span>
                    Your <span style={{color: "var(--themeRed)"}}>Pizza</span>
                </span>
            </div>

            <span className={css.miniText}>
                Our Mission is to filling your tummy with delicious food and with fast and free delivery
            </span>

            <button className={`btn ${css.btn}`}>
                Get Started
            </button>
         </div>
           {/* right side */}
           <div className={css.right}>
                <div className={css.imagerContainer}>
                    <img src={HeroImage} alt="anhloi"/>
                </div>

                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <AiOutlinePhone color="white"/>
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                    <img src={Pizzal} alt="anhloi"/>

                    </div>

                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span><span style={{color: "var(--themeRed)" } }>$</span>7.39</span>
                    </div>
                </div>


           </div>
       </div> );
}


export default Hero;