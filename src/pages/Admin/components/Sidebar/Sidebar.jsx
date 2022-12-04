/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrClose, GrMenu, GrProductHunt } from "react-icons/gr";
import { MdOutlineDashboard, MdOutlineCategory } from "react-icons/md";
import { FaShopify, FaUser } from "react-icons/fa";
import NotificationDropdown from "../../../../components/Dropdowns/NotificationDropdown.jsx";
import UserDropdown from "../../../../components/Dropdowns/UserDropdown.jsx";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [activePage, setActivePage] = useState(window.location.pathname);

  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Toggler */}
          <button
            className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <GrMenu />
          </button>
          {/* Brand */}
          <Link
            className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            to='/'
          >
            ADMIN PAGE
          </Link>
          {/* User */}
          <ul className='md:hidden items-center flex flex-wrap list-none'>
            <li className='inline-block relative'>
              <NotificationDropdown />
            </li>
            <li className='inline-block relative'>
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                    to='/'
                  >
                    MENU
                  </Link>
                </div>
                <div className='w-6/12 flex justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <GrClose />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className='mt-6 mb-4 md:hidden'>
              <div className='mb-3 pt-0'>
                <input
                  type='text'
                  placeholder='Search'
                  className=' px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal'
                />
              </div>
            </form>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              Quản lý
            </h6>
            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
              <li className='items-center rounded-md'>
                <Link
                  className={
                    "text-xs uppercase py-3 px-3 space-x-4 font-bold flex flex-row items-center " +
                    (activePage === "/admin/dashboard" ||
                    activePage === "/admin"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => setActivePage("/admin/dashboard")}
                  to='/admin/dashboard'
                >
                  <MdOutlineDashboard
                    className={
                      activePage === "/admin/dashboard" ||
                      activePage === "/admin"
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }
                  />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    "text-xs uppercase px-3 py-3 space-x-4 font-bold flex flex-row  items-center " +
                    (activePage === "/admin/category"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => setActivePage("/admin/category")}
                  to='/admin/category'
                >
                  <MdOutlineCategory
                    className={
                      "text-sm " +
                      (activePage === "/admin/category"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  />
                  {/* <i
                    className={
                      'fas fa-table mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/tables') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  >
                    {' '} */}
                  {/* </i>{' '} */}
                  <p>Danh mục</p>
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className={
                    "text-xs uppercase py-3 px-3 font-bold flex flex-row space-x-4 items-center " +
                    (activePage === "/admin/product"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => setActivePage("/admin/product")}
                  to='/admin/product'
                >
                  <GrProductHunt
                    className={
                      activePage === "/admin/product"
                        ? "opacity-75"
                        : "text-blueGray-300"
                    }
                  />
                  <p>Sản phẩm</p>
                </Link>
              </li>

              <li className='items-center '>
                <Link
                  className={
                    "text-xs uppercase py-3 px-3 font-bold  flex flex-row space-x-4 items-center " +
                    (activePage === "/admin/order"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => setActivePage("/admin/order")}
                  to='/admin/order'
                >
                  <FaShopify
                    className={
                      "text-sm" +
                      (activePage === "/admin/order"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  />
                  {/* <i
                    className={
                      'fas fa-tools mr-2 text-sm ' +
                      (window.location.href.indexOf('/admin/settings') !== -1
                        ? 'opacity-75'
                        : 'text-blueGray-300')
                    }
                  ></i> */}
                  <p> Đơn hàng</p>
                </Link>
              </li>
              <li className='items-center'>
                <Link
                  className={
                    "text-xs uppercase p-3 font-bold  flex flex-row space-x-4 items-center " +
                    (activePage === "/admin/user"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => setActivePage("/admin/user")}
                  to='/admin/user'
                >
                  <FaUser
                    className={
                      "text-sm " +
                      (activePage === "/admin/user"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  />
                  {/* <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i> */}
                  <p>Người dùng</p>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            {/* <hr className='my-4 md:min-w-full' /> */}
            {/* Heading */}
            {/* <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              Auth Layout Pages
            </h6> */}
            {/* Navigation */}

            {/* <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
              <li className='items-center'>
                <Link
                  className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                  to='/auth/login'
                >
                  <i className='fas fa-fingerprint text-blueGray-400 mr-2 text-sm'></i>{" "}
                  Login
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                  to='/auth/register'
                >
                  <i className='fas fa-clipboard-list text-blueGray-300 mr-2 text-sm'></i>{" "}
                  Register
                </Link>
              </li>
              <li className='items-center'>
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to='/admin/settings'
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Cài đặt
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
