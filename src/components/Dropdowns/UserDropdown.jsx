import React from "react";
import { createPopper } from "@popperjs/core";
import { dispatch } from "../../app/Store/store";
import { logout } from "../../app/Reducer/authSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDropdown = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div className='relative'>
      <a
        className='text-blueGray-500 block '
        href='#pablo'
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className='items-center flex'>
          <span className='w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'>
            <img
              alt='...'
              className='w-full rounded-full align-middle border-none shadow-lg'
              src={
                "https://lh3.googleusercontent.com/a-/ACNPEu9Ktsu5fgKx5Ea3YpzidjRpLBDbW5kyfLD2gQ9udA=s96-c-rg-br100"
              }
            />
          </span>
        </div>
      </a>
      <div
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 right-0 py-2 list-none text-left rounded shadow-lg min-w-48 absolute"
        }
      >
        <Link
          to='/profile'
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Thông tin người dùng
        </Link>
        <Link
          to='user/order'
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Đơn hàng
        </Link>
        <Link
          to='user/favorite'
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Yêu thích
        </Link>
        {isAdmin && (
          <Link
            to='/admin'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Trang quản trị
          </Link>
        )}
        <div className='h-0 my-2 border border-solid border-blueGray-100' />
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => dispatch(logout())}
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
