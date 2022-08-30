import React, { useState } from 'react';
import { BiSearchAlt, BiLogIn } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';

const Header = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="bg-[#ffffff] h-[60px] w-full flex justify-center shadow-md">
      <div className="w-[1140px] inline-flex items-center md:p-0 p-2 space-x-2">
        <div className="h-[21px] w-[62px]">logo</div>
        <div className="inline-flex md:justify-between justify-end space-x-8 items-center flex-1">
          <div className="md:block hidden">
            <ul className="flex space-x-3">
              <li className="">Bài viết</li>
              <li className="">Hỏi đáp</li>
              <li className="">Thảo luận</li>
            </ul>
          </div>
          <div className="flex md:w-[350px]">
            <input
              type="search"
              className="border-2 border-[#5488c7] h-[40px] w-10/12 focus:outline-0 px-2 hidden md:block"
            />
            <div className="md:bg-[#5488c7] flex-1 flex items-center justify-center text-xl ">
              <BiSearchAlt className="md:text-[#ffffff] text-[#5488c7] text-2xl" />
            </div>
          </div>
          <div className=" text-[#5488c7]">
            <div
              className="md:relative inline-block text-left"
              onBlur={() => setOpen(false)}
            >
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-full border border-gray-300 bg-[#eeeeee] p-2  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  onClick={() => {
                    setOpen(!Open);
                  }}
                >
                  <BsBellFill />
                </button>
              </div>
              <div
                className={` md:w-96 overflow-x-hidden  w-screen right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  Open ? 'absolute' : 'hidden'
                }`}
              >
                <div className="py-1" role="none">
                  <a
                    href="#sda"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Editssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                  </a>
                  <a
                    href="#dasd"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Duplicate
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#adsd"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Archive
                  </a>
                  <a
                    href="#dasd"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Move
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#dasd"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-4"
                  >
                    Share
                  </a>
                  <a
                    href="#dasdsa"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-5"
                  >
                    Add to favorites
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#dasd"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-6"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-1 text-[#76a0d2]">
            <BiLogIn className="text-2xl" />
            <p className="md:block hidden">Đăng nhập/Đăng ký</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
