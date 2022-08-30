import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
const Login = () => {
  return (
    <div className="flex  h-screen justify-center items-center">
      <div className="w-[445px]  border-2 flex flex-col justify-between items-center px-5 py-10 space-y-2 shadow-md rounded-md">
        <img
          className="w-[120px] flex justify-center"
          src="https://viblo.asia/logo_full.svg"
          alt=""
        />
        <h1 className="font-semibold text-xl text-center">
          Đăng nhập vào 12A1
        </h1>
        <div className="flex w-full h-9 items-center">
          <FaUserCircle className="w-1/5 text-xl " />
          <input type="text" className=" flex-1 rounded" />
        </div>
        <div className="flex w-full h-9 items-center">
          <RiLockPasswordFill className="w-1/5 text-xl " />
          <input type="text" className=" flex-1 rounded" />
        </div>
        <input
          type="submit"
          value="Đăng nhập"
          className="w-full bg-blue-500 h-10 rounded-lg"
        />
        <div className="flex justify-between w-full">
          <p>Quên mật khẩu?</p>
          <p>Tạo tài khoản</p>
        </div>
        <p>Đăng nhập bằng</p>
        <button>Facebook</button>
        <button>Google</button>
        <button>Github</button>
      </div>
    </div>
  );
};

export default Login;
