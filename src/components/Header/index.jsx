// import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
// import { BiSearchAlt, BiLogIn } from "react-icons/bi";
// import { BsBellFill } from "react-icons/bs";

// import { Link } from "react-router-dom";

// const Header = () => {
//   const [Open, setOpen] = useState(false);
//   const [OpenUser, setOpenUser] = useState(false);
//   return (
//     <div className='bg-[#ffffff] h-[60px] w-full flex justify-center shadow-md'>
//       <div className='w-[1140px] inline-flex items-center md:p-0 p-2 space-x-6'>
//         <div className='h-[21px] w-[62px]'>
//           <img src='https://viblo.asia/logo_full.svg' alt='logo' />
//         </div>
//         <div className='inline-flex md:justify-between justify-end space-x-8 items-center flex-1'>
//           <div className='md:block hidden ml-4'>
//             <ul className='flex space-x-3'>
//               <li className=''>Bài viết</li>
//               <li className=''>Hỏi đáp</li>
//               <li className=''>Thảo luận</li>
//             </ul>
//           </div>
//           <div className='flex md:w-[250px]'>
//             <input
//               type='search'
//               className='border-2 focus:ring-0 border-[#5488c7] h-[35px] w-10/12   focus:outline-0 px-2 hidden md:block'
//             />
//             <button className='md:bg-[#5488c7] flex-1 flex items-center justify-center text-xl'>
//               <BiSearchAlt className='md:text-[#ffffff] text-[#5488c7] text-2xl' />
//             </button>
//           </div>
//           <div className=' text-[#5488c7]'>
//             <div
//               className='md:relative inline-block text-left'
//               onBlur={() => setOpen(false)}
//             >
//               <div>
//                 <button
//                   type='button'
//                   className='inline-flex w-full justify-center rounded-full border border-gray-300 bg-[#eeeeee] p-2  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
//                   onClick={() => {
//                     setOpen(!Open);
//                   }}
//                 >
//                   <BsBellFill />
//                 </button>
//               </div>
//               <div
//                 className={` md:w-96 overflow-x-hidden  w-screen right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
//                   Open ? "absolute" : "hidden"
//                 }`}
//               >
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#sda'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-0'
//                   >
//                     Editsssssssssssssssssssssssssssssss
//                   </a>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-1'
//                   >
//                     Duplicate
//                   </a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#adsd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-2'
//                   >
//                     Archive
//                   </a>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-3'
//                   >
//                     Move
//                   </a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-4'
//                   >
//                     Share
//                   </a>
//                   <a
//                     href='#dasdsa'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-5'
//                   >
//                     Add to favorites
//                   </a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-6'
//                   >
//                     Delete
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className=' text-[#5488c7]'>
//             <div
//               className='md:relative inline-block text-left'
//               onBlur={() => setOpenUser(false)}
//             >
//               <div>
//                 <button
//                   type='button'
//                   className='inline-flex w-full justify-center rounded-full border border-gray-300 bg-[#eeeeee]  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
//                   onClick={() => {
//                     setOpenUser(!OpenUser);
//                   }}
//                 >
//                   <img
//                     src='https://images.viblo.asia/60x60/0ba1a6d4-d53a-44d3-857f-c92a2ca00189.jpg'
//                     alt=''
//                     className='rounded-full w-[37px]'
//                   />
//                 </button>
//               </div>
//               <div
//                 className={` md:w- overflow-x-hidden  w-screen right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
//                   OpenUser ? "absolute" : "hidden"
//                 }`}
//               >
//                 <div className='py-1' role='none'>
//                   <Link
//                     to='#nlas'
//                     className='text-gray-700 block px-4 py-2 text-sm flex'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-0'
//                   >
//                     <img
//                       src='https://images.viblo.asia/60x60/0ba1a6d4-d53a-44d3-857f-c92a2ca00189.jpg'
//                       alt=''
//                     />
//                     <div className='flex flex-col	'>
//                       <span>Huynh Thanh Hung</span>
//                       <button>Sửa thông tin</button>
//                     </div>
//                   </Link>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-1'
//                   >
//                     Thông tin cá nhân
//                   </a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#adsd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-2'
//                   >
//                     Đơn hàng
//                   </a>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-3'
//                   >
//                     Giỏ hàng
//                   </a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-4'
//                   ></a>
//                   <a
//                     href='#dasdsa'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-5'
//                   ></a>
//                 </div>
//                 <div className='py-1' role='none'>
//                   <a
//                     href='#dasd'
//                     className='text-gray-700 block px-4 py-2 text-sm'
//                     role='menuitem'
//                     tabIndex={-1}
//                     id='menu-item-6'
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <Link
//             to="/login"
//             className="flex items-center space-x-1 text-[#76a0d2]"
//           >
//             <BiLogIn className="text-2xl" />
//             <p className="md:block hidden">Đăng nhập/Đăng ký</p>
//           </Link> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;
import css from "./Header.module.css";
import Logo from "../../assets/img/Logo.png";
import { BiShoppingBag } from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai"
import {FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
function Header() {
  // var menu= document.querySelector('.iconMenu')
  // menu.onClick=function(){
  //   console.log(Math.random());
  // }
  return (
    <div className={css.header}>
      {/* logo side */}
      <div className={css.logo}>
        <img src={Logo} alt='logo' width={50} height={50} />
        <span>FUDO</span>
      </div>

      {/* MENU SIDE */}
      <ul className={css.menu}>
        <li>Trang chủ</li>
        <li>Sản phẩm</li>
        <li>Về chúng tôi</li>
      </ul>

      {/* right side */}

      <div className={css.rightSide}>
        <Link to='/login'>
          <div className={css.cart}>
            <HiOutlineUser size={35} color='#2E2E2E' />
          </div>
        </Link>
        <Link to='/Cart'>
          <div className={css.cart}>
            <BiShoppingBag size={35} color='#2E2E2E' />
            <div className={css.badge}>1</div>
          </div>
        </Link>
        <label htmlFor="navMobileInput"  className={css.iconMenu}>
           <AiOutlineMenu size={35} color='#2E2E2E'/>
        </label>
        <input type="checkbox" name="" className={css.navInput} id="navMobileInput" />
        <nav className={css.navMobile}>
          <label htmlFor="navMobileInput" className={css.navClose}>
          <FaTimes size={35} color='#2E2E2E'/>
          </label>
        
          <ul className={css.navMenu}>
            <li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Về chúng tôi</li>
          </ul>
          <div className={css.logoMobile}>
            <img src={Logo} alt='logo' width={60} height={60} />
            <span>FUDO</span>
          </div>
        </nav>
    
      </div>
    </div>
  );
}

export default Header;
