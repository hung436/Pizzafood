import css from "./Popper.module.scss"
function Wrapper({children}) {
    return(
        <div className={css.wrapper}>
        {children}
    </div>
    );
    
}

export default Wrapper;
// để ôm bên ngoài cái popper